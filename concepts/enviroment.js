let firstName = process.env.NAME || "Without name";
let web = process.env.WEB || "Without web";

// All environment variables are capitalized with underscores.
console.log(`Welcome ${firstName}!`);
console.log(`My web is ${web}`);

/* With Unix

    NAME=Harold node .\concepts\enviroment.js 
*/

/* With powershell

    $env:NAME="Harold"
    node .\concepts\enviroment.js 
*/
