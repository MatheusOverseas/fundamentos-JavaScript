function tratarErroELancar(erro){
    // throw new Error('...');
    // 
    // throw 'Mensgem';
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e){
        tratarErroELancar(e);
    } finally{
        console.log('Final');
    }
    
}

const obj = {nome: 'Matheus'};
imprimirNomeGritado(obj);