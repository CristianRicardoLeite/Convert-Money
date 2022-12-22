

const resultText = document.getElementById('resultConverterView1')
const inputValues = document.getElementById('valuesInput').value
const button = document.getElementById("converter-button")
const select = document.getElementById('select-coin')
const dolar = 5.2
const real = 1
const euro = 6
const bitcoin = 87000

const converter = () => {

    const inputValues = document.getElementById('valuesInput').value
    const resultText = document.getElementById('resultConverterView1')
    const converterResult = document.getElementById('resultConvertedView2')

    resultText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValues)

    if(select.value === "US$ Dolar Americano"){
    converterResult.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format((inputValues / dolar).toFixed(2))}

    else if(select.value === "€ Euro"){  
    converterResult.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format((inputValues / euro).toFixed(2))}

    else if(select.value === "Bitcoin"){ 
    converterResult.innerHTML = Intl.NumberFormat('en-SV', { 
        style: 'currency', 
        currency: 'BTC' 
    }).format((inputValues / bitcoin).toFixed(9))}

}

const change = () => {

    const coinName = document.getElementById('coinConvertedText')
    const coinFlag = document.getElementById('coinFlag')

    if (select.value === "US$ Dolar Americano") {
        coinName.innerHTML = "Dolar Americano"
        coinFlag.src = "./assets/Dolar Americano.png"
    }
    else if (select.value === "€ Euro") {
        coinName.innerHTML = "Euro"
        coinFlag.src = "./assets/Euro.png"
    }
    else if (select.value === "Bitcoin") {
        coinName.innerHTML = "Bitcoin"
        coinFlag.src = "./assets/Bitcoin.png"
    }

}

const resetInput = () => {
    const resetInput = document.getElementById('valuesInput')
    const resultconverted = document.getElementById('resultConvertedView2')

    resetInput.value = '';
    resultText.innerHTML = "R$ 0" 

    if (select.value === "US$ Dolar Americano") {
        resultconverted.innerHTML = "US$ 0"
    }
    else if (select.value === "€ Euro") {
        resultconverted.innerHTML = "€ 0"
    }
    else if (select.value === "Bitcoin") {
        resultconverted.innerHTML = " BTC 0"
    }
   
    

}


button.addEventListener('click', converter)
select.addEventListener('change', change )
select.addEventListener('click', resetInput )

