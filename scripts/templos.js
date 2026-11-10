const anoAtual = document.querySelector("#anoatual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// Obtém o ano atual
anoAtual.textContent = new Date().getFullYear();

// Obtém a data da última modificação
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;

// Adiciona evento de clique ao botão do menu
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    
});