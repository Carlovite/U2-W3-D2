const saveButton = document.getElementById("button1");
const resetButton = document.getElementById("button2");
const textAreaReference = document.getElementById("exampleFormControlInput1");
const localStorageKey = "notepad-memory";
const paragrafo = document.getElementById("parag");

const save = () => {
  // recupero il contenuto della textarea, e me lo salvo in una variabile
  const content = textAreaReference.value;
  // content è una stringa, non dobbiamo fare conversioni strane per salvarne il valore in localStorage
  localStorage.setItem(localStorageKey, content);
  alert("Blocco note salvato!");
  if (content) {
    paragrafo.innerHTML = `${content}`;
  } else {
    paragrafo.innerHTML = ``;
  }
};

const reset = () => {
  // dobbiamo chiedere conferma all'utente, poi svuotare il form e cancellare la memoria in localStorage
  if (window.confirm("ATTENZIONE! Resettare il blocco note?")) {
    // entro qua dentro solamente se clicco OK
    console.log("ora elimino tuttoooo");
    // svuoto la textarea
    textAreaReference.value = "";
    // eliminare la key 'notepad-memory' dal localStorage
    localStorage.removeItem(localStorageKey); // localStorageKey è 'notepad-memory'
  }
  paragrafo.innerHTML = ``;
};

saveButton.addEventListener("click", save);
resetButton.addEventListener("click", reset);
