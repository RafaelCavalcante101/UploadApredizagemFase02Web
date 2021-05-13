const usuario={
    nome:"maria",
    tansações:[],
    saldo:0
}

function criarTransação (transação){
    usuario.tansações.push (transação)

    if(transação.tipo === "credito"){
        usuario.saldo = usuario.saldo + transação.valor
    } else {
        usuario.saldo = usuario.saldo - transação.valor
    }

}