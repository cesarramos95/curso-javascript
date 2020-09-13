function verificar() {
    var data = new Date() // Criando variável no formato de data
    var ano = data.getFullYear() // Recebe o ano com 4 dígitos
    var formularioAno = document.getElementById('txtano') // Armazeno o ano digitado
    var resultado = document.querySelector('div#resultado') /* Exibe um texto infomando se foi selecionado homem ou mulher
                                                             e a idade do mesmo */    
                                                               
    if(formularioAno.value.length == 0 || Number(formularioAno.value) > ano) { 
        /* Verifica se não foi digitado nenhum valor no campo de ano
           ou se o ano fornecido é maior do que o atual*/
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        /* pega o sexo selecionado
        Usa getElementsByName, pois, como tem o mesmo nome (radsex) não é
        possível selecionar pelo Id */
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img') // Cria um elemento do tipo img
        img.setAttribute('id','foto') // Atribui id 'foto' ao elemento do tipo img 

        if(fsex[0].checked) { //Verifica se o que está marcado é o botão "Homem"
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src','bebehomem.png')
            } else if(idade < 21) {
                // Homem jovem
                img.setAttribute('src','homemjovem.png')
            } else if(idade < 50) {
                // Homem adulto
                img.setAttribute('src','homemadulto.png')
            } else {
                // Homem idoso
                img.setAttribute('src','homemidoso.png')
            }

        } else if(fsex[1].checked) { // Verifica se o que está marcado é o botão "Mulher"
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // Criança mulher
                img.setAttribute('src','bebemulher.png')
            } else if(idade < 21) {
                // Jovem mulher
                img.setAttribute('src','mulherjovem.png')
            } else if(idade < 50) {
                // Mulher adulta
                img.setAttribute('src','mulheradulta.png')
            } else {
                // Mulher idosa
                img.setAttribute('src','mulheridosa.png')
            }
        }
        resultado.style.textAlign = 'center' // Centraliza o texto
        resultado.innerHTML = `<br>${genero} com ${idade} anos.</br>`
        resultado.appendChild(img) /* Exibe a imagem salva na variavel img, 
                                      que armazena um elemento (as fotos)  do tipo img
                                      */
    }
}