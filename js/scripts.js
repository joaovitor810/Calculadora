const display = document.getElementById("display")

const digitar = (tecla) => {
    display.value = display.value + tecla;
}

const limpar = () => {
    display.value = ""
}

const apagar = () => {
    let number = display.value
    display.value = number.substring(0, (number.length - 1))
}

let operacao = ""
let valor1 = ""

const definirOperacao = (operador) => {
    operacao = operador
    valor1 = display.value
    display.value = ""
}

const calcular = () => {
    switch (operacao) {
        case "+":
            display.value = Number(valor1) + Number(display.value)
            break
        case "-":
            display.value = Number(valor1) - Number(display.value)
            break
        case "*":
            display.value = Number(valor1) * Number(display.value)
            break
        case "/":
            display.value = Number(valor1) / Number(display.value)
            break
        default:
            display.value = display.value
    }
    operacao = ""
}