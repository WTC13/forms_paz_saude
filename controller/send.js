let stepHistory = [];

// Função para avançar normal (Passo + 1)
function nextStep() {
    const currentStep = document.querySelector('.step.active');
    const stepNum = parseInt(currentStep.dataset.step);
    
    // Se estivermos no passo 3 e for 'OUTRO', validamos se o texto foi digitado
    if (stepNum === 3) {
        const inputOculto = document.getElementById('plano_atual');
        const inputOutroNome = document.getElementById('outro_plano_nome');
        
        if (inputOculto.value === 'OUTRO') {
            if (inputOutroNome.value.trim() === "") {
                alert("Por favor, digite o nome do seu plano.");
                inputOutroNome.focus();
                return;
            }
            // Atualiza o valor oculto com o que foi digitado para ir ao banco de dados
            inputOculto.value = "OUTRO: " + inputOutroNome.value;
        }
    }

    // Lógica padrão de avançar
    const input = currentStep.querySelector('input[required]');
    if (input && input.value.trim() === "") {
        alert("Por favor, preencha o campo.");
        input.focus();
        return;
    }

    stepHistory.push(stepNum);
    jumpToStep(stepNum + 1);
}

// Função para voltar usando o histórico real
function prevStep() {
    if (stepHistory.length > 0) {
        const lastStep = stepHistory.pop();
        const currentStep = document.querySelector('.step.active');
        const prevStepEl = document.querySelector(`.step[data-step="${lastStep}"]`);

        currentStep.classList.remove('active');
        prevStepEl.classList.add('active');
    }
}

// Auxiliar para pular telas
function jumpToStep(target) {
    const currentStep = document.querySelector('.step.active');
    const targetStep = document.querySelector(`.step[data-step="${target}"]`);

    if (targetStep) {
        currentStep.classList.remove('active');
        targetStep.classList.add('active');
    }
}

// Seleciona valor e vai para o próximo passo (+1)
function selectAndNext(inputId, value) {
    document.getElementById(inputId).value = value;
    nextStep();
}

// Seleciona valor e pula para um passo específico (Lógica da Pergunta 2)
function selectAndJump(inputId, value, target) {
    document.getElementById(inputId).value = value;
    const currentStep = document.querySelector('.step.active');
    stepHistory.push(parseInt(currentStep.dataset.step)); // Salva onde estava
    jumpToStep(target);
}

function selectPlano(valor) {
    const inputOculto = document.getElementById('plano_atual');
    const campoExtra = document.getElementById('extra-plano');
    const inputOutroNome = document.getElementById('outro_plano_nome');
    const btnNext = document.getElementById('btn-next-plano');

    inputOculto.value = valor;

    if (valor === 'OUTRO') {
        // Se for OUTRO, mostra o campo de texto e o botão de próximo
        campoExtra.style.display = 'block';
        btnNext.style.display = 'block';
        inputOutroNome.focus();
        // Não avança automaticamente para o usuário poder digitar
    } else {
        // Se for um plano da lista, esconde o extra e avança direto
        campoExtra.style.display = 'none';
        btnNext.style.display = 'none';
        inputOutroNome.value = ''; // Limpa caso tenha digitado algo
        
        // Salva no histórico e pula para o passo 4
        const currentStep = document.querySelector('.step.active');
        stepHistory.push(parseInt(currentStep.dataset.step));
        jumpToStep(4);
    }
}

// Envio do formulário (Google Sheets)
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.innerText = "Enviando...";
    btn.disabled = true;

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch("https://script.google.com/macros/s/AKfycbxFjOPU5nNZPhW9QOKCF429X1SHMToP2Sle4UV9SRekPCv8GKTsq6Err5D2Vl1gXT70YA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Obrigado! Cadastro recebido.");
        window.location.reload();
    })
    .catch(() => {
        alert("Erro ao enviar.");
        btn.innerText = "Enviar";
        btn.disabled = false;
    });
});