const favchap = document.getElementById('favchap');
const lista = document.querySelector('ul');
const botao = document.querySelector('button');

botao.addEventListener('click', function() {

    // Verifica se o campo de entrada não está vazio
    if (favchap.value.trim() !== '') {


        // Cria um novo elemento de lista e um botão de exclusão
        const li = document.createElement('li');
        const botaoExcluir = document.createElement('button');

        // Define o conteúdo do item da lista e do botão de exclusão
        li.textContent = favchap.value;
        botaoExcluir.textContent = '❌';


        // Adiciona um evento de clique ao botão de exclusão para remover o item da lista
        botaoExcluir.addEventListener('click', function() {

            // Remove o item da lista quando o botão de exclusão é clicado
            lista.removeChild(li);
            favchap.focus();
        });


        // Adiciona o item da lista e o botão de exclusão à lista
        li.appendChild(botaoExcluir);
        lista.appendChild(li);

        // Limpa o campo de entrada e define o foco de volta para ele
        favchap.value = '';
        favchap.focus();

    } else {
        alert('Digite o capítulo favorito!');
    }

    favchap.focus();

});