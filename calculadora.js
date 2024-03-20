const calculadora = (function calculadora(){

    function calculoPotencia(num1, num2){
        return num1 ** num2;
    };

    function calculaAreaQuadrado(num1, num2){
        if(!(num1 == num2)){
            return "Não é um quadrado";
        }
        let result = num1 * num2;
        return "A área do quadrado: " + result;
    };

    function calculaAreaRetangulo(num1, num2) {
        return  "A area do retangulo é: " + ((num1, num2) / 2);
    };

    function calculaPar(num1){
        if(num1 == 0){
            return 0;
        }
        if(num1 % 2 == 0){
            return "É par";
        } else {
            return "É ímpar";
        }
    };

    return {
        
        potencia: ((num1, num2) => {
            return calculoPotencia(num1, num2);
        }),
        
        areaQuadrado: ((num1, num2) => {
            return calculaAreaQuadrado(num1, num2);
        }),

        areaRetangulo: ((num1, num2) => {
            return calculaAreaRetangulo(num1, num2);
        }),

        par: ((num1) => {
            return calculaPar(num1);
        })
        
        
    };
})(); 



console.log(calculadora.potencia(5, 5));
console.log(calculadora.areaQuadrado(5, 5));
console.log(calculadora.areaRetangulo(5, 8));
console.log(calculadora.par(5));
console.log("****************************");
