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

    // 선택된 패키지 추적 및 스크롤 로직 강화
    let selectedKit = 'default';
    document.querySelectorAll('.btn-kit, .hero-btns .btn-primary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 버튼이 링크(a)인 경우 기본 동작 제어
            if (btn.tagName === 'A' && btn.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = btn.getAttribute('href');
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            selectedKit = btn.getAttribute('data-kit') || 'default';
            console.log(`Selected Kit Clicked: ${selectedKit}`);
        });
    });

    // Form submission
    const form = document.querySelector('#apply-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            const nameInput = form.querySelector('input[type="text"]');
            const emailInput = form.querySelector('input[type="email"]');
            
            const leadData = {
                name: nameInput.value,
                email: emailInput.value,
                kit: selectedKit
            };

            try {
                const response = await fetch('http://localhost:3000/apply', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(leadData)
                });

                if (response.ok) {
                    btn.innerText = '다운로드 시작! 🎉';
                    btn.style.background = '#00c853';
                    
                    // 선택된 패키지에 맞춰 PDF 파일 결정
                    let downloadFile = 'AI_Insight_Guide.pdf';
                    if (selectedKit === 'sales') downloadFile = 'Sales_Survival_Kit.pdf';
                    if (selectedKit === 'pro') downloadFile = 'Expert_Survival_Kit.pdf';
                    
                    const link = document.createElement('a');
                    link.href = `./${downloadFile}`;
                    link.download = downloadFile;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    form.reset();
                    
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.background = '';
                    }, 5000);
                } else if (response.status === 409) {
                    const result = await response.json();
                    alert(result.message);
                    btn.innerText = originalText;
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
