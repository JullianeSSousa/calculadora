function somar() {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)

    const soma = num1 + num2
    document.getElementById("resultado").innerHTML = soma

}

function subtrair() {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)

    const subtracao= num1 - num2
    document.getElementById("resultado").innerHTML = subtracao

}

function multiplicar() {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)

    const multiplicacao = num1 * num2
    document.getElementById("resultado").innerHTML = multiplicacao

}

function dividir() {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)

    const divisao = num1 / num2
    document.getElementById("resultado").innerHTML = divisao

}