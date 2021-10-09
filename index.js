//Declaraçãod e variáveis alteráveis.
const peso = 140;
const altura = 1.90;

//Variável constante.
const imc = peso / (altura * altura);

//Imprimi na tela!
console.log('--------------------------------')
console.log("Seu IMC é de:",imc);
console.log('--------------------------------')

if(imc <= 18)
{
  "Você está abaixo do peso, se cuide!"
}
else if(imc > 18 && imc <= 25)
{
  "Seu peso está normal, maravilha!"
}
else if(imc > 25 && imc <= 29)
{
  "Você apresenta sobrepeso. Atenção!"
}
else if(imc > 30 && imc <= 35)
{
  "Obesidade (1). Consulte um médico!"
}
else if(imc > 35 && imc <= 40 )
{
  "Obesidade severa. Precisa de cuidados urgente!"
}
else if(imc > 40)
{
  "Obesidade mórbida! Crie novos hábitos e consulte um ´rofissional, urgente!"
}
else {"imc incorreto"};

