//todo React
//* Libreria JavaScript per costruire interfacce utente dichiarative e component-based. Si concentra solo sulla UI.

//todo Componenti
//* Unità fondamentali di React che rappresentano parti della UI. Possono essere classi o funzioni. Permettono di creare interfacce modulari e riutilizzabili.

//todo Props
//* Meccanismo per passare dati dai componenti genitori ai figli. Sono read-only e permettono di rendere i componenti dinamici.

//todo State
//* Dati locali di un componente che determinano il rendering della UI. Cambiamenti nello stato provocano un nuovo render del componente.

//todo JSX
//* Sintassi che permette di scrivere HTML dentro JavaScript. Viene compilata in chiamate a React.createElement(). Rende il codice più leggibile e dichiarativo.

//todo Virtual DOM
//* Copia leggera del DOM reale. React calcola le differenze (diffing) tra Virtual DOM e DOM reale per aggiornare solo le parti necessarie, migliorando le performance.

//todo Rendering
//* Processo di visualizzazione della UI. Può essere Client-Side Rendering (CSR), Server-Side Rendering (SSR) o Hydration (aggancio del markup server al client).

//todo Eventi
//* Gestione degli eventi simile al DOM standard ma con nomi camelCase e SyntheticEvent. Garantisce compatibilità cross-browser.

//todo Conditional Rendering
//* Possibilità di mostrare componenti diversi o contenuti diversi in base a condizioni logiche, tramite if, ternario o operatori logici.

//todo Liste e Key
//* Rendering di liste di componenti tramite map() e uso della proprietà key per identificare univocamente ogni elemento, ottimizzando il diffing.

//todo Component Lifecycle
//* Ciclo di vita dei componenti classici: montaggio, aggiornamento, smontaggio. Permette di eseguire codice in momenti specifici del componente.

//todo Composizione
//* Combinazione di componenti più piccoli per costruire componenti più complessi, promuovendo il riuso e la manutenibilità.

//todo Fragments
//* Contenitori invisibili (<></> o <React.Fragment>) per raggruppare elementi senza aggiungere nodi extra al DOM.

//todo Portals
//* Permettono di renderizzare un componente figlio in un nodo DOM esterno al componente genitore.

//todo Error Boundaries
//* Componenti che intercettano errori in componenti figli e permettono di mostrare fallback UI senza far crashare tutta l’app.

//todo Context
//* Permette di condividere dati tra componenti senza passare manualmente le props a ogni livello, utile per temi, lingua, autenticazione, ecc.

//todo Performance Optimization
//* Tecniche come React.memo, PureComponent e shouldComponentUpdate per ridurre i render inutili e migliorare le prestazioni.

//todo Componenti
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

//todo State
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return <button>{this.state.count}</button>;
  }
}

//todo JSX
const element = <div className="container">Hello JSX</div>;

//todo Virtual DOM
// React aggiorna solo <div> necessario se cambia il contenuto, invece di tutto il DOM

//todo Rendering
ReactDOM.render(<App />, document.getElementById('root'));

//todo Eventi
<button onClick={() => alert("Clicked!")}>Click</button>

//todo Conditional Rendering
{isLoggedIn ? <Dashboard /> : <Login />}

//todo Liste e Key
{/* <ul>
  {items.map(item => <li key={item.id}>{item.name}</li>)}
</ul> */}

//todo Component Lifecycle
// componentDidMount, componentDidUpdate, componentWillUnmount (class components)

//todo Fragments
<>
  <h1>Title</h1>
  <p>Paragraph</p>
</>

//todo Portals
ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));

//todo Error Boundaries
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    return this.props.children;
  }
}

//todo Context
const ThemeContext = React.createContext('light');
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

//todo Performance Optimization
const MemoComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});
