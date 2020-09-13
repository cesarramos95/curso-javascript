function contar() {
    let i = document.getElementById('inicio') // Início da contagem
    let f = document.querySelector('input#fim') // Fim da contagem
    let p = document.querySelector('input#passo') // passo da contagem
    let resultado = document.querySelector('div#resultado')

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('Dados faltando! Tente novamente.')
        innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        var ini = Number(i.value) // Recebe o valor inicial
        var finalC = Number(f.value) // Recebe o valor final
        var passo = Number(p.value) // Recebe o passo da contagem

        if(passo <= 0) {
            window.alert('Passo inválido! Impossível contar. Considerando passo 1.')
            passo = 1
        }

        if(ini < finalC) { // Contagem crescente
            for(let contagem = ini; contagem <= finalC; contagem += passo) {
                resultado.innerHTML += `${contagem}   \u{1F923}	 ` // Encontrado em https://unicode.org/emoji/charts/full-emoji-list.html
            }
        } else if(ini > finalC) { // Contagem decrescente
            for(let contagem = ini; contagem >= finalC; contagem -= passo) {
                resultado.innerHTML += `${contagem} \u{1F4A9}`
            }
        }
        resultado.innerHTML += '\u{1F4A9}'
    }
}