document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    // Converte o FormData em um objeto simples
    const data = Object.fromEntries(formData.entries());

    // Usamos o modo 'no-cors' para evitar bloqueios de redirecionamento do Google
    fetch("https://script.google.com/macros/s/AKfycbxFjOPU5nNZPhW9QOKCF429X1SHMToP2Sle4UV9SRekPCv8GKTsq6Err5D2Vl1gXT70YA/exec", {
        method: "POST",
        mode: "no-cors", // Essencial para scripts do Google
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
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