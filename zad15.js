  var rando = require("./script");
 var broj = rando.dajSlucajanBroj(10,100);
 var broj2 = rando.dajSlucajanBroj(10,100);
 var broj3 = rando.dajSlucajanBroj(10,100);

    function zadnja(n)
    {
        return Math.floor(n % 10);
    }


    if(zadnja(broj) == zadnja(broj2))
    {
        console.log(broj + " ima istu zadnju znamenku kao i "+ broj2);
    }
    else if( zadnja(broj) == zadnja(broj3))
    {
console.log(broj + " ima istu zadnju znamenku kao i "+ broj3);
    }
    else if(zadnja(broj2) == zadnja(broj3))
   {
    console.log(broj2 + " ima istu zadnju znamenku kao i "+ broj3);
   }
   else
   {
    console.log("nijedan broj nema istu zadnju znamenku");
   }