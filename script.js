document.addEventListener('DOMContentLoaded', () => {
    // Reveal effects on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.problem-card, .step, .solution-text, .apply-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // Add class for animation
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Form submission
    const form = document.querySelector('#apply-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            // 서식 데이터 추출
            const nameInput = form.querySelector('input[type="text"]');
            const emailInput = form.querySelector('input[type="email"]');
            
            const leadData = {
                name: nameInput.value,
                email: emailInput.value
            };

            try {
                // 로컬 서버로 요청 보냄
                const response = await fetch('http://localhost:3000/apply', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(leadData)
                });

                if (response.ok) {
                    btn.innerText = '다운로드 시작! 🎉';
                    btn.style.background = '#00c853';
                    
                    // [PDF 다운로드 로직 추가]
                    const link = document.createElement('a');
                    link.href = './AI_Insight_Guide.pdf';
                    link.download = 'AI_Insight_Guide.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    form.reset();
                    
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.background = '';
                    }, 5000);
                } else {
                    throw new Error('서버 오류');
                }
            } catch (err) {
                alert('서버가 실행 중이지 않습니다. leads_server.js를 먼저 실행해 주세요!');
                console.error(err);
            }
        });
    }
});
