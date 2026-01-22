//todo React Hooks
//todo Elenco dei principali React Hooks con il loro ritorno

//!Come leggere questo file?
//todo Come si usa
//* Cosa fa e cosa ritorna ogni Hook
//? Quando può essere utile

//todo useState(initialValue)	[state, setState]	
//*Gestisce stato locale del componente. state contiene il valore attuale, setState aggiorna lo stato e triggers un rerender. 
//?Utile per valori che cambiano dinamicamente.

//todo useEffect(callback, [deps])	undefined (può ritornare cleanup)	
//*Esegue side effects dopo il render (fetch API, subscription, timer). [deps] definisce quando eseguire l’effetto. 
//?Può restituire una funzione di cleanup per pulire risorse.

//todo useLayoutEffect(callback, [deps])	undefined	
//*Simile a useEffect, ma eseguito sincronicamente dopo tutte le mutazioni del DOM e prima del painting.
//?Utile per misurazioni del DOM o modifiche che devono essere visibili immediatamente.

//todo useReducer(reducer, initialState)	[state, dispatch]	
//*Gestisce stato complesso usando un reducer. dispatch(action) aggiorna lo stato tramite la logica definita nella funzione reducer.
//?Ideale per più variabili correlate o logica complessa.

//todo useContext(MyContext)	valore del context	
//*Permette di leggere il valore corrente di un Context senza usare <Context.Consumer>. 
//?Utile per condividere stato globale come temi, user info o lingua.

//todo useRef(initialValue)	{ current: value }	
//*Mantiene un valore persistente tra render senza causare rerender. 
//?Può anche referenziare un elemento DOM per manipolarlo direttamente.

//todo useMemo(() => value, [deps])	valore memorizzato	
//*Memorizza un valore calcolato per evitare ricalcoli costosi ad ogni render. [deps] decide quando ricalcolare. 
//?Utile per ottimizzare performance.

//todo useCallback(() => fn, [deps])	funzione memorizzata	
//*Memorizza una funzione tra render per evitare ricreazioni inutili, 
//?utile con useEffect o React.memo. [deps] decide quando rigenerarla.

//todo useImperativeHandle(ref, createHandle, [deps])	undefined	
//*Permette di personalizzare i valori esposti da un componente quando si usa forwardRef. 
//?Utile per esporre solo alcune funzionalità di un componente figlio.
//todo useDebugValue(value)	undefined	
//*Mostra informazioni custom su React DevTools per debugging. 
//?Non influisce sul render.