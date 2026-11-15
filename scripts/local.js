const ano = document.querySelector("#ano-atual");
const modificacao = document.querySelector("#ultima-modificacao");

ano.textContent = new Date().getFullYear();

modificacao.textContent = document.lastModified;