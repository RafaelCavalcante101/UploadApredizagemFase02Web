const usuario = {
    
    empresa:'Rocketseat',
    cor: 'Roxo',
    Foco: 'Programação',
    Endereço : {
        rua: 'Avenida Vereador Orlando Pinto',
        numero: 2410
    },
    funcionario: "Rafael Sá",
    idade: 34,
    tecnologia:[
        {linguagem: 'C++', especialidade:'Desktop'},
        { linguagem: 'Python', especialidade: 'Data Science' },
        { linguagem: 'JavaScript', especialidade: 'Web/Mobile' }

    ]
          
}

console.log(`A empresa ${usuario.empresa} está localizada na ${usuario.Endereço.rua}, ${usuario.Endereço.numero}`)
console.log(`O usuário ${usuario.funcionario} tem ${usuario.idade} anos e usa a tecnologias 
${usuario.tecnologia[0].linguagem} com especialidade em ${usuario.tecnologia[0].especialidade}`)