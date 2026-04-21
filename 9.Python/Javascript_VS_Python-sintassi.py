"""
==================================================
🧠 VARIABILI
==================================================

| 🐍 Python            | ⚡ JavaScript              | 📖 Descrizione                  |
|---------------------|---------------------------|--------------------------------|
| x = 5               | let x = 5                 | Variabile modificabile         |
| x = 5               | const x = 5               | Costante (JS)                  |
| (no keyword)        | var x = 5                 | Vecchio modo JS                |

"""


"""
==================================================
🔀 CONDIZIONI (IF)
==================================================

| 🐍 Python            | ⚡ JavaScript              | 📖 Descrizione                  |
|---------------------|---------------------------|--------------------------------|
| if x > 5:           | if (x > 5) {              | Condizione                     |
| elif x == 5:        | else if (x === 5) {       | Altra condizione               |
| else:               | else {                    | Default                        |
| (indentazione)      | }                         | Chiusura blocco                |

"""


"""
==================================================
🔁 CICLI (FOR / WHILE)
==================================================

| 🐍 Python            | ⚡ JavaScript              | 📖 Descrizione                  |
|---------------------|---------------------------|--------------------------------|
| for i in range(5):  | for (let i=0;i<5;i++) {   | Ciclo for                      |
| for x in lista:     | for (let x of arr) {      | Iterazione                     |
| while x < 5:        | while (x < 5) {           | Ciclo while                    |
| break               | break                     | Interrompe                     |
| continue            | continue                  | Salta iterazione               |

"""


"""
==================================================
⚙️ FUNZIONI
==================================================

| 🐍 Python                  | ⚡ JavaScript              | 📖 Descrizione            |
|---------------------------|---------------------------|--------------------------|
| def somma(a, b):          | function sum(a, b) {      | Funzione classica        |
| return a + b              | return a + b              | Ritorno valore           |
| lambda x: x*2             | (x) => x*2                | Funzione breve           |

"""


"""
==================================================
📦 ARRAY / LISTE
==================================================

| 🐍 Python            | ⚡ JavaScript              | 📖 Descrizione              |
|---------------------|---------------------------|----------------------------|
| lista = [1,2,3]     | let arr = [1,2,3]         | Array / lista              |
| lista[0]            | arr[0]                    | Accesso elemento           |
| lista[-1]           | arr[arr.length - 1]       | Ultimo elemento            |

"""


"""
==================================================
🧾 OGGETTI / DIZIONARI
==================================================

| 🐍 Python                  | ⚡ JavaScript              | 📖 Descrizione        |
|---------------------------|---------------------------|----------------------|
| d = {"a": 1}              | let obj = {a:1}           | Oggetto              |
| d["a"]                    | obj.a                     | Accesso valore       |
| d.get("a")                | obj?.a                    | Accesso sicuro       |

"""


"""
==================================================
🧵 STRINGHE
==================================================

| 🐍 Python                  | ⚡ JavaScript              | 📖 Descrizione        |
|---------------------------|---------------------------|----------------------|
| "ciao"                    | "ciao"                    | Stringa              |
| f"Ciao {nome}"            | `Ciao ${nome}`            | Interpolazione       |
| "a" * 3                   | "a".repeat(3)             | Ripetizione          |

"""


"""
==================================================
📥 INPUT / OUTPUT
==================================================

| 🐍 Python            | ⚡ JavaScript              | 📖 Descrizione      |
|---------------------|---------------------------|--------------------|
| input()             | prompt()                  | Input utente       |
| print()             | console.log()             | Output             |

"""


"""
==================================================
⚠️ DIFFERENZA CHIAVE
==================================================

| 🐍 Python            | ⚡ JavaScript              | 📖 Descrizione          |
|---------------------|---------------------------|------------------------|
| indentazione        | {}                        | Blocchi di codice      |
| semplice            | più flessibile            | Filosofia linguaggio   |

"""


# 🔥 MINI ESEMPI PYTHON

# if
x = 10
if x > 5:
    print("Maggiore di 5")

# for
for i in range(3):
    print(i)

# funzione
def somma(a, b):
    return a + b

print(somma(2, 3))