function tabuada() {
    let num = document.querySelector('input#txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let contador = 1
        tab.innerHTML = ''
        while(contador <= 10) {
            let item = document.createElement('option') // Necessário para escrever os resultados em cada linha da tabuada
            item.text = `${n} x ${contador} = ${n*contador}`    
            contador++
            tab.appendChild(item) // Adiciona um elemento filho
        }
    }
}