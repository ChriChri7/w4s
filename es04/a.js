const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log("Uso: node calc.js <numero1> <operazione> <numero2>");
    console.log("Esempio: node calc.js 5 add 3");
    process.exit(1);
}

let num1 = parseFloat(args[0]);
let operazione = args[1];
let num2 = parseFloat(args[2]);

let risultato;

switch (operazione) {
    case "add":
        risultato = num1 + num2;
        break;
    case "sub":
        risultato = num1 - num2;
        break;
    case "mul":
        risultato = num1 * num2;
        break;
    case "div":
        if (num2 === 0) {
            console.log("Errore: divisione per zero");
            process.exit(1);
        }
        risultato = num1 / num2;
        break;
    default:
        console.log("Operazione non valida!");
        console.log("Usa: add, sub, mul, div");
        process.exit(1);
}

console.log("Risultato:", risultato);
