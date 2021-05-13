const alunosDaTurmaA = [
    {
        nome: 'mayk',
        nota: 7.5
    },
    {
        nome: 'diego',
        nota: 3.2
    },
    {
        nome: 'fulano',
        nota: 5
    },
]

const alunosDaTurmaB = [
    {
        nome: 'Claiton',
        nota: 10
    },
    {
        nome: 'Robson',
        nota: 10
    },
    {
        nome: 'ciclano',
        nota: 2
    },
    {
        nome: 'novo aluno',
        nota: 9
    }
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A media da ${turma} foi de ${media}. Vamos melhorar?`)
    }
}

enviaMensagem(media1, "turma A")
enviaMensagem(media2, "turma B")


function marcarComoReprevado(aluno) {
    aluno.reprovado = false
    if (aluno.nota < 5) {
        aluno.reprovado = true
    }


}

function enviarMensagemReprovado(aluno){
    if(aluno.reprovado){
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos){
    for (let aluno of alunos){
        marcarComoReprevado(aluno);
        enviarMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)