const carro = (function carro(){
    let velocidade = 0;
    let tanque = 0;
    let marcha = 1;

    function abastecerCarro(valorAbastecido){
        if(valorAbastecido > 100 && tanque >= 100){
            return "Já ta abastecido!";
        }
        return tanque += valorAbastecido;
    };

    function mostratanque(){
        console.log(tanque);
    }

    return {
        abastecer: ((valorAbastecido) => {
            return abastecerCarro(valorAbastecido);
        }),
        
        vertanque: (() => {
            return mostratanque();
        })
    };

})();

carro.vertanque();
carro.abastecer(50);
carro.vertanque();