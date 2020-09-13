let num = [5, 8, 20]
num.push(7) // Insere um elemento na ultima posição do vetor
num.sort()
console.log(num)
// num.length Retorna o tamanho do vetor

//console.log(`O vetor é o ${num}`);

let pos = num.indexOf(20)

if(pos == -1){
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}