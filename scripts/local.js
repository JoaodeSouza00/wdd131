const ano = document.querySelector("#ano-atual");
const modificacao = document.querySelector("#ultima-modificacao");
const resultado = document.querySelector("#sensacao");

const temperatura = 24;
const vento = 5;

function calcularSensacaoTermica(temperatura, vento){
    if (temperatura <= 10 && vento > 4.8) {
        const sensacaoTermica = 13.12 + 0.6215 * temperatura -11.37 * Math.pow(vento, 0.16) + 0.3965 * temperatura * Math.pow(vento, 0.16)
        return sensacaoTermica;
    }else{
        return "N/A"
    }
    
}

const sensacao = calcularSensacaoTermica(temperatura, vento);

if (typeof sensacao === "number") {
    resultado.textContent = `${sensacao.toFixed(1)} °C`;
} else {
    resultado.textContent = sensacao;
}

ano.textContent = new Date().getFullYear();

modificacao.textContent = document.lastModified;