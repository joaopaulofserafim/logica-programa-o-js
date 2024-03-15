// Escreva um codigo em JS que resolva o problema descrito no livro Lo´gica de Programação 1. Pg   , em que temos que obter as notas de 3 aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para o exame. Não é necessário ler as notas, você pode defini-las com variáveis.
//Você precisará utilizar uma estrutura de decisão composta, como a seguir://

const nota1 = 5, nota2 = 6, nota3 = 7;
const condicao = (nota1 + nota2 + nota3)/3;


if ( condicao >= 7) { 
    console.log(`Aprovado`)
    
} else if (condicao <= 5 ) {
    console.log(`Reprovado`)

} else  {
     console.log(`Exame`)
}