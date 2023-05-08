///comentario de linha
        /*
        comentario de bloco
        */

        // //declarar uma vaiavel com uma palavra reservada var
        // // var nr1 =10;
        // // var nr2 =5;
        // // var resultado;
        // // resultado = !(parseInt(nr1)%parseInt(nr2))? "PAR" : "IMPAR";
        // // console.log(`O Numero é : ${resultado}`);
        // // //imprimir as variaveis na tela
        // // console.log(nr1);
        // // console.log(nr2);
        // //realizando as operações basicas com estes valores
        // //+/-/*
        // //Realize A concatenação com o texto resultado:
        
        // //ADIÇÃO
        
        // // console.log('resultado Adição'+ (parseInt(nr1)+parseInt(nr2)));

        // // // jeito mais certo de fazer
        // // console.log(`resultado Adição: ${parseInt(nr1)+parseInt(nr2)}`);

        // // //Subtração
        
        // // console.log ('resultado subutração', (parseInt(nr1)-parseInt(nr2)));
        // // console.log(`resultado subtração: ${parseInt(nr1)-parseInt(nr2)}`);

        // // //Multiplicação
        
        // // console.log('resultado multiplicação'+ (parseInt(nr1)*parseInt(nr2)));
        // // console.log(`resultado multiplicação: ${parseInt(nr1)*parseInt(nr2)}`);

        // // //divisão
        
        // // console.log ('resultado divisao', (parseInt(nr1)/parseInt(nr2)));
        // // console.log(`resultado divisão: ${parseInt(nr1)/parseInt(nr2)}`);

        // // //resto da divisão
        
        // // console.log ('resultado resto da divisao', (parseInt(nr1)%parseInt(nr2)));
        // // console.log(`resultado resto da divisão: ${parseInt(nr1)%parseInt(nr2)}`);

        // //Descobrindo se um numero é par ou impar 
        // //Utilizando operador ternario(?)

        
        // //regra do const
        // //1 regra = iniciar na declaração
        // // const nome3 = "violante";
        // //2 regra = Não pode ser alterado durante o fluxo do programa
        // // nome3 = "Jonathan";
        
        // // //Diferemça entre VAR/LET/CONST
        // // var nome1 = "Beatriz";
        // // let nome2 = "Matheus";


        // // let nome= "Beatriz";

        // // if(nome!=""){
        // //         let nome = "Robson"
        // // }
        // // console.log

        // //ARRAY e seus metodos
        // let frutas = ["banana","Maça","morango","carambola", "acerola","laranja"];
        // console.log(frutas);
        // console.table(frutas);
        // console.log(frutas[3])

        // ///adicionar um item ao final do array com o metodo push(item);
        // frutas.push("melão");
        // console.log(frutas);

        // ///adicionar um item ao começo do array com o metodo unshift(item);
        // frutas.unshift("caju");
        // console.log(frutas);

        // ///remover um item ao começo do array com o metodo shift(item);
        // frutas.shift();
        // console.log(frutas);

        // ///remover um item ao final do array com o metodo pop(item);
        // frutas.pop();
        // console.log(frutas);
        
        // //Para localizar um item dentro do array, utilixando indexof(itenNome);
        // // let indice = frutas.indexOf("morango");
        // // console.log(frutas[indice])

        // //Para localizar um item dentro do array e apagar ele, utilixando splice(indice do item, quantidade de vezes que o indice sera removido;
        // let indice2 = frutas.indexOf("carambola");
        // frutas.splice(indice2,1);
        // console.log(frutas)



        // frutas.forEach( (fruta)=>{
        //         console.log (`Olha ele : ${fruta}`)
        // } );
        const inputUser = document.getElementById(idNm);
        console.log(inputUser.value);


