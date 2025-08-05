let flipState = 0;

function Cantada() {
    document.body.classList.add('flip');
    setTimeout(() => {
        if (flipState === 0) {
            document.getElementById('img1').innerHTML = '<img src="imgs/emoji vergonha.jpeg" alt="Emoji Vergonha" class="img-fluid">';
            document.getElementById('img2').innerHTML = '<img src="imgs/emoji jóia.jpg" alt="Emoji Jóia" class="img-fluid">';
            document.getElementById('main-title').innerHTML = '1. Eu vou ficar muito feliz!';
            flipState = 1;
        } else if (flipState === 1) {
            document.getElementById('img1').innerHTML = '<img src="imgs/emoji jóia.jpg" alt="Emoji Jóia" class="img-fluid">';
            document.getElementById('img2').innerHTML = '<img src="imgs/emoji flornaboca.jpg" alt="Emoji Flor na Boca" class="img-fluid">';
            document.getElementById('main-title').innerHTML = '2. Sou Romântico, as vezes!';
            flipState = 2;
        } else if (flipState === 2) {
            document.getElementById('img1').innerHTML = '<img src="imgs/emoji choro.jpg" alt="Emoji Choro" class="img-fluid">';
            document.getElementById('img2').innerHTML = '<img src="imgs/emoji triste.jpg" alt="Emoji Triste" class="img-fluid">';
            document.getElementById('main-title').innerHTML = '3. Eu ficaria triste se você não quiser :('; 
            flipState = 3;
        } else if (flipState === 3) {
            document.getElementById('img1').innerHTML = '<img src="imgs/emoji vergonha.jpeg" alt="Emoji Vergonha" class="img-fluid">';
            document.getElementById('img2').innerHTML = '<img src="imgs/WhatsApp Image 2025-07-21 at 22.53.06.jpeg" alt="WhatsApp Image" class="img-fluid">';
            document.getElementById('main-title').innerHTML = '4. Eu passei a noite fazendo o site pra você!';
            flipState = 4;
        } else if (flipState === 4) {
            document.getElementById('img1').innerHTML = '<img src="imgs/emoji nervoso.png" alt="Emoji Jóia" class="img-fluid">';
            document.getElementById('img2').innerHTML = '<img src="imgs/emoji flornaboca.jpg" alt="Emoji Coração" class="img-fluid">';
            document.getElementById('main-title').innerHTML = '5. Já chegou até aqui... Por que não me dá uma chance? ❤️✨';
            // Substitui o botão por dois botões de resposta
            var btn = document.getElementById('btn-cantada');
            if (btn) {
                var btnContainer = btn.parentNode;
                btn.remove();
                btnContainer.innerHTML = `
                    <button class="btn btn-success btn-lg mx-2" id="btn-sim" style="font-size:1.3rem; border-radius:40px; box-shadow:0 2px 8px rgba(0,255,0,0.10);">
                        Sim!
                    </button>
                    <button class="btn btn-outline-danger btn-lg mx-2" id="btn-nao" style="font-size:1.3rem; border-radius:40px; box-shadow:0 2px 8px rgba(255,0,0,0.10);">
                        Não...
                    </button>
                `;
                document.getElementById('btn-sim').onclick = function() {
                    document.getElementById('main-title').innerHTML = 'Sabia que você ia dizer sim! 🥰🌹';
                    document.getElementById('img1').innerHTML = '<img src="imgs/emoji jóia.jpg" alt="Emoji Jóia" class="img-fluid">';
                    document.getElementById('img2').innerHTML = '<img src="imgs/emoji flornaboca.jpg" alt="Emoji Flor na Boca" class="img-fluid">';
                    btnContainer.innerHTML = '<div class="mt-4 text-success font-weight-bold" style="font-size:1.4rem;">Te levando pro WhatsApp... 💬</div>';
                    setTimeout(function() {
                        window.location.href = 'https://wa.me/5511996413861?text=Oi!%20A%20resposta%20é%20sim%20❤️';
                    }, 1200);
                };
                document.getElementById('btn-nao').onclick = function() {
                   
                    // Cria popup de erro com animação
                    let popup = document.createElement('div');
                    popup.innerHTML = 'Não aceito como resposta! ';
                    popup.style.position = 'fixed';
                    popup.style.top = '20px';
                    popup.style.left = '50%';
                    popup.style.transform = 'translateX(-50%)';
                    popup.style.background = '#dc3545';
                    popup.style.color = '#fff';
                    popup.style.padding = '18px 32px';
                    popup.style.borderRadius = '18px';
                    popup.style.fontSize = '1.3rem';
                    popup.style.fontWeight = 'bold';
                    popup.style.zIndex = '9999';
                    popup.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                    popup.style.opacity = '0';
                    popup.style.transition = 'opacity 0.5s cubic-bezier(.77,0,.18,1)';
                    document.body.appendChild(popup);
                    setTimeout(() => {
                        popup.style.opacity = '1'; // fade-in
                    }, 50);
                    setTimeout(() => {
                        popup.style.opacity = '0'; // fade-out
                        setTimeout(() => {
                            popup.remove();
                        }, 500);
                    }, 2000);
                };
            }
            flipState = 5;
        }
    }, 350);
    setTimeout(() => {
        document.body.classList.remove('flip');
    }, 700);
}
