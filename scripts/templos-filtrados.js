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
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "07-08-2005",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "21-05-1888",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "07-06-2015",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "02-05-2020",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "19-11-1974",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "10-01-1986",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "02-12-1983",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Natal Brasil",
    localizacao: "Natal, Rio Grande do Norte, Brasil",
    consagracao: "Ainda não consagrado",
    area: 19800,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/natal-brazil-temple/natal-brazil-temple-45005-main.jpg"
  },
  {
    nomeDoTemplo: "Campo Grande Brasil",
    localizacao: "Campo Grande, Mato Grosso do Sul, Brasil",
    consagracao: "Ainda não consagrado",
    area: 11300,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/campo-grande-brazil-temple/campo-grande-brazil-temple-75521-main.jpg"
  },
  {
    nomeDoTemplo: "Goiânia Brasil",
    localizacao: "Goiânia, Goiás, Brasil",
    consagracao: "Ainda não consagrado",
    area: 18850,
    urlDaImagem:
      "https://churchofjesuschristtemples.org/assets/img/temples/goiania-brazil-temple/goiania-brazil-temple-75522-main.jpg"
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