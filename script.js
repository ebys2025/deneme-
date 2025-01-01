document.getElementById('girisForm').onsubmit = function(event) {
    event.preventDefault();
    var tcKimlik = document.getElementById('tcKimlik').value;
    var hedef = document.getElementById('hedef').value;

    // Kayıt işlemi burada yapılabilir (örneğin, veritabanına ekleme)

    alert(tcKimlik + " ile " + hedef + " hedefine kayıt oldunuz.");
    // Kullanıcıyı giriş ekranına yönlendirebiliriz
    window.location.href = "giris.html"; // Giriş ekranına yönlendirme
};

document.getElementById('girisForm').onsubmit = function(event) {
    event.preventDefault();
    var tcKimlik = document.getElementById('tcKimlik').value;

    // Burada, TC kimlik numarasına göre hedefi kontrol etmelisiniz.
    // Örnek olarak, sabit bir hedef belirliyoruz.
    var hedef = "A"; // Bu, veritabanından alınan gerçek hedefle değiştirilmelidir.

    if (hedef === "A") {
        window.location.href = "hedefA.html"; // Hedef A sayfasına yönlendirme
    } else if (hedef === "B") {
        window.location.href = "hedefB.html"; // Hedef B sayfasına yönlendirme
    } else {
        alert("Kullanıcı bulunamadı veya hedef belirlenemedi.");
    }
};