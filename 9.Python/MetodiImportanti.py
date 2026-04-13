# ===============================
# PYTHON - METODI IMPORTANTI (VERSIONE ESTESA)
# ===============================

# ! PRINT
print("Hello World")

# ===============================
# STRINGHE
# ===============================

s = "ciao mondo"

s.upper()        # ! maiuscolo
s.lower()        # ! minuscolo
s.capitalize()   # ! prima lettera maiuscola
s.title()        # ! ogni parola maiuscola
s.strip()        # ! rimuove spazi
s.lstrip()       # ! rimuove spazi sinistra
s.rstrip()       # ! rimuove spazi destra
s.replace("ciao","hello") # ! sostituzione
s.split(" ")    # ! divide
"-".join(["a","b"]) # ! unisce
s.find("ciao")  # ! trova indice
s.count("o")    # ! conta
s.startswith("c") # ! controlla inizio
s.endswith("o")   # ! controlla fine

# ===============================
# LISTE
# ===============================

l = [1,2,3]

l.append(4)      # ! aggiunge
l.extend([5,6])  # ! estende
l.insert(1,99)   # ! inserisce
l.remove(2)      # ! rimuove valore
l.pop()          # ! rimuove ultimo
l.pop(0)         # ! rimuove indice
l.clear()        # ! svuota
l.index(3)       # ! indice
l.count(1)       # ! conta
l.sort()         # ! ordina
l.reverse()      # ! inverti
l.copy()         # ! copia

# ===============================
# TUPLE
# ===============================

t = (1,2,3)

t.count(1)   # ! conta
t.index(2)   # ! indice

# ===============================
# SET
# ===============================

s = {1,2,3}

s.add(4)             # ! aggiunge
s.update([5,6])      # ! aggiunge multipli
s.remove(2)          # ! errore se manca
s.discard(10)        # ! no errore
s.pop()              # ! rimuove random
s.clear()            # ! svuota
s.union({7,8})       # ! unione
s.intersection({1})  # ! intersezione
s.difference({1})    # ! differenza

# ===============================
# DIZIONARI
# ===============================

d = {"nome":"Chris","eta":25}

d.get("nome")         # ! prende valore
d.keys()              # ! chiavi
d.values()            # ! valori
d.items()             # ! coppie
d.update({"eta":26}) # ! aggiorna
d.pop("eta")         # ! rimuove
d.popitem()           # ! ultimo
d.clear()             # ! svuota

# ===============================
# BUILT-IN
# ===============================

len([1,2])     # ! lunghezza
max([1,2])     # ! massimo
min([1,2])     # ! minimo
sum([1,2])     # ! somma
sorted([3,1])  # ! ordina
abs(-5)        # ! assoluto
round(3.6)     # ! arrotonda

# ===============================
# FUNZIONI
# ===============================

def f(a,b=0):
    return a+b

# ===============================
# LAMBDA
# ===============================

lambda x: x*2

# ===============================
# MAP FILTER REDUCE
# ===============================

from functools import reduce

list(map(lambda x:x*2,[1,2]))
list(filter(lambda x:x>1,[1,2]))
reduce(lambda a,b:a+b,[1,2,3])

# ===============================
# CICLI
# ===============================

for i in range(5): pass
while False: pass

# ===============================
# ENUMERATE ZIP
# ===============================

enumerate(["a"])
zip([1],[2])

# ===============================
# FILE
# ===============================

open("file.txt","r")
open("file.txt","w")

# ===============================
# ERRORI
# ===============================

try:
    pass
except Exception:
    pass
finally:
    pass

# ===============================
# CLASSI
# ===============================

class A:
    def __init__(self,x):
        self.x = x

    def metodo(self):
        return self.x

# ===============================
# DECORATORI
# ===============================

def decoratore(f):
    def wrapper():
        return f()
    return wrapper

# ===============================
# GENERATORI
# ===============================

def gen():
    yield 1

# ===============================
# LIST / DICT COMPREHENSION
# ===============================

[x for x in range(5)]
{x:x*2 for x in range(5)}

# ===============================
# FINE
# ===============================
