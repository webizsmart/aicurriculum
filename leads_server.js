// leads_server.js (중복 방지 기능 추가 버전)
import { appendFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import http from "node:http";

const PORT = 3000;
const CSV_FILE = "leads.csv";

// CSV 헤더 추가 (파일이 없을 때만) - 엑셀 한글 깨짐 방지 BOM 삽입
if (!existsSync(CSV_FILE)) {
    const BOM = "\ufeff";
    await appendFile(CSV_FILE, BOM + "신청일시,이름,이메일\n");
}

const server = http.createServer(async (req, res) => {
    // CORS 설정
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
    };

    if (req.method === "OPTIONS") {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    const url = new URL(req.url, `http://localhost:${PORT}`);

    if (req.method === "POST" && url.pathname === "/apply") {
        let body = "";
        req.on("data", chunk => { body += chunk.toString(); });
        req.on("end", async () => {
            try {
                const data = JSON.parse(body);
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!data.name || !emailRegex.test(data.email)) {
                    res.writeHead(400, headers);
                    res.end(JSON.stringify({ error: "Invalid data format" }));
                    return;
                }

                // [중복 체크 로직 시작]
                const currentLeads = await readFile(CSV_FILE, "utf8");
                if (currentLeads.includes(data.email)) {
                    console.log(`⚠️ [Duplicate Denied] Email: ${data.email} | Already exists.`);
                    res.writeHead(409, headers); // 409 Conflict
                    res.end(JSON.stringify({ error: "Duplicate email", message: "이미 신청 완료된 이메일입니다." }));
                    return;
                }

                const now = new Date().toLocaleString("ko-KR");
                const line = `${now},${data.name.replace(/,/g, "")},${data.email}\n`;
                await appendFile(CSV_FILE, line);

                console.log(`✅ [Lead Captured] Name: ${data.name} | Email: ${data.email} | Time: ${now}`);

                res.writeHead(200, headers);
                res.end(JSON.stringify({ message: "Success" }));
            } catch (err) {
                console.error(`💥 Error: ${err.message}`);
                res.writeHead(500, headers);
                res.end(JSON.stringify({ error: "Internal Server Error" }));
            }
        });
        return;
    }

    res.writeHead(404, headers);
    res.end("Not Found");
});

server.listen(PORT, () => {
    console.log(`✅ 중복 방지 기능이 포함된 서버가 시작되었습니다: http://localhost:${PORT}`);
});
