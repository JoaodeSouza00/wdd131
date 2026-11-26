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
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "17-05-1888",
    anoDeConstrucao: 1888,
    area: 74792,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "07-06-2015",
    anoDeConstrucao: 2015,
    area: 96630,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "19-11-1974",
    anoDeConstrucao: 1974,
    area: 156558,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
  },
  {
    nomeDoTemplo: "Provo City Center Utah",
    localizacao: "Provo, Utah, Estados Unidos",
    consagracao: "20-03-2016",
    anoDeConstrucao: 2016,
    area: 85084,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
  },
  {
    nomeDoTemplo: "Los Angeles California",
    localizacao: "Los Angeles, Califórnia, Estados Unidos",
    consagracao: "11-03-1956",
    anoDeConstrucao: 1956,
    area: 190614,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
  },
  {
    nomeDoTemplo: "San Diego California",
    localizacao: "San Diego, Califórnia, Estados Unidos",
    consagracao: "25-04-1993",
    anoDeConstrucao: 1993,
    area: 58005,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
  },
  {
    nomeDoTemplo: "Dallas Texas",
    localizacao: "Dallas, Texas, Estados Unidos",
    consagracao: "19-10-1984",
    anoDeConstrucao: 1984,
    area: 44207,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
  },
  {
    nomeDoTemplo: "Atlanta Georgia",
    localizacao: "Atlanta, Geórgia, Estados Unidos",
    consagracao: "01-06-1983",
    anoDeConstrucao: 1983,
    area: 34500,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
  },
  {
    nomeDoTemplo: "Mesa Arizona",
    localizacao: "Mesa, Arizona, Estados Unidos",
    consagracao: "23-10-1927",
    anoDeConstrucao: 1927,
    area: 75000,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg"
  },
  {
    nomeDoTemplo: "Portland Oregon",
    localizacao: "Lake Oswego, Oregon, Estados Unidos",
    consagracao: "19-08-1989",
    anoDeConstrucao: 1989,
    area: 80500,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/portland-oregon-temple/portland-oregon-temple-1629-main.jpg"
  },
  {
    nomeDoTemplo: "Gilbert Arizona",
    localizacao: "Gilbert, Arizona, Estados Unidos",
    consagracao: "02-03-2014",
    anoDeConstrucao: 2014,
    area: 85326,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam, Estados Unidos",
    consagracao: "22-05-2022",
    anoDeConstrucao: 2022,
    area: 6861,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
  },
  {
    nomeDoTemplo: "Colonia Juárez Chihuahua México",
    localizacao: "Colonia Juárez, Chihuahua, México",
    consagracao: "06-03-1999",
    anoDeConstrucao: 1999,
    area: 6800,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-1601-main.jpg"
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
        filteredTemples = templos.filter(temple => temple.area > 90000);
    }

    else if(category ==="novos"){
        filteredTemples = templos.filter(temple => temple.anoDeConstrucao > 2000)
    }
    else if(category ==="antigos"){
        filteredTemples = templos.filter(temple => temple.anoDeConstrucao < 1900)
    }

    createTempleCard(filteredTemples);
}

const filterLinks = document.querySelectorAll(".navigation a");

filterLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const category = link.dataset.filter;

        filterTemples(category);

    });

});