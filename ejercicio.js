function listarNumero(){
    for(let i= 0; i <= 3; i++){
        console.log(i);
    }
}

function ejecutar(numEjercicio){
    if(numEjercicio == 1){
        listarNumero();
    }else if(numEjercicio == 2){
        listaNumeroReversa();
    }else if (numEjercicio == 3) {
        listarPares();
    }

}

function listaNumeroReversa(){
    for(let i= 3; i>0; i--){
        console.log(i);
    }
}

function listarPares(){
    for (let i=0; i<10; i+=2){
        console.log(i);
    }
}