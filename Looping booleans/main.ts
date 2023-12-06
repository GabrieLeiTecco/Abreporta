// o que eu preciso fazer?
// iniciar com a porta fechada
// receber a resposta do usuario
// verificar se a porta está fechada ou aberta
// criar um looping para perguntar novamente

function passarPorta(passou : boolean){
    if (passou == true){
        verificarPorta()
    }else{
        ficarParado(passou)
    }
}

function verificarPorta(){
    let passou : boolean = false
    let resp : string = String(prompt("Você encontra uma porta fechada na sua frente \nVocê deseja passar pela porta? "))

    if (resp == "sim" || resp == "Sim" || resp == "s"){
        passou = true
        passarPorta(passou)
    }else if(resp == "nao" || resp == "não" || resp == "Não" || resp == "Nao"){
        passou = false
        passarPorta(passou)
    }else if(resp == "cancelar" || resp == "cancel"){
        console.log("cabou")
    }else{
        verificarPorta()
    }
}

function ficarParado(passou : boolean){
    let resp : string = String(prompt("Você fica parado com uma porta fechada na sua frente \nVocê deseja passar pela porta? "))

    if (resp == "sim" || resp == "Sim" || resp == "s"){
        passou = true
        passarPorta(passou)
    }else if(resp == "nao" || resp == "não" || resp == "Não" || resp == "Nao"){
        passou = false
        passarPorta(passou)
    }else if(resp == "cancelar" || resp == "cancel"){
        console.log("cabou")
    }else{
        verificarPorta()
    }
}
verificarPorta()
