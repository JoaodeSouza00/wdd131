const anoAtual = document.querySelector("#anoatual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

const container = document.querySelector("#galeria-de-templos");

// Obtém o ano atual
anoAtual.textContent = new Date().getFullYear();

// Obtém a data da última modificação
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;

// Adiciona evento de clique ao botão do menu
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    
});


const templos = [
  {
    nomeDoTemplo: "Campinas Brasil",
    localizacao: "Campinas, São Paulo, Brasil",
    consagracao: "17-05-2002",
    anoDeConstrucao: 2002,
    area: 48100,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
  },
  {
    nomeDoTemplo: "Curitiba Brasil",
    localizacao: "Curitiba, Paraná, Brasil",
    consagracao: "01-06-2008",
    anoDeConstrucao: 2008,
    area: 27850,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-1078-main.jpg"
  },
  {
    nomeDoTemplo: "Fortaleza Brasil",
    localizacao: "Fortaleza, Ceará, Brasil",
    consagracao: "02-06-2019",
    anoDeConstrucao: 2019,
    area: 36000,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
  },
  {
    nomeDoTemplo: "Manaus Brasil",
    localizacao: "Manaus, Amazonas, Brasil",
    consagracao: "10-06-2012",
    anoDeConstrucao: 2012,
    area: 32032,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/138-Manaus-Brazil-Temple.jpg"
  },
  {
    nomeDoTemplo: "Porto Alegre Brasil",
    localizacao: "Porto Alegre, Rio Grande do Sul, Brasil",
    consagracao: "17-12-2000",
    anoDeConstrucao: 2000,
    area: 13325,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-60459-main.jpg"
  },
  {
    nomeDoTemplo: "Recife Brasil",
    localizacao: "Recife, Pernambuco, Brasil",
    consagracao: "15-12-2000",
    anoDeConstrucao: 2000,
    area: 37200,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
  },
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, São Paulo, Brasil",
    consagracao: "30-10-1978",
    anoDeConstrucao: 1978,
    area: 59246,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-São-Paulo-Brazil-Temple.jpg"
  },
  {
    nomeDoTemplo: "Belém Brasil",
    localizacao: "Belém, Pará, Brasil",
    consagracao: "20-11-2022",
    anoDeConstrucao: 2022,
    area: 28675,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
  },
  {
    nomeDoTemplo: "Brasília Brasil",
    localizacao: "Brasília, Distrito Federal, Brasil",
    consagracao: "17-09-2023",
    anoDeConstrucao: 2023,
    area: 25000,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
  },
  {
    nomeDoTemplo: "Rio de Janeiro Brasil",
    localizacao: "Rio de Janeiro, Rio de Janeiro, Brasil",
    consagracao: "08-05-2022",
    anoDeConstrucao: 2022,
    area: 29966,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
  },
  {
    nomeDoTemplo: "Salvador Brasil",
    localizacao: "Salvador, Bahia, Brasil",
    consagracao: "20-10-2024",
    anoDeConstrucao: 2024,
    area: 29963,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668-main.jpg"
  },
];


function createTempleCard(temples) {

    const container = document.querySelector("#galeria-de-templos");

    container.innerHTML = "";

    temples.forEach(temple => {

        container.innerHTML += `
            <section class="temple-card">
                <h2>${temple.nomeDoTemplo}</h2>
                <p>Localização: ${temple.localizacao}</p>
                <p>Consagração: ${temple.consagracao}</p>
                <p>Área: ${temple.area} sq ft</p>
                <img
                    src="${temple.urlDaImagem}"
                    alt="Templo ${temple.nomeDoTemplo}"
                    loading="lazy"
                >
            </section>
        `;

    });
}

createTempleCard(templos);



function filterTemples(category) {

    let filteredTemples = [];

    if (category === "todos") {
        filteredTemples = templos;
    }

    else if (category === "pequenos") {
        filteredTemples = templos.filter(temple => temple.area < 10000);
    }

    else if (category === "grandes") {
        filteredTemples = templos.filter(temple => temple.area > 10000);
    }

    else if(category ==="novos"){
        filteredTemples = templos.filter(temple => temple.anoDeConstrucao > 2000)
    }
    else if(category ==="antigos"){
        filteredTemples = templos.filter(temple => temple.anoDeConstrucao < 1900)
    }

    createTempleCard(filteredTemples);
}