var rando = require("./script");
var i =0;
var polje =[];
while(i<30)
{
var broj = rando.dajSlucajanBroj(10,200);
	polje.push(broj);
	i++;
}
max = 200;
console.log(polje);
for (var i = 1; i < polje.length; i++)
    for (var j = 0; j < i; j++)
        if (polje[i] < polje[j]) {
          var x = polje[i];
          polje[i] = polje[j];
          polje[j] = x;
        }


console.log(polje);