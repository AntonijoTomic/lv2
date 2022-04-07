var rando = require("./script")
const neparni =[];
var i =0;
while(i < 20)
{
var broj = rando.dajSlucajanBroj(1,20)
	neparni.push(broj);
	i++;
}




let unique = neparni.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);