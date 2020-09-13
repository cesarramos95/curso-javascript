function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) // Converte o num digitado no campo para um numeral
        let contador = 1
        tab.innerHTML = ' '
        while (contador <= 10) {
            let item = document.createElement('option')      // O elemento option permite preencher o Select com os números da tabuada    
            item.text = `${n} x ${contador} = ${contador*n}`
            item.value = `tab${contador}` // Necessário em linguagens como o PHP
            tab.appendChild(item) // Adiciona um elemento filho
            contador++            // No caso, adiciona o item dentro do campo Select
        }                           

    }

}