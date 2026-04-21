"""
==================================================
🔤 STRINGHE (Python vs JavaScript)
==================================================

| 🐍 Python            | ⚡ JavaScript              | 📖 Descrizione                  |
|---------------------|---------------------------|--------------------------------|
| .lower()            | .toLowerCase()            | Minuscolo                      |
| .upper()            | .toUpperCase()            | Maiuscolo                      |
| .title()            | (manuale)                 | Prima lettera maiuscola        |
| .capitalize()       | (manuale)                 | Prima maiuscola                |
| .strip()            | .trim()                   | Rimuove spazi                  |
| .lstrip()           | .trimStart()              | Rimuove spazi sinistra         |
| .rstrip()           | .trimEnd()                | Rimuove spazi destra           |
| .replace()          | .replace()                | Sostituisce testo              |
| .replace()          | .replaceAll()             | Sostituisce tutto              |
| .split()            | .split()                  | Divide stringa                 |
| ' '.join()          | .join()                   | Unisce array                   |
| len()               | .length                   | Lunghezza                      |
| .find()             | .indexOf()                | Trova posizione                |
| .rfind()            | .lastIndexOf()            | Trova ultima posizione         |
| .startswith()       | .startsWith()             | Inizia con                     |
| .endswith()         | .endsWith()               | Finisce con                    |
| .count()            | (manuale)                 | Conta occorrenze               |
| .isdigit()          | (manuale)                 | Controlla numeri               |
| .isalpha()          | (manuale)                 | Solo lettere                   |
| .isalnum()          | (manuale)                 | Lettere + numeri               |
| .center()           | (manuale)                 | Centra stringa                 |
"""


"""
==================================================
📚 LISTE / ARRAY (Python vs JavaScript)
==================================================

| 🐍 Python            | ⚡ JavaScript              | 📖 Descrizione                  |
|---------------------|---------------------------|--------------------------------|
| .append()           | .push()                   | Aggiunge in fondo              |
| .extend()           | .concat()                 | Unisce liste                   |
| .insert()           | .splice()                 | Inserisce                      |
| .remove()           | .splice()                 | Rimuove elemento               |
| .pop()              | .pop()                    | Rimuove ultimo                 |
| .pop(0)             | .shift()                  | Rimuove primo                  |
| (manuale)           | .unshift()                | Aggiunge inizio                |
| .clear()            | = []                      | Svuota lista                   |
| .index()            | .indexOf()                | Trova indice                   |
| .count()            | (manuale)                 | Conta elementi                 |
| .sort()             | .sort()                   | Ordina                         |
| .reverse()          | .reverse()                | Inverte                        |
| len()               | .length                   | Lunghezza                      |
| sorted()            | .slice().sort()           | Copia + ordina                 |
| map()               | .map()                    | Trasforma                      |
| filter()            | .filter()                 | Filtra                         |
| sum()               | .reduce()                 | Somma                          |
| any()               | .some()                   | Almeno uno                     |
| all()               | .every()                  | Tutti                          |
| enumerate()         | .entries()                | Indice + valore                |
| zip()               | (manuale)                 | Combina liste                  |
| (manuale)           | .find()                   | Trova elemento                 |
| (manuale)           | .includes()               | Contiene?                      |
| (manuale)           | .flat()                   | Appiattisce                    |
"""


"""
==================================================
🔢 NUMERI (Python vs JavaScript)
==================================================

| 🐍 Python            | ⚡ JavaScript              | 📖 Descrizione                  |
|---------------------|---------------------------|--------------------------------|
| int()               | parseInt()                | Intero                         |
| float()             | parseFloat()              | Decimale                       |
| round()             | Math.round()              | Arrotonda                      |
| abs()               | Math.abs()                | Valore assoluto                |
| pow()               | Math.pow()                | Potenza                        |
| min()               | Math.min()                | Minimo                         |
| max()               | Math.max()                | Massimo                        |
| sum()               | (reduce)                  | Somma                          |
| divmod()            | (manuale)                 | Divisione + resto              |
| (manuale)           | Math.floor()              | Arrotonda giù                  |
| (manuale)           | Math.ceil()               | Arrotonda su                   |
| (manuale)           | Math.random()             | Numero casuale                 |
| (manuale)           | Number()                  | Conversione numero             |
| (manuale)           | isNaN()                   | Controlla NaN                  |
"""


"""
==================================================
🧠 UTILITY / GENERALI (Python vs JavaScript)
==================================================

| 🐍 Python            | ⚡ JavaScript              | 📖 Descrizione                  |
|---------------------|---------------------------|--------------------------------|
| type()              | typeof                    | Tipo dato                      |
| isinstance()        | instanceof                | Controllo tipo                 |
| range()             | Array.from()              | Genera sequenza                |
| enumerate()         | .entries()                | Indice + valore                |
| zip()               | (manuale)                 | Combina                        |
| print()             | console.log()             | Output                         |
| input()             | prompt()                  | Input utente                   |
| dir()               | Object.keys()             | Proprietà oggetto              |
| (manuale)           | Object.values()           | Valori oggetto                 |
| (manuale)           | Object.entries()          | Chiave + valore                |
| (manuale)           | JSON.stringify()          | Oggetto → stringa              |
| (manuale)           | JSON.parse()              | Stringa → oggetto              |
"""


# 🔥 MINI ESEMPI UTILI (Python)

s = "  Ciao Mondo  "
print(s.strip().upper())

arr = [1, 2, 3, 4]
print(list(map(lambda x: x * 2, arr)))
print(list(filter(lambda x: x > 2, arr)))
print(sum(arr))

import random
print(random.randint(0, 9))