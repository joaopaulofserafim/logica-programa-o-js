# logica-programa-o-js
Treinando Js

## operadores-aritmeticos.js

~~~js
const numero1 = 40;
const numero2 = 20;
~~~


A palavra `const` é utilizada para declaração de variaves que não permitem reatribuição (Não vão ser reatribuidas).

Aqui declaramos duas constantes de serão calculadas no bloco a seguir. 

~~~js
console.log(`Os números das operações são ${numero1} e ${numero2}`);
console.log(`A soma dos números è: ${numero1 + numero2}`);
console.log(`A subtracao dos números è: ${numero1 - numero2}`);
console.log(`A multiplicacao dos números è: ${numero1 * numero2}`);
console.log(`A divisao dos números è: ${numero1 /  numero2}`);
console.log(`O resto dos números è: ${numero1 % numero2}`);
~~~


Em cada uma das operações temos um operador aritmetico:

* `+` soma
* `-` subtração
* `*` multiplicação
* `/` divisão
* `%` resto
* `**` Potênciação

## operadores-atribuicao.js

~~~js
let numero = 10;
~~~

Declaramos a variavel `numero` usando a palavra `let`, pois essa variavel será **reatribuida** ao longo do nosso codigo.

Em seguida, fazemos uma série de reatribuição usanso os operadores de atribuição.

~~~js
console.log(`O número é inicialmente igual a ${numero}`);
console.log(`Após reatribuir somando o número 10: ${numero += 10 }`);
console.log(`Reatribuindo e subtraindo 10: ${numero -= 10}`)
console.log(`Reatribuir e multiplicar 10: ${numero *= 10}`);
console.log(`Reatribuir e dividir 10: ${numero /=10}`);
console.log(`Reatribuindo para o resto da divisão por 10: ${numero %= 10}`);
console.log(`Incrementado o número em 1: ${++ numero}`)
console.log(`Decrementado o número em 1: ${-- numero}`)
console.log(`O número final é igual a: ${numero}`);
~~~

Operacadores de atribuição:

* `+=` Atribuição com soma
* `-=` Atribuição com subtração 
* `*=` Atribuição com multiplicação 
* `/=` Atribuição com divisão 
* `%=` Atribuição com o resto da divisão 
* `++` Atribuição com **incremento1**  ( *Pré* ou *Pós* incrementado). Ex: `numero ++` (Pós-incrementado) ou `++ numero` (pré-incrementado).
* `--` Atribuição com **decremento1**  ( *Pré* ou *Pós* decrementado). Ex: `numero --` (Pós-incrementado) ou `-- numero` (Pré-incrementado).


## operadores-comparacao.js

Neste arquivo conhecemos os operadores de comparação e a estrutura lógica de decisão **if-else**.

Utilizamos a palavra `if` para declarar uma condição e a palavra `else` como um complemento "Se não"

~~~js
const a = 50, b = 50;
const condicao = a == b;

if (condicao) {
    console.log('VERDADEIRO');
} else {
    console.log('FALSO');
}
~~~

Está estrutura exibe no console se a condição testada é `true` (verdadeira) ou `false` (falsa), utilisando `if` e `else` para fazer a comparação.


Operadores de comparação:

* `==`  é igual
* `!=`  não é igual  
* `>`   maior que  
* `>=`  maior OU igual 
* `<=`  menor OU igual
* `===` é estritamente igual (Valor e tipo)
* `!==` não é estritamente igual (Valor e tipo )

