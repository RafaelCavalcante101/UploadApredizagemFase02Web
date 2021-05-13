//CALCULO IMC

/*const nome = 'carlos'
const peso = 108
const altura = 1.88

const IMC = peso / (altura*altura)
console.log(IMC)


if(IMC >= 30){
    console.log('Carlos vc está acima do peso')
} else {
    console.log('Carlos vc não está acima do peso')
}*/

// CALCULO DE APSENTADORIA

const nome = 'vanessa'
const sexo = 'F'
const idade = 55
const contri = 30

const aposentar = (idade + contri)

console.log (aposentar)

if (aposentar >= 85 && contri >= 30 && sexo =='F' || aposentar >= 95 && contri >= 45 && sexo =='M') {
    console.log (`${nome}, vc pode se aposentar`)
} else {
    console.log (`${nome}, vc ainda nao pode se aposentar`)
}



