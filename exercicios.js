//Exercício 1-----------------------------------------------------------------------
let count = 0; /*A variável count é inicializada com 0 para controlar o número de iterações do loop.*/
let num = 101; /*A variável num é inicializada com 101, pois esse é o primeiro número inteiro maior que 100.*/

/*O loop while é executado enquanto count for menor que 10. Dentro do loop, o número é impresso na tela usando a função console.log().
Em cada iteração, count é incrementado em 1 e num é incrementado em 1 para imprimir os próximos números inteiros maiores que 100.
O loop termina após 10 iterações, imprimindo os 10 primeiros números inteiros maiores que 100.*/

while(count < 10) {
  console.log(num);
  count++;
  num++;
}

//Exercício 2-----------------------------------------------------------------------
/*O script usa a função parseInt() para converter os valores digitados pelo usuário em números inteiros. As variáveis num1, num2 e num3 armazenam os três números inteiros
digitados pelo usuário no prompt.*/
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let num3 = parseInt(prompt("Digite o terceiro número:"));

/*A variável maior é inicializada com o valor de num1, pois ele ainda não foi comparado  com os outros números.*/
let maior = num1;

/*Usando as estruturas de decisão if, comparamos num2 e num3 com maior para encontrar o maior número. Se num2 ou num3 forem maiores que maior, atualizamos o valor de maior*/
if(num2 > maior) {
  maior = num2;
}

if(num3 > maior) {
  maior = num3;
}

/*a função console.log() para imprimir o resultado na tela*/
console.log("O maior número é: " + maior);

//Exercício 3-----------------------------------------------------------------------
/*O script usa a função parseInt() para converter os valores digitados pelo usuário em números inteiros.
 As variáveis num1, num2 e num3 armazenam os três números inteiros digitados pelo usuário.*/

 let num1 = parseInt(prompt("Digite o primeiro número:"));
 let num2 = parseInt(prompt("Digite o segundo número:"));
 let num3 = parseInt(prompt("Digite o terceiro número:"));
 
 /*A função Math.max() é usada para encontrar o maior número entre num1, num2 e num3.
 O resultado é armazenado na variável maior.
 A função Math.min() é usada para encontrar o menor número entre num1, num2 e num3.
 O resultado é armazenado na variável menor.*/
 
 let maior = Math.max(num1, num2, num3);
 let menor = Math.min(num1, num2, num3);
 
 /*a função console.log() para imprimir o maior e o menor número na tela.*/
 console.log("O maior número é: " + maior);
 console.log("O menor número é: " + menor);

//Exercício 4-----------------------------------------------------------------------
/*O código define as variáveis nome, cpf, idade e data de nascimento e atribui valores a elas.*/

let nome = "Cleide Marsola";
let cpf = "123.456.789-00";
let idade = 38;
let data_nascimento = "24/08/1984";

/*A função console.log() para imprimir os valores das variáveis na tela.*/

console.log("Nome: " + nome);
console.log("CPF: " + cpf);
console.log("Idade: " + idade);
console.log("Data de Nascimento: " + data_nascimento);

//Exercício 5-----------------------------------------------------------------------
let nomeproduto = "Pão Francês";
let preco = 1.10;
let estoque = 100;
let validade = "hoje";

/* O método toFixed() formata o valor da variável preco com duas casas decimais.
O método innerHTML adiciona os valores das variáveis em um parágrafo HTML dentro
 do corpo (body) do documento.*/
document.body.innerHTML += "<p>Nome do Produto: " + nomeproduto + "</p>";
document.body.innerHTML += "<p>Preço: R$ " + preco.toFixed(2) + "</p>";
document.body.innerHTML += "<p>Estoque: " + estoque + "</p>";
document.body.innerHTML += "<p>Validade: " + validade + "</p>";

//Exercício 6-----------------------------------------------------------------------
//Declaração das variáveis
let fahrenheit = 80;
let celsius = (fahrenheit-32) * 5 / 9;


//Função console.log() para imprimir a temperatura em graus Celsius no console.
console.log("A temperatura em graus Celsius é: " + celsius.toFixed(2));
/*poderia usar o função prompt no let fahrenheit para solicitar ao usuário digitar uma temperatura em graus Fahrenheit.
Ex: let fahrenheit = prompt("Digite a temperatura em graus Fahrenheit:");*/

//Exercício 7-----------------------------------------------------------------------
let salarioAtual = 1500.00;
let reajuste = 3.58;
let salarioNovo = salarioAtual*(1 + reajuste/100);
/*O valor do novo salário é calculado multiplicando o salário atual pelo fator de reajuste, que é igual a 1 + percentualReajuste/100.
Isso ocorre porque o percentual de reajuste é dado em porcentagem e precisamos dividi-lo por 100 para obter o fator multiplicativo correto.*/


console.log ("O salário com reajuste é: R$ " + salarioNovo.toFixed(2));

//Exercício 8----------------------------------------------------------------
//Declaração das variavéis
let peso = 86;
let altura = 1.82;

//Para declarar um número exponencial é utilizado '**'
let imc = peso / (altura ** 2);

if (imc <= 18.5) {
  console.log("Abaixo do peso");
} else if (imc > 18.5 && imc <=25) {
  console.log("Peso normal");
} else if (imc >25 &&  imc < 30) {
  console.log("Acima do peso");
} else {
  console.log("Obeso");
}
