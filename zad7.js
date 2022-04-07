import dajSlucajanBroj from './script.js';
var rando = require("./script")
const neparni =[];
var i =0;
while(i < 200)
{
var broj = rando.dajSlucajanBroj(150,1500)
	neparni.push(broj);
	i++;
}



var min =1500;
var max = 0;
neparni.forEach(najmanji)
function najmanji(item, index, polje) {
  if(polje[index] < min)
{
min = polje[index];
}
else if(polje[index] > max)
{
	max = polje[index];
}

}console.log(min);
console.log(max);