;
function isBookReadTS(books = [], titleToSearch = "") {
    let book = books.find(x => x.title === titleToSearch);
    return (book === null) ? false : book.isRead;
}
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log(`## Exercise 04 - READ BOOKS -- TS Version ## 
"Devastación" is read?: ${isBookReadTS(books, "Devastación")}
"Canción de hielo y fuego" is read?: ${isBookReadTS(books, "Canción de hielo y fuego")}
"Los Pilares de la Tierra" is read?: ${isBookReadTS(books, "Los Pilares de la Tierra")}`);
//# sourceMappingURL=read-book.js.map