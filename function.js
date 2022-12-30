

const resultText = document.getElementById('resultConverterView1')
const inputValues = document.getElementById('valuesInput').value
const button = document.getElementById("converter-button")
const select = document.getElementById('convertedOption')
const convertingCurrency = document.getElementById('converting-currency')




const converter = async () => {

    const inputValues = document.getElementById('valuesInput').value
    const resultText = document.getElementById('resultConverterView1')
    const converterResult = document.getElementById('resultConvertedView2')
    const convertingCurrency = document.getElementById('converting-currency').value

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,BRL-USD,EUR-USD,BTC-USD,BRL-EUR,USD-EUR,BTC-EUR").then(response => response.json())



    if (convertingCurrency === "R$ Real") {
        const Dolar = data.USDBRL.high
        const Euro = data.EURBRL.high
        const Bitcoin = data.BTCBRL.high

        console.log("A Moeda REAL foi escolhida")

        resultText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValues)

        if (select.value === "US$ Dolar Americano") {
            converterResult.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format((inputValues / Dolar).toFixed(2))
        }

        else if (select.value === "€ Euro") {
            converterResult.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format((inputValues / Euro).toFixed(2))
        }
        else if (select.value === "Bitcoin") {
            converterResult.innerHTML = Intl.NumberFormat('en-SV', {
                style: 'currency',
                currency: 'BTC'
            }).format(((inputValues / Bitcoin)/ 1000).toFixed(9))
        }

    }
    else if (convertingCurrency === "US$ Dolar Americano") {
        const Real = data.BRLUSD.high
        const Euro = data.EURUSD.high
        const Bitcoin = data.BTCUSD.high

        console.log("A Moeda DOLAR foi escolhida")

        resultText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValues)


        if (select.value === "R$ Real") {
            converterResult.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format((inputValues / Real).toFixed(2))
        }

        else if (select.value === "€ Euro") {
            converterResult.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format((inputValues / Euro).toFixed(2))
        }

        else if (select.value === "Bitcoin") {
            converterResult.innerHTML = Intl.NumberFormat('en-SV', {
                style: 'currency',
                currency: 'BTC'
            }).format(((inputValues / Bitcoin)/ 1000).toFixed(9))
        }
    }
    else {
        const Real = data.BRLEUR.high
        const Dolar = data.USDEUR.high
        const Bitcoin = data.BTCEUR.high

        console.log("A Moeda EURO foi escolhida")

        resultText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValues)

        if (select.value === "US$ Dolar Americano") {
            converterResult.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format((inputValues / Dolar).toFixed(2))
        }

        else if (select.value === "R$ Real") {
            converterResult.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format((inputValues / Real).toFixed(2))
        }

        else if (select.value === "Bitcoin") {
            converterResult.innerHTML = Intl.NumberFormat('en-SV', {
                style: 'currency',
                currency: 'BTC'
            }).format(((inputValues / Bitcoin) / 1000).toFixed(9))
        }
    }

}


const selectConvertedOptionDisable = () => {

    const selectDisable = document.getElementById('converting-currency').value

    if (selectDisable === "US$ Dolar Americano") {

        console.log("Dolar foi escolhido")
        const selectConvertedAcurrency = document.getElementById('select-coin')
        if(selectConvertedAcurrency === "US$ Dolar Americano" )
        selectConvertedAcurrency.setAttribute('disabled','')
    }
    else if (selectDisable === "€ Euro") {
        console.log("euro foi escolhido")
        const selectConvertedAcurrency = document.getElementById('select-coin').value
        if(selectConvertedAcurrency === "€ Euro" )
        selectConvertedAcurrency.setAttribute('disabled','')
    }

    else if (selectDisable === "R$ Real") {
        console.log("real foi escolhido")
        const selectConvertedAcurrency = document.getElementById('select-coin').value
        if(selectConvertedAcurrency === "R$ Real" )
        selectConvertedAcurrency.setAttribute('disabled','')
    }
}

const changeAcurrencyConverting = () => {

    const acurrencyName = document.getElementById('coinConverterView')
    const acurrencyFlag = document.getElementById('Converting-flag')
    const acurrencyConvertingText = document.getElementById('resultConverterView1')

    if (convertingCurrency.value === "US$ Dolar Americano") {
        acurrencyName.innerHTML = "Dolar Americano"
        acurrencyFlag.src = "./assets/Dolar Americano.png"
        acurrencyConvertingText.innerHTML = "US$ 0"
    }


    else if (convertingCurrency.value === "€ Euro") {
        acurrencyName.innerHTML = "Euro"
        acurrencyFlag.src = "./assets/Euro.png"
        acurrencyConvertingText.innerHTML = "€ 0"

    }

    else if (convertingCurrency.value === "R$ Real") {
        acurrencyName.innerHTML = "Real"
        acurrencyFlag.src = "./assets/Real.png"
        acurrencyConvertingText.innerHTML = "R$ 0"

    }


}

const changeAcurrencyConverted = () => {

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
    else if (select.value === "R$ Real") {
        coinName.innerHTML = "Real"
        coinFlag.src = "./assets/Real.png"
    }
    else if (select.value === "Bitcoin") {
        coinName.innerHTML = "Bitcoin"
        coinFlag.src = "./assets/Bitcoin.png"
    }

}

const resetInput = () => {
    const resetInput = document.getElementById('valuesInput')
    const resultconverted = document.getElementById('resultConvertedView2')



    if (select.value === "US$ Dolar Americano") {
        resultconverted.innerHTML = "US$ 0"
        resetInput.value = ''
    }
    else if (select.value === "€ Euro") {
        resultconverted.innerHTML = "€ 0"
        resetInput.value = ''
    }
    else if (select.value === "Bitcoin") {
        resultconverted.innerHTML = " BTC 0"
    }
    else if (select.value === "R$ Real") {
        resultconverted.innerHTML = " R$ 0"
        resetInput.value = ''
    }

    if (convertingCurrency.value === "R$ Real") {
        resultText.innerHTML = "R$ 0"

    }
    else if (convertingCurrency.value === "€ Euro") {
        resultText.innerHTML = "€ 0"

    }
    else if (convertingCurrency.value === "US$ Dolar Americano") {
        resultText.innerHTML = "US$ 0"

    }

}

//   if (document.getElementById('opcoes').value == "1"){ 
//       document.getElementById('2018').setAttribute('disabled',''); }

button.addEventListener('click', converter)
convertingCurrency.addEventListener('change', changeAcurrencyConverting)
convertingCurrency.addEventListener('change', selectConvertedOptionDisable)
select.addEventListener('change', changeAcurrencyConverted)
select.addEventListener('click', resetInput)

