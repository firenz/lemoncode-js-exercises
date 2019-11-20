// --- EJERCICIO 04 -- READ BOOKS  ------------------------------

// Crea una función isBookRead que reciba una lista de libros y un título 
// y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano. 
// En caso de no existir el libro devolver false.
// TIP: Existe un método de Array.prototype que te ayudará a 
// buscar según un patrón.

// -- OPCIONAL --
// Utiliza Typescript para añadir los tipos adecuados.

interface BookSettings{
  title: string;
  isRead: boolean;
};

function isBookReadTS(books: BookSettings[] = [], titleToSearch: string = ""): boolean {
  // Implementation here
  let book: BookSettings = books.find(x => x.title === titleToSearch);
  return (book === null) ? false : book.isRead;
}

const books = [
  {title: "Harry Potter y la piedra filosofal", isRead: true},
  {title: "Canción de hielo y fuego", isRead: false},
  {title: "Devastación", isRead: true},
];

console.log(`## Exercise 04 - READ BOOKS -- TS Version ## 
"Devastación" is read?: ${isBookReadTS(books, "Devastación")}
"Canción de hielo y fuego" is read?: ${isBookReadTS(books,"Canción de hielo y fuego")}
"Los Pilares de la Tierra" is read?: ${isBookReadTS(books, "Los Pilares de la Tierra")}`);