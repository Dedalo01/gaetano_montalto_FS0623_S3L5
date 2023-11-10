/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log("ES A.", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 20);
console.log("ES B.", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Gaetano",
  surname: "Montalto",
  age: 28,
};
console.log("ES C.", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("ES D.", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["Java", "Javascript", "C++", "Prolog", "Lisp", "Python"];
console.log("ES E.", me.skills);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("C#");
console.log("ES F.", me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
const elementoRimosso = me.skills.pop();
console.log("ES G.", elementoRimosso);
console.log("ES G.", me.skills);

// Funzioni
console.log("FUNZIONI\n\n");

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = () => Math.floor(Math.random() * 6 + 1);
console.log("ES1.", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const numA = 3;
const numB = 5;

const whoIsBigger = (a, b) => (a > b ? a : b);
console.log("ES2.", whoIsBigger(numA, numB));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const myString = "I love coding";

const splitMe = (str) => str.split(" ");
console.log("ES3.", splitMe(myString));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const myString2 = "Ciao Mamma guarda come mi diverto";
const myBool = true;

const deleteOne = (str, bool) => {
  const strArr = str.split("");
  if (bool) {
    strArr.shift();
  } else {
    strArr.pop();
  }
  return strArr.join("");
};
console.log("ES4.", deleteOne(myString2, myBool));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const myString3 = "Sono nato nel 1995, Ho 28 anni.";

const onlyLetters = (str) => {
  const strArr = str.split("");
  console.log(strArr);
  const strArrNoNUm = [];
  for (let element of strArr) {
    if (isNaN(parseInt(element))) {
      strArrNoNUm.push(element);
    }
  }
  return strArrNoNUm.join("");
};

console.log("ES5.", onlyLetters(myString3));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const email = "ciao@email.com";

const isThisAnEmail = (str) => {
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (str.match(validEmail)) return true;

  return false;
};

console.log("ES6.", isThisAnEmail(email));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  const now = new Date();
  return now.getDate();
};

console.log("ES7.", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const howManyDices = 3;

const rollTheDices = (dices) => {
  const diceTries = [];

  for (let i = 0; i < dices; i++) {
    diceTries.push(dice());
  }

  const sum = diceTries.reduce((acc, current) => acc + current, 0);

  return { sum, values: diceTries };
};

console.log("ES8.", rollTheDices(howManyDices));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const selectedDate = new Date("2023-11-7");

const howManyDays = (date) => {
  const now = new Date();
  return Math.floor((now - date) / (1000 * 60 * 60 * 24));
};

console.log("ES9." + " " + howManyDays(selectedDate));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const dateOfBirthday = new Date("1995-1-15");

const isTodayMyBirthday = (yourBirthday) => {
  const now = new Date(); // to test, put as argument: "year-1-15", year = one you choose

  if (now.getDate() === yourBirthday.getDate()) return true;

  return false;
};

console.log("ES10.", isTodayMyBirthday(dateOfBirthday));

// Arrays & Oggetti
console.log("ARRAY & OGGETTI\n\n");
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const propertyName = "skills";
const person = {
  name: "Gaetano",
  surname: "Montalto",
  skills: ["Basket", "Programming", "Painting"],
};

const deleteProp = (object, propertyToDelete) => {
  delete object[propertyToDelete];
  return object;
};

console.log("ES11.", deleteProp(person, propertyName));

/*PER IL PROF: 
TUTTI I CONSOLE LOG CHE RIGUARDANO ESERCIZI SULL'ARRAY MOVIES SONO MESSI IN FONDO POICHE' NON 
SI PUO' USARE UNA COSTANTE PRIMA DELLA SUA INIZIALIZZAZIONE.*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = (arr) => {
  let mostRecentObj = { Year: "0" };
  for (let element of arr) {
    if (parseInt(element.Year) > parseInt(mostRecentObj.Year))
      mostRecentObj = { ...element };
  }

  return mostRecentObj;
};

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (arr) => {
  let counterMovies = 0;

  for (let movie of arr) {
    if (movie.Type.toLowerCase() === "movie") counterMovies++;
  }

  return counterMovies;
};

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (arr) => arr.map((el) => el.Year);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (arr) =>
  arr.filter((el) => parseInt(el.Year) < 2001); // il millenio attuale inizia dal 1 gennaio 2001

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (arr) =>
  arr.reduce((acc, currentEl) => acc + parseInt(currentEl.Year), 0);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const partialName = "lord";

const searchByTitle = (str) =>
  movies.filter((el) => el.Title.toLowerCase().includes(str));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (str) => {
  const matchedObjs = [];
  const unmatchedObjs = [];

  for (let movie of movies) {
    if (movie.Title.toLowerCase().includes(str)) {
      matchedObjs.push(movie);
    } else {
      unmatchedObjs.push(movie);
    }
  }

  return { match: matchedObjs, unmatch: unmatchedObjs };
};

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const myNum = 3;

const removeIndex = (num) => {
  movies.splice(num, 1);
  return movies;
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const divContainer = document.createElement("div");
divContainer.innerText = "Prova";
divContainer.setAttribute("id", "container");
document.body.appendChild(divContainer);

const selectContainer = () => document.querySelector("#container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

// inizio creazione tabella di test
const table = document.createElement("table");
const trHeadings = document.createElement("tr");

const th1 = document.createElement("th");
th1.innerText = "Nome";
const th2 = document.createElement("th");
th2.innerText = "Cognome";

trHeadings.appendChild(th1);
trHeadings.appendChild(th2);

const trRow1 = document.createElement("tr");

const tdName1 = document.createElement("td");
tdName1.innerText = "Gaetano";
const tdName2 = document.createElement("td");
tdName2.innerText = "Montalto";

trRow1.appendChild(tdName1);
trRow1.appendChild(tdName2);

const trRow2 = document.createElement("tr");

const tdSurname1 = document.createElement("td");
tdSurname1.innerText = "Pietro";
const tdSurname2 = document.createElement("td");
tdSurname2.innerText = "Bianchi";

trRow2.appendChild(tdSurname1);
trRow2.appendChild(tdSurname2);

table.appendChild(trHeadings);
table.appendChild(trRow1);
table.appendChild(trRow2);

document.body.appendChild(table);
// fine creazione tabella di test

const selectAllTd = () => document.querySelectorAll("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const tdTexts = () => {
  const allTds = selectAllTd();
  allTds.forEach((td) => console.log(td.textContent));
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const a1 = document.createElement("a");
const link1 = document.createTextNode("Vai su Epicode");
a1.appendChild(link1);
a1.setAttribute("href", "https://epicode.com");
a1.setAttribute("target", "_blank");
a1.style.display = "block";

const a2 = document.createElement("a");
const link2 = document.createTextNode("Vai su W3Schools");
a2.appendChild(link2);
a2.setAttribute("href", "https://www.w3schools.com/");
a2.setAttribute("target", "_blank");
a2.style.display = "block";

document.body.appendChild(a1);
document.body.appendChild(a2);

const backgrToA = () =>
  document
    .querySelectorAll("a")
    .forEach((a) => (a.style.backgroundColor = "red"));

backgrToA();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const elToAdd = document.createElement("li");
elToAdd.innerText = "Prova es 24";

const ul = document.createElement("ul");
ul.setAttribute("id", "myList");
const li1 = document.createElement("li");
li1.innerText = "Questo è stato generato 1";
const li2 = document.createElement("li");
li2.innerText = "Questo è stato generato 2";

ul.appendChild(li1);
ul.appendChild(li2);

document.body.appendChild(ul);

const addToList = (el) => document.querySelector("#myList").appendChild(el);

addToList(elToAdd);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const targetUl = document.querySelector("#myList");

const exterminateLiInList = (list) =>
  list.querySelectorAll("li").forEach((li) => li.remove());

exterminateLiInList(targetUl);

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClassToAllTr = () =>
  document.querySelectorAll("tr").forEach((tr) => tr.classList.add("test"));

addClassToAllTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
let heightTree = 5;

const halfTree = (num) => {
  let leafs = "";
  for (let i = 0; i < num; i++) {
    leafs += "*";
    console.log(leafs);
  }
};

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = (height) => {
  for (let i = 0; i < height; i++) {
    let leaf = "*";
    let space = " ";

    for (let j = 1; j <= i; j++) {
      leaf = leaf + "**";
    }

    let spacesBefore = space.repeat(height - i - 1);
    leaf = spacesBefore + leaf;
    console.log(leaf);
  }
};
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const maybePrime = 7;

const isItPrime = (num) => {
  if (num >= 2) {
    if (num % 1 === 0 && num % num === 0) {
      return true;
    }
  }
  return false;
};

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

console.log("ES12.", newestMovie(movies));
console.log("ES13.", countMovies(movies));
console.log("ES14.", onlyTheYears(movies));
console.log("ES15.", onlyInLastMillennium(movies));
console.log("ES16.", sumAllTheYears(movies));
console.log("ES17.", searchByTitle(partialName));
console.log("ES18.", searchAndDivide(partialName));
console.log("ES19.", removeIndex(myNum));

// DOM LOGS
console.log("DOM\n\n");
console.log("ES20.", selectContainer());
console.log("ES21.", selectAllTd());
console.log("ES22.");
tdTexts();
// ES 23 funzione invocata lì sul posto
// ES 24 funzione invocata lì sul posto
// ES 25 funzione invocata lì sul posto
// ES 26 funzione invocata lì sul posto
console.log("EXTRAS\n\n");
console.log("ES27.");
halfTree(heightTree);
console.log("ES28.");
tree(heightTree);
console.log("ES29.", isItPrime(maybePrime));
