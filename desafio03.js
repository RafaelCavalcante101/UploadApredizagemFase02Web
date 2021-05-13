/*const funcionario = [
    {
        nome:"Carlos",
        tecnologia:["HTML", "CSS"]
    },
    {
        nome:"Rafael",
        tecnologia:["JavaScript","CSS"]
    },
    {
        nome: "Fernanda",
        tecnologia:["HTML", "Node,js"]
    },
    {
        nome: "Pablo",
        tecnologia:["HTML", "Node,js"]
    }
   
]

for( let i = 0; i < funcionario.length; i++){
    console.log(`${funcionario[i].nome} trabalha com ${funcionario[i].tecnologia}.`)
}
  


function checarCss (funcionario){
    for( let tecnologia of funcionario.tecnologia){
       if(tecnologia == "CSS") return true
    } 
    return false
}

for( let i = 0; i < funcionario.length; i++){
    const trabalhaComCss = checarCss (funcionario[i])
    if (trabalhaComCss){
        console.log (`O funcionário ${funcionario[i].nome} trabalha com CSS.`)
    }
}*/

//SOMA DE DESPESAS E RECEITAS

const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 9.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },

    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120]
    },

    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

function calculaSaldo (receitas, despesas){
    const somaReceitas = somaNumeros (receitas)
    const somaDespesas = somaNumeros (despesas)
    return somaReceitas - somaDespesas
}


function somaNumeros (numeros){
    let soma = 0
    for(let numero of numeros){
        soma = soma + numero
    }
    return soma
}

for(let usuario of usuarios){
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
    if(saldo > 0){
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)

    }else{
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}


