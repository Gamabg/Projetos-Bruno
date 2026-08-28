const prompt = require ("prompt-sync")()

function getUserInfo(){
    let weight = prompt ("digite seu peso")
    let height = prompt ("digite sua altura")

    return{
        peso: weight,
        altura: height
    }
}

function calcImc(pesoInformado,alturaInformada){
    return pesoInformado/alturaInformada**2
}

function main(){
    let userData = getUserInfo()
    let peso = userData.peso
    let altura = userData.altura
    let resultadoImc = calcImc(peso,altura)

    if(resultadoImc < 18){
        console.log(`Seu IMC é ${resultadoImc} e voce está abaixo do peso`)
    }
    else if(resultadoImc >18 && resultadoImc < 23){
        console.log(`Seu IMC é ${resultadoImc} e você está com o peso normal`)
    }
    else{
        console.log(`Seu IMC é ${resultadoImc} e voce está acima do peso`)
    }
}
main()