<!doctype html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calcolatrice</title>
    <style>
    
      * {
        box-sizing: border-box;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }

      body {
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
      }

     
      .container {
        background: white;
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
      }

      h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 1.5rem;
        font-weight: 300;
      }

      label {
        font-size: 0.9rem;
        color: #7f8c8d;
        margin-bottom: 5px;
        display: block;
      }

      input {
        width: 100%;
        padding: 12px;
        margin-bottom: 20px;
        border: 2px solid #edf2f7;
        border-radius: 10px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
        outline: none;
      }

      input:focus {
        border-color: #3498db;
      }


      button {
        background: #3498db;
        color: white;
        border: none;
        padding: 15px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        width: 100%;
        transition: background 0.3s transform 0.2s;
        box-shadow: 0 4px 6px rgba(52, 152, 219, 0.2);
      }

      button:hover {
        background: #2980b9;
        transform: translateY(-1px);
      }

      button:active {
        transform: translateY(0);
      }

      #result {
        margin-top: 25px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 10px;
        border-left: 5px solid #3498db;
        white-space: pre-wrap; 
        font-family: "Courier New", Courier, monospace;
        font-size: 0.85rem;
        color: #34495e;
        display: none;
      }

      .error {
        color: #e74c3c;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Calcolatrice</h1>

      <form
        id="calculatorForm"
        onsubmit="
          calcola();
          return false;
        "
      >
        <label>Primo numero</label>
        <input type="number" id="num1" step="any" placeholder="2" required />

        <label>Operazione (+, -, *, /)</label>
        <input type="text" id="operation" placeholder="+" required />

        <label>Secondo numero</label>
        <input type="number" id="num2" step="any" placeholder="4" required />

        <button type="submit">CALCOLA</button>
      </form>

      <div id="result"></div>
    </div>

    <script>
      function calcola() {
        const n1 = parseFloat(document.getElementById("num1").value);
        const operazione = document
          .getElementById("operation")
          .value.trim()
          .toLowerCase();
        const n2 = parseFloat(document.getElementById("num2").value);
        const resultDiv = document.getElementById("result");

        if (isNaN(n1) || isNaN(n2)) {
          resultDiv.style.display = "block";
          resultDiv.innerHTML =
            '<span class="error">❌ Errore: Inserisci numeri validi!</span>';
          return;
        }

        let risultato;
        let simbolo;

        switch (operazione) {
          case "add":
          case "+":
            risultato = n1 + n2;
            simbolo = "+";
            break;
          case "sot":
          case "-":
            risultato = n1 - n2;
            simbolo = "-";
            break;
          case "mult":
          case "*":
            risultato = n1 * n2;
            simbolo = "×";
            break;
          case "div":
          case "/":
            if (n2 !== 0) {
              risultato = n1 / n2;
            } else {
              risultato = "Errore (Div per zero)";
            }
            simbolo = "÷";
            break;
          default:
            risultato = "Operazione non valida";
            simbolo = "?";
        }

        const separator = "--------------------------";
        const dataLocale = new Date().toLocaleDateString("it-IT");
        const oraLocale = new Date().toLocaleTimeString("it-IT");

        let output = `** RISULTATO **\n`;
        output += `Operazione: ${n1} ${simbolo} ${n2}\n`;
        output += `Risultato:  ${risultato}\n`;
        output += `${separator}\n`;
        output += `📅 ${dataLocale} | ⏰ ${oraLocale}\n`;

        resultDiv.textContent = output;
        resultDiv.style.display = "block";
      }
    </script>
  </body>
</html>
