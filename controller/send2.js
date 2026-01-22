const form = document.getElementById('meuForm');
const msg = document.getElementById('mensagem');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    

    const dados = new FormData(form);
    const objetoDados = Object.fromEntries(dados.entries());

    // Aqui entrará a conexão com o Google Sheets (URL do Apps Script)
    console.log("Dados capturados:", objetoDados);

    // Simulação de envio
    fetch('https://script.google.com/macros/s/AKfycbxFjOPU5nNZPhW9QOKCF429X1SHMToP2Sle4UV9SRekPCv8GKTsq6Err5D2Vl1gXT70YA/exec', { 
            method: 'POST',
            mode: "no-cors", // Essencial para scripts do Google
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(objetoDados) 
        })
        .then(() => {
            alert("Cadastro realizado!");
            this.reset();
        })
        .catch((error) => {
            console.error("Erro detalhado:", error);
            alert("Erro ao enviar");
        });
});