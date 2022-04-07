var i =0;
const polje =[];
const par =[];
var o =1;
while (i < 51) {

	if(o % 7 ==0)
	{
		polje.push(o);
		 i++;
	}
	o++;

}

polje.forEach(parni)


function parni(item, index, polje) {
  if(polje[index] % 2 == 0)
{
par.push(polje[index]);
}}
function myFunction(item, index, polje) {
  console.log(polje[index]); }
par.forEach(myFunction)