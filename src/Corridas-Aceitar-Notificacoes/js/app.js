// Função para exibir notificações
function exibirNotificacao(mensagem, cor) {
    const notificacao = document.getElementById('notificacao');
    notificacao.textContent = mensagem;
    notificacao.style.backgroundColor = cor === "verde" ? "#28a745" : cor === "vermelho" ? "#dc3545" : "#007bff"; // Verde, vermelho ou azul
    notificacao.style.display = "block";
    setTimeout(() => notificacao.style.display = "none", 3000); // A notificação desaparece após 3 segundos
}

// Função para carregar os dados da corrida do localStorage
function carregarCorrida() {
    return JSON.parse(localStorage.getItem('corrida')) || null;
}

// Função para salvar os dados da corrida no localStorage
function salvarCorrida(corrida) {
    localStorage.setItem('corrida', JSON.stringify(corrida));
}

// Função para atualizar os detalhes da corrida na interface
function atualizarDetalhesCorrida(corrida) {
    const detalhesCorrida = document.getElementById('detalhesCorrida');
    if (corrida) {
        detalhesCorrida.innerHTML = `
            <p><strong>Partida:</strong> ${corrida.partida}</p>
            <p><strong>Destino:</strong> ${corrida.destino}</p>
            <p><strong>Data:</strong> ${corrida.data}</p>
            <p><strong>Horário:</strong> ${corrida.horario}</p>
        `;
    } else {
        detalhesCorrida.innerHTML = "<p>Nenhuma corrida encontrada.</p>";
    }
}

// Lógica para a página de Solicitar Corrida
if (document.getElementById('btnSolicitar')) {
    document.getElementById('btnSolicitar').addEventListener('click', () => {
        const partida = document.getElementById('partida').value;
        const destino = document.getElementById('destino').value;
        const data = document.getElementById('data').value;
        const horario = document.getElementById('horario').value;

        if (partida && destino && data && horario) {
            const corrida = { partida, destino, data, horario };
            salvarCorrida(corrida);
            exibirNotificacao("Corrida solicitada com sucesso!", "verde");
        } else {
            exibirNotificacao("Por favor, preencha todos os campos.", "vermelho");
        }
    });
}

// Lógica para a página de Editar/Cancelar Corrida
if (document.getElementById('btnEditar') || document.getElementById('btnCancelar')) {
    const corrida = carregarCorrida();
    atualizarDetalhesCorrida(corrida);

    document.getElementById('btnEditar').addEventListener('click', () => {
        const modal = document.getElementById('modalEdicao');
        modal.style.display = 'flex';

        document.getElementById('modalPartida').value = corrida.partida;
        document.getElementById('modalDestino').value = corrida.destino;
        document.getElementById('modalData').value = corrida.data;
        document.getElementById('modalHorario').value = corrida.horario;
    });

    document.getElementById('btnSalvarModal').addEventListener('click', () => {
        const novaCorrida = {
            partida: document.getElementById('modalPartida').value,
            destino: document.getElementById('modalDestino').value,
            data: document.getElementById('modalData').value,
            horario: document.getElementById('modalHorario').value
        };

        salvarCorrida(novaCorrida);
        atualizarDetalhesCorrida(novaCorrida);
        exibirNotificacao("Alterações salvas com sucesso!", "verde");
        document.getElementById('modalEdicao').style.display = 'none';
    });

    document.getElementById('btnCancelar').addEventListener('click', () => {
        localStorage.removeItem('corrida');
        atualizarDetalhesCorrida(null);
        exibirNotificacao("Corrida cancelada!", "vermelho");
    });
}

// Lógica para a página de Aceitar/Finalizar Corrida
if (document.getElementById('btnAceitar') || document.getElementById('btnFinalizar')) {
    const corrida = carregarCorrida();
    atualizarDetalhesCorrida(corrida);

    document.getElementById('btnAceitar').addEventListener('click', () => {
        exibirNotificacao("Corrida aceita!", "verde");
        document.getElementById('btnAceitar').style.display = 'none';
        document.getElementById('btnFinalizar').style.display = 'block';
    });

    document.getElementById('btnFinalizar').addEventListener('click', () => {
        exibirNotificacao("Corrida finalizada!", "azul");
        localStorage.removeItem('corrida');
        atualizarDetalhesCorrida(null);
        document.getElementById('btnFinalizar').style.display = 'none';
    });
}
