const conta = (function conta() {

    function luz() {
        let chuveiro = 5000;
        let minutos = 10;
        let kwh = 1000
        let consumodiario = chuveiro * minutos / kwh;
        let dia = 30;
        let consumoMC = consumodiario * dia;
        console.log("Seu consumo diario é de 0," + consumodiario, "Kwh");
        console.log("Seu consumo mensal do chuveiro é " + consumoMC, "kwh");

        let tarifa = 0.48;
        let imposto = 10;
        let consumochuveiro = consumoMC;
        let consumomensal = tarifa * consumochuveiro + imposto;
        console.log("Seu valor mensal do chuveiro é R$" + consumomensal);
    }

    function agua() {
        let tarifa = 3.60;
        let consumo = 9;
        let consumoMes = tarifa * consumo;
        let consumoDiario = consumoMes/30 ;
        let imposto = 10;
        let taxaEsgoto = 0.90;
        let total = tarifa * consumo * taxaEsgoto + imposto;

        console.log ("Seu consumo diario é de " + consumoDiario,"M³ de agua")
        console.log("Você consumiu esse mês " + consumoMes, "M³ de agua")
        console.log("O valor da sua conta é de R$" + total , "mensais")
    }

    function gas(){
        let tarifa = 2.20;
        let consumo = 6.5; // Equivalente á 13 kg de gás em M³
        let consumoMes = tarifa * consumo;
        let consumoDiario = consumoMes/30 ;
        let imposto = 10;
        let taxaDistribuicao = 0.90;
        let total = tarifa * consumo * taxaDistribuicao + imposto;
        
        console.log ("Seu consumo diario é de " + consumoDiario,"M³ de gás")
        console.log("Você consumiu esse mês " + consumoMes, "M³ de gás")
        console.log("O valor da sua conta é de R$" + total , "mensais")
    }

    return {
        consumoLuz() {
            return luz();
        },
        consumoAgua() {
            return agua();
        },
        consumoGas() {
            return gas();
        }

    }

})();

console.log("CALCULO LUZ")
conta.consumoLuz();

console.log("-------------");
console.log("CALCULO AGUA")
conta.consumoAgua();

console.log("-------------");
console.log("CALCULO GÁS")
conta.consumoGas();