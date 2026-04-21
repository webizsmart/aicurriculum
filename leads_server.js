// leads_server.js
// 이 서버는 랜딩 페이지에서 보낸 이메일을 소중하게 저장합니다.

import { appendFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const PORT = 3000;
const CSV_FILE = "leads.csv";

// CSV 헤더 추가 (파일이 없을 때만)
if (!existsSync(CSV_FILE)) {
    await appendFile(CSV_FILE, "신청일시,이름,이메일\n");
}

const server = Bun.serve({
    port: PORT,
    async fetch(req) {
        const url = new URL(req.url);

        // CORS 설정 (로컬 브라우저에서 서버로의 접근 허용)
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "application/json"
        };

        // Preflight 요청 처리
        if (req.method === "OPTIONS") {
            return new Response(null, { headers });
        }

        // 데이터 저장 로직
        if (req.method === "POST" && url.pathname === "/apply") {
            try {
                const data = await req.json();
                const now = new Date().toLocaleString("ko-KR");
                
                // CSV 형식으로 저장 (쉼표로 구분)
                const line = `${now},${data.name},${data.email}\n`;
                await appendFile(CSV_FILE, line);

                console.log(`[Lead Captured] ${data.name} (${data.email})`);

                return new Response(JSON.stringify({ message: "Success" }), { status: 200, headers });
            } catch (err) {
                return new Response(JSON.stringify({ error: "Invalid Data" }), { status: 400, headers });
            }
        }

        return new Response("Not Found", { status: 404 });
    },
});

console.log(`✅ 리드 수집 서버가 시작되었습니다: http://localhost:${PORT}`);
console.log(`📧 수집된 이메일은 '${CSV_FILE}' 파일에서 확인하실 수 있습니다.`);
