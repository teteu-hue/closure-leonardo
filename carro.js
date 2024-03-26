const carro = (function carro(){
    let velocidade = 0;
    let tanque = 0;
    let marcha = 1;
    let energia = false;

    // liga e desliga
    function ligarCarro(){
        return energia = true;
    };

    function desligarCarro(){
        return energia = false;
    };
    // ********************

    // verificações para acelerar
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
        if((valorAceleracao + velocidade) > 150){
            console.log("O carro não suporta uma velocidade maior que 140KM");
            return true;
        }
        return false;
    };
    function verificaVelMin(){
        if(velocidade < 0){
            console.log("O carro não suporte uma velocidade negativa");
            return true;
        }
        return false;
    };

    function verificaVelocidadeTrocaMarcha(){
    
        if(velocidade > 140){
            marcha = 6;
            console.log("A marcha engatada é: "+ marcha);

        } else if(velocidade <= 140 && velocidade > 100){
            marcha = 5;
            console.log("A marcha engatada é: "+ marcha);

        } else if(velocidade <= 100 && velocidade > 60){
            marcha = 4;
            console.log("A marcha engatada é: "+ marcha);

        } else if(velocidade <= 60 && velocidade > 50){
            marcha = 3;
            console.log("A marcha engatada é: "+ marcha);

        } else if(velocidade <= 50 && velocidade > 40){
            marcha = 2;
            console.log("A marcha engatada é: "+ marcha);
        };
    };
    // ********************

    // funcoes do carro
    function acelerarCarro(valorAceleracao){
        if(!verificaSeEstaLigado()){
            return console.log("Não é possível acelerar, pois o carro está desligado");
        }
        if(verificaTanqueVazio()){
            return "O carro precisa ser abastecido para acelerar";
        }
        if(valorAceleracao > 140){
            return console.log("O carro não permite esse nível de aceleração");
        }
        if(verificaVelMax(valorAceleracao)){
            return false;
        }

        velocidade += valorAceleracao;
        verificaVelocidadeTrocaMarcha();

        console.log("Acelerando...");
        console.log("Vrum vrum vrum");
        console.log("**************");
        
    };

    function frearCarro(valorFreio){
        if(!verificaSeEstaLigado()){
            return console.log("Não é possível desacelerar, pois o carro está desligado");
        }
        console.log("Desacelerando...");
        
        velocidade -= valorFreio;
        verificaVelocidadeTrocaMarcha();
        if(verificaVelMin()){
            return velocidade = 0;    
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

    function mostraTanque(){
        console.log(tanque);
    };

    function mostraVelocidade(){
        console.log("A velocidade é: " + velocidade);
    };

    function mostraMarcha(){
        console.log(marcha);
    };
    // ********************

     return {
        abastecer: ((valorAbastecido) => {
            return abastecerCarro(valorAbastecido);
        }),

        velocidade: (() => {
            return mostraVelocidade();
        }),
        
        tanque: (() => {
            return mostraTanque();
        }),

        acelerar: ((valorAceleracao) => {
            return acelerarCarro(valorAceleracao);
        }),

        frear: ((valorFreio) => {
            return frearCarro(valorFreio);
        }),

        ligar: (() => {
            return ligarCarro();
        }),

        desligar: (() => {
            return desligarCarro();
        }),

        marcha: (() => {
            return mostraMarcha();
        })
    };

})();

//carro.tanque();
carro.abastecer(50);
carro.ligar();
carro.marcha();
carro.velocidade();
carro.acelerar(10);
carro.marcha();
carro.velocidade();
carro.acelerar(40);
carro.marcha();
carro.velocidade();
carro.acelerar(10);
carro.marcha();
carro.velocidade();
carro.acelerar(10);
carro.marcha();
carro.velocidade();
carro.acelerar(40);
carro.marcha();
carro.velocidade();
carro.acelerar(40);
carro.marcha();
console.log("****************");
carro.velocidade();
carro.frear(50);
carro.marcha();
carro.velocidade();
carro.frear(50);
carro.marcha();

//carro