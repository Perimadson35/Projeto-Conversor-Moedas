const convertButton = document.querySelector(".convert-button");
const fromCurrencySelect = document.querySelector("#from-currency");
const toCurrencySelect = document.querySelector("#to-currency");

const currencyRates = {
    BRL: 1,
    USD: 5.7385,
    EUR: 6.25,
    GBP: 7.4308,
    BTC: 630443.89
};



function convertValues() {
    const inputValue = parseFloat(document.querySelector(".input-currency").value.replace(',', '.'));
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    const fromValueEl = document.querySelector("#from-value");
    const toValueEl = document.querySelector("#to-value");

    if (isNaN(inputValue)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    // 1. Converta o valor da moeda de origem para BRL
    const valueInBRL = inputValue * currencyRates[fromCurrency];

    // 2. Converta de BRL para a moeda de destino
    const convertedValue = valueInBRL / currencyRates[toCurrency];

    // Exibe o valor de origem
    fromValueEl.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: fromCurrency
    }).format(inputValue);

    // Exibe o valor convertido
    toValueEl.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: toCurrency
    }).format(convertedValue);
}

function changeCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const currencyNames = {
        BRL: "Real Brasileiro",
        USD: "Dólar Americano",
        EUR: "Euro",
        GBP: "Libra Esterlina",
        BTC: "Bitcoin"
    };

    const currencyImages = {
        BRL: "./assets/brasil.png",
        USD: "./assets/u.s.a.png",
        EUR: "./assets/euro.png",
        GBP: "./assets/gbp.png",
        BTC: "./assets/bitcoin.png"
    };

    // Atualiza os nomes e as imagens da moeda de origem
    document.querySelector("#from-name").innerHTML = currencyNames[fromCurrency];
    document.querySelector("#from-flag").src = currencyImages[fromCurrency];

    // Atualiza os nomes e as imagens da moeda de destino
    document.querySelector("#to-name").innerHTML = currencyNames[toCurrency];
    document.querySelector("#to-flag").src = currencyImages[toCurrency];

    // Atualiza a conversão
    convertValues();
}

// Adicionando eventos
fromCurrencySelect.addEventListener("change", changeCurrency);
toCurrencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

// Inicializa a conversão automaticamente quando a página é carregada
window.addEventListener("load", convertValues);
