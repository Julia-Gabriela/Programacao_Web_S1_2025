const form = document.getElementById("form-user");
const userList = document.getElementById("user-list");

// Função para carregar usuários do backend e mostrar na lista
function carregarUsuarios() {
    fetch("/api/users")
        .then(response => response.json())
        .then(users => {
            userList.innerHTML = ""; // limpa lista antes de preencher
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.nome} (${user.email})`;
                userList.appendChild(li);
            });
        })
        .catch(err => {
            console.error("Erro ao carregar usuários:", err);
        });
}

// Evento submit do formulário para criar usuário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // evitar recarregar a página

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if(!nome || !email) {
        alert("Preencha todos os campos!");
        return;
    }

    fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, email })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao cadastrar usuário");
        }
        return response.json();
    })
    .then(data => {
        form.reset(); // limpa form
        carregarUsuarios(); // recarrega lista com o novo usuário
    })
    .catch(err => {
        console.error(err);
        alert("Falha ao cadastrar usuário");
    });
});

// Carregar usuários ao carregar a página
carregarUsuarios();
