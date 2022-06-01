#include <stdio.h>
#include <stdlib.h>
int main()
{
int pessoas = 3;
char nome[50];
float altura;
while(pessoas > 0){
printf("Entre com o Nome e altura\n");
scanf("%s %f", &nome, &altura);
if(altura > 1.79)
{
printf("Nome:%s Altura:%f Entrada permitida!\n", nome, altura);
}
else
{
printf("Nome:%s Altura:%f Entrada não permitida!\n", nome, altura);
}
pessoas--;
}
return 0;
}