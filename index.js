//criar um programa que clacule média
// das notas das turmas de alunos e enviar
// mensagens de calculo da média


const alunosDaTurmaA = [
    {
     nome:  'mayk',
     nota:  7
    },    
    {
     nome:  'diego',
     nota:  5
    },
    {
     nome:  'fulano',
     nota:  2
    },
]

const alunosDaTurmaB = [
    {
     nome:  'Claiton',
     nota:  10
    },    
    {
     nome:  'Robson',
     nota:  10
    },
    {
     nome:  'ciclano',
     nota:  2
    }   
]

function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function EnviaMenssagem(media, turma){
    if(media>5){
        console.log(`A média da ${turma} foi de ${media}. Prabéns!`)
    } else {
        console.log(`A média da ${turma} foi menor que 5.`)
    }
}

EnviaMenssagem(media1, 'Turma A')
EnviaMenssagem(media2, 'Turma B')

/*DESAFIO 1
const idade = 16
// verificar se a paessoa é maior ou igual a 18 anos
// se sim, deixar entrar, se nao, bloquear a entrada 

if (!(idade>=18) || idade===17){
   console.log('bloquer entrada')
} else {
    console.log('deixar entrar')
}*/
