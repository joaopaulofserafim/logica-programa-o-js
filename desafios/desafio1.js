const 
    nota1 = 5, 
    nota2 = 10, 
    nota3 = 5,
    média = (nota1 + nota2 + nota3) /3;


if (média >= 7) { 
    console.log(`Aluno(a) Aprovado(a) com média ${média.toFixed(1)}`)
    
} else if (média <= 5 ) {
    console.log(`Aluno(a) Reprovado(a) com média ${média.toFixed(1)}`)

} else  {
     console.log(`Aluno(a) está de Exame com média ${média.toFixed(1)}`)
}