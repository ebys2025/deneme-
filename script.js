// Kayıt işlemleri  
document.getElementById('registerForm')?.addEventListener('submit', async function(e) {  
    e.preventDefault();  

    const tcNo = document.getElementById('tcNo').value;  
    const target = document.getElementById('target').value;  

    try {  
        const response = await fetch('http://localhost:3000/register', {  
            method: 'POST',  
            headers: { 'Content-Type': 'application/json' },  
            body: JSON.stringify({ tcNo, target })  
        });  

        if (response.ok) {  
            alert('Kayıt başarılı! Giriş yapabilirsiniz.');  
            window.location.href = 'login.html';  
        } else {  
            const error = await response.json();  
            alert(error.error);  
        }  
    } catch (error) {  
        alert('Kayıt sırasında bir hata oluştu.');  
    }  
});  

// Giriş işlemleri  
document.getElementById('loginForm')?.addEventListener('submit', async function(e) {  
    e.preventDefault();  

    const loginTcNo = document.getElementById('loginTcNo').value;  

    try {  
        const response = await fetch('http://localhost:3000/login', {  
            method: 'POST',  
            headers: { 'Content-Type': 'application/json' },  
            body: JSON.stringify({ tcNo: loginTcNo })  
        });  

        if (response.ok) {  
            const data = await response.json();  
            alert('Başarılı giriş! Hedef: ' + data.target);  
            window.location.href = data.target + '.html';  
        } else {  
            const error = await response.json();  
            alert(error.error);  
        }  
    } catch (error) {  
        alert('Giriş sırasında bir hata oluştu.');  
    }  
});