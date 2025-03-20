document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('jwt', data.token); 
            alert('Login bem-sucedido!');
            window.location.href = 'index.html'; 
        } else {
            alert(data.message || 'Erro ao fazer login');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao conectar com o servidor.');
    }
});
