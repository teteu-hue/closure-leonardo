const carro = (function carro(){
    let velocidade = 0;
    let tanque = 0;
    let marcha = 1;
    let energia = false;

    function ligarCarro(){
        return energia = true;
    };

    function desligarCarro(){
        return energia = false;
    };

    function verificaSeEstaLigado(){
        if(energia == true){
            return true;
        } else if(energia == false){
            return false;
        };
    };

    function verificaTanqueVazio(){
        if(tanque == 0){
            return true;
        };
    };

    function verificaVelMax(valorAceleracao){
        if((valorAceleracao + velocidade) > 140){
            console.log("O carro não suporta uma velocidade maior que 140KM");
            return true;
        }
        return false;
    };

    function verificaVelocidade(valorAceleracao){
    
        if(verificaVelMax(valorAceleracao)){
             return true;
        } else {
            if(velocidade >= 140){
                return true;
            } else {
                return false;
            };
        }
    };

    function abastecerCarro(valorAbastecido){
        if(tanque >= 100){
            return "Já ta abastecido!";
        } else if(valorAbastecido > 100){
            return "O veículo não suporta mais de 100L de Gasolina";
        }
        tanque += valorAbastecido;
    };

    function mostratanque(){
        console.log(tanque);
    };

    function acelerarCarro(valorAceleracao){
        if(verificaTanqueVazio()){
            return "O carro precisa ser abastecido para acelerar";
        }
        if(valorAceleracao > 140){
            return "O carro não permite esse nível de aceleração";
        }
        if(verificaVelocidade(valorAceleracao)){
            return "Valor de velocidade já está no máximo atingido";
        } 

        velocidade += valorAceleracao;

        console.log("Acelerando...");
        console.log("Vrum vrum vrum");
        console.log("A velocidade é: " + velocidade);
        
    };

    function frearCarro(valorFreio){
        console.log("Desacelerando...");
        return velocidade -= valorFreio;
    };

     return {
        abastecer: ((valorAbastecido) => {
            return abastecerCarro(valorAbastecido);
        }),
        
        tanque: (() => {
            return mostratanque();
        }),

        acelerar: ((valorAceleracao) => {
            return acelerarCarro(valorAceleracao);
        }),

        frear: ((valorFreio) => {
            return frearCarro(valorFreio);
        })
    };

})();

//carro.tanque();
carro.abastecer(50);
carro.acelerar(50);
//console.log(carro.acelerar(50));
//carro.tanque();
carro.acelerar(50);
carro.acelerar(50);
carro.acelerar(40);


//carro