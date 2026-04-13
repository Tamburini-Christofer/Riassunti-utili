# ===============================
# METODI IMPORTANTI PYTHON
# ===============================

# ! PRINT
print("Hello World")  # ! stampa a schermo

# ===============================
# STRINGHE
# ===============================

s = "ciao mondo"

print(s.upper())      # ! maiuscolo
print(s.lower())      # ! minuscolo
print(s.capitalize()) # ! prima lettera maiuscola
print(s.title())      # ! ogni parola maiuscola
print(s.strip())      # ! rimuove spazi
print(s.replace("ciao", "hello"))  # ! sostituisce testo
print(s.split(" "))  # ! divide stringa in lista
print("-".join(["a","b"])) # ! unisce lista in stringa

# ===============================
# LISTE
# ===============================

lista = [1,2,3]

lista.append(4)   # ! aggiunge elemento
lista.insert(1, 10) # ! inserisce in posizione
lista.remove(2)   # ! rimuove valore
lista.pop()       # ! rimuove ultimo
lista.sort()      # ! ordina
lista.reverse()   # ! inverti ordine

print(len(lista)) # ! lunghezza
print(max(lista)) # ! massimo
print(min(lista)) # ! minimo

# ===============================
# DIZIONARI
# ===============================

d = {"nome": "Chris", "eta": 25}

print(d.keys())    # ! chiavi
print(d.values())  # ! valori
print(d.items())   # ! coppie

print(d.get("nome")) # ! prende valore sicuro

d.update({"eta": 26}) # ! aggiorna

d.pop("eta") # ! rimuove chiave

# ===============================
# SET
# ===============================

s = {1,2,3}

s.add(4)       # ! aggiunge
s.remove(2)    # ! rimuove

# ===============================
# FUNZIONI
# ===============================

def somma(a,b):
    return a+b  # ! ritorna valore

print(somma(2,3))

# ===============================
# CICLI
# ===============================

for i in range(5):  # ! ciclo for
    print(i)

n = 0
while n < 3:        # ! ciclo while
    print(n)
    n += 1

# ===============================
# CONDIZIONI
# ===============================

x = 10

if x > 5:
    print("maggiore")  # ! if
elif x == 5:
    print("uguale")    # ! elif
else:
    print("minore")    # ! else

# ===============================
# LIST COMPREHENSION
# ===============================

numeri = [x for x in range(10)]  # ! crea lista veloce
pari = [x for x in numeri if x % 2 == 0]  # ! filtro

# ===============================
# TRY EXCEPT
# ===============================

try:
    print(10/0)
except ZeroDivisionError:
    print("Errore!")  # ! gestione errori

# ===============================
# FILE
# ===============================

with open("file.txt", "w") as f:
    f.write("ciao")  # ! scrive file

with open("file.txt", "r") as f:
    contenuto = f.read()  # ! legge file

# ===============================
# LAMBDA
# ===============================

somma = lambda a,b: a+b  # ! funzione veloce
print(somma(3,4))

# ===============================
# MAP FILTER
# ===============================

numeri = [1,2,3,4]

print(list(map(lambda x: x*2, numeri)))   # ! modifica lista
print(list(filter(lambda x: x%2==0, numeri))) # ! filtra

# ===============================
# ENUMERATE
# ===============================

for i, val in enumerate(["a","b","c"]):
    print(i, val)  # ! indice + valore

# ===============================
# ZIP
# ===============================

for a,b in zip([1,2,3], ["a","b","c"]):
    print(a,b)  # ! unisce liste

# ===============================
# CLASSI
# ===============================

class Persona:
    def __init__(self, nome):
        self.nome = nome  # ! costruttore

    def saluta(self):
        print(f"Ciao {self.nome}")  # ! metodo

p = Persona("Chris")
p.saluta()

# ===============================
# FINE
# ===============================
