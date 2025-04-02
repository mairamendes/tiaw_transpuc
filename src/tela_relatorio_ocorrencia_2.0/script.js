// script.js
document.addEventListener("DOMContentLoaded", () => {
    const reclamacaoForm = document.getElementById("reclamacaoForm");
    const reclamacoesList = document.getElementById("reclamacoesList");

    // Carregar reclamações salvas no localStorage ao carregar a página
    let reclamacoes = JSON.parse(localStorage.getItem("reclamacoes")) || [];

    // Exibir reclamações salvas ao carregar a página
    displayReclamacoes();

    // Função para enviar nova reclamação
    reclamacaoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const reclamacao = document.getElementById("reclamacao").value;

        const novaReclamacao = {
            id: Date.now(),
            email,
            reclamacao
        };

        reclamacoes.push(novaReclamacao);
        saveReclamacoes();
        displayReclamacoes();
        reclamacaoForm.reset();
    });

    // Função para exibir as reclamações
    function displayReclamacoes() {
        reclamacoesList.innerHTML = "";
        reclamacoes.forEach((item) => {
            const reclamacaoDiv = document.createElement("div");
            reclamacaoDiv.classList.add("reclamacao");
            reclamacaoDiv.innerHTML = `
                <p><strong>Email:</strong> ${item.email}</p>
                <p><strong>Reclamação:</strong> ${item.reclamacao}</p>
                <div class="button-group">
                    <button class="edit-button" onclick="editReclamacao(${item.id})">Editar</button>
                    <button onclick="deleteReclamacao(${item.id})">Deletar</button>
                </div>
            `;
            reclamacoesList.appendChild(reclamacaoDiv);
        });
    }

    // Função para salvar reclamações no localStorage
    function saveReclamacoes() {
        localStorage.setItem("reclamacoes", JSON.stringify(reclamacoes));
    }

    // Função para deletar uma reclamação
    window.deleteReclamacao = (id) => {
        reclamacoes = reclamacoes.filter(item => item.id !== id);
        saveReclamacoes();
        displayReclamacoes();
    };

    // Função para editar uma reclamação
    window.editReclamacao = (id) => {
        const reclamacao = reclamacoes.find(item => item.id === id);
        if (reclamacao) {
            document.getElementById("email").value = reclamacao.email;
            document.getElementById("reclamacao").value = reclamacao.reclamacao;
            deleteReclamacao(id);
        }
    };
});
