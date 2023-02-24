function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resposta = document.getElementById('resposta')

    if (inicio.value.lenght == 0 || fim.value.length == 0 || passo.value.lenght == 0){
        resposta.innerHTML = 'Não é possível contar :-('
        window.alert('[ERRO] Faltam dados!')
    }
    else{
        resposta.innerHTML = 'Contando: <br>'
        let ini = Number(inicio.value)
        let f = Number(fim. value)
        let pas = Number(passo.value)
        if(pas <= 0) {
            window.alert('Passo digitado inválido! Vou considerar o passo 1')
            pas = 1
        }
        if(ini < f){
            
            for(let cont = ini; cont <= f; cont += pas){
                resposta.innerHTML += `${cont} \u{1F463}`
            }
        }
        else{
            
            for(let cont = ini; cont >= fim; cont -= pas){
                resposta.innerHTML += `${cont} \u{1F463}`
            }
        }
        
        resposta.innerHTML += `\u{274C}`
    }
    
}