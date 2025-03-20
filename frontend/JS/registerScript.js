document.getElementById('register-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Conta criada com sucesso!');
            window.location.href = 'login.html'; 
        } else {
            alert(data.message || 'Erro ao registrar');
        }
    } catch (error) {
        console.error('Erro ao registrar:', error);
        alert('Erro ao conectar com o servidor.');
    }
});
