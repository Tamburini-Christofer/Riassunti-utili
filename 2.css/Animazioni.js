//todo Animazioni in Css

//todo base animazioni
// transition //* Gestisce la transizione tra stati di proprietà CSS
// transition-property //* Specifica quali proprietà animare (es: width, color…)
// transition-duration //* Durata della transizione (es: 0.5s)
// transition-timing-function //* Curva di accelerazione (linear, ease, ease-in…)
// transition-delay //* Ritardo prima dell’inizio della transizione

//todo keyframes
// @keyframes name //* Definisce un’animazione con step intermedi
// from //* Stato iniziale della keyframe (0%)
// to //* Stato finale della keyframe (100%)
// 0%…100% //* Stati intermedi opzionali per animazioni più complesse

//todo applicare animazioni
// animation //* Proprietà shorthand per applicare un’animazione (name, duration, timing, delay…)
// animation-name //* Nome dell’animazione da @keyframes
// animation-duration //* Durata dell’animazione
// animation-timing-function //* Curva di accelerazione
// animation-delay //* Ritardo prima dell’inizio
// animation-iteration-count //* Numero di ripetizioni (infinite per loop)
// animation-direction //* Normal, reverse, alternate
// animation-fill-mode //* Come si comporta prima e dopo animazione (forwards, backwards, both, none)
// animation-play-state //* Pausa o riprendi animazione (running, paused)

//todo Esempi 
//* esempio con transition */
// button {
//   background-color: blue;
//   transition: background-color 0.5s ease-in-out;
// }
// button:hover {
//   background-color: red;
// }

//* esempio con keyframes e animation */
// @keyframes slide {
//   0% { transform: translateX(0); }
//   50% { transform: translateX(50px); }
//   100% { transform: translateX(0); }
// }
// div {
//   animation: slide 2s ease-in-out infinite;
// }
