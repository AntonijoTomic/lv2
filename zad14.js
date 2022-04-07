  function prva(n)
    {
        while (n >= 10)
            n /= 10;
        return Math.floor(n);
    }
    function druga(n)
    {
        return Math.floor(n % 10);
    }
    let n = 484;
    if(n > 99)
    {
        console.log(prva(n)+ druga(n));    }
        else
        	 {
        	 	console.log("Uneseni broj je manji od 99");
        	 }
