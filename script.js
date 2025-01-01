document.addEventListener('DOMContentLoaded', function() {
    const kayitForm = document.getElementById('kayitForm');
    const girisForm = document.getElementById('girisForm');

    if (kayitForm) {
        kayitForm.onsubmit = async function(event) {
            event.preventDefault();
            const tcKimlik = document.getElementById('tcKimlik').value;
            const hedef = document.getElementById('hedef').value;

            // Kullanıcı kaydını sunucuya gönder
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ tcKimlik, hedef })
            });

            if (response.ok) {
                alert("Kayıt başarılı!");
                window.location.href = "giris.html"; // Giriş ekranına yönlendirme
            } else {
                alert("Kayıt başarısız. Lütfen tekrar deneyin.");
            }
        };
    }

    if (girisForm) {
        girisForm.onsubmit = async function(event) {
            event.preventDefault();
            const tcKimlik = document.getElementById('tcKimlik').value;

            // Giriş isteği gönder
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ tcKimlik })
            });

            if (response.ok) {
                const data = await response.json();
                const hedef = data.hedef;
                if (hedef === "A") {
                    window.location.href = "hedefA.html"; // Hedef A sayfasına yönlendirme
                } else if (hedef === "B") {
                    window.location.href = "hedefB.html"; // Hedef B sayfasına yönlendirme
                }
            } else {
                alert("Kullanıcı bulunamadı.");
            }
        };
    }
});