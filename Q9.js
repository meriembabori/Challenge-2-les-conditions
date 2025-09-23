//Challenges JavaScript : Conditions Mini FizzBuzz
const prompt = require("prompt-sync")();
let nombre=prompt("Entrer un nombre");
if(nombre % 3==0)
    {
        console.log("FIZZ");
}
else if (nombre % 5==0)
{
    console.log("Buzz");
}
else if (nombre %3==0 && nombre %5==0)
{
    console.log("FizzBuzz");
}
else
   { console.log(nombre);

    }