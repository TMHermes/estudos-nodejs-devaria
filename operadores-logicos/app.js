const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kart');
console.log('Além das suas verificações, precisamos verificar se você está na lista de presença do horário');

readLine.question("Qual o ano do seu nascimento?", ano => {
    if(ano > 2004){
        console.log('Voce não tem 18 anos');
        return;
    }else{
        readLine.question("Você tem habilitação? (Sim/Não)", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação para entrar no kart');
            }else{
                readLine.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao Kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('Bem vindo ao Kart Rafael');
                            break;
                        default:
                            console.log('Você não está na lista de presença');
                    }
                })
            }
        })
    }
})

