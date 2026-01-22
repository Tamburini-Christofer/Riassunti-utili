//todo database
// CREATE DATABASE db_name; //* Crea un nuovo database
// DROP DATABASE db_name; //* Elimina un database
// USE db_name; //* Seleziona il database su cui lavorare

//todo tabelle
// CREATE TABLE table_name (column1 type, column2 type, ...); //* Crea una nuova tabella
// DROP TABLE table_name; //* Elimina una tabella
// ALTER TABLE table_name ADD column_name type; //* Aggiunge una colonna
// ALTER TABLE table_name DROP COLUMN column_name; //* Rimuove una colonna
// ALTER TABLE table_name MODIFY column_name new_type; //* Modifica il tipo di una colonna
// DESCRIBE table_name; //* Mostra struttura della tabella

//todo dati
// INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...); //* Inserisce dati
// SELECT * FROM table_name; //* Seleziona tutti i dati
// SELECT column1, column2 FROM table_name; //* Seleziona colonne specifiche
// SELECT * FROM table_name WHERE condition; //* Filtra dati con condizione
// UPDATE table_name SET column1 = value1 WHERE condition; //* Aggiorna dati
// DELETE FROM table_name WHERE condition; //* Elimina dati
// TRUNCATE TABLE table_name; //* Cancella tutti i dati della tabella

//todo ordinamento e limiti
// SELECT * FROM table_name ORDER BY column ASC|DESC; //* Ordina i risultati
// SELECT * FROM table_name LIMIT n; //* Limita il numero di risultati

//todo join e relazioni
// SELECT * FROM table1 INNER JOIN table2 ON table1.col = table2.col; //* Join tra due tabelle
// SELECT * FROM table1 LEFT JOIN table2 ON table1.col = table2.col; //* Join sinistro
// SELECT * FROM table1 RIGHT JOIN table2 ON table1.col = table2.col; //* Join destro

//todo aggregazioni
// SELECT COUNT(*) FROM table_name; //* Conta le righe
// SELECT SUM(column) FROM table_name; //* Somma valori
// SELECT AVG(column) FROM table_name; //* Media valori
// SELECT MIN(column) FROM table_name; //* Valore minimo
// SELECT MAX(column) FROM table_name; //* Valore massimo
// SELECT column, COUNT(*) FROM table_name GROUP BY column; //* Raggruppa dati

//todo altre utilità
// SHOW DATABASES; //* Mostra tutti i database
// SHOW TABLES; //* Mostra tutte le tabelle del DB corrente
// SHOW COLUMNS FROM table_name; //* Mostra colonne della tabella
// EXPLAIN SELECT * FROM table_name; //* Mostra il piano di esecuzione di una query
