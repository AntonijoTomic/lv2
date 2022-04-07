import dajSlucajanBroj from './script.js';
const parni =[];
const neparni =[];
var i =0;
while(i < 100)
{
var broj = dajSlucajanBroj(50,5000)
if(broj % 2 == 0)
{
	parni.push(broj);
	i++;
}
else
{
	neparni.push(broj);
	i++;
}
}
console.log(parni.length + " parnih brojeva");
console.log(neparni.length + " neparnih brojeva");