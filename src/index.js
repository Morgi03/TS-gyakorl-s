"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
let books = [];
let book1 = new Book_1.Book("könyv1", 6);
let book2 = new Book_1.Book("könyv2", 4);
let book3 = new Book_1.Book("könyv3", 10);
/*
books.push(book1);
books.push(book2);
books.push(book3);
*/
// + feladat
for (let i = 0; i < 30; i++) {
    books.push(new Book_1.Book("Book#" + i, randomNumBetweenTwoValues(1, 10)));
}
function randomNumBetweenTwoValues(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// + feladat
// 1. feladat
for (let b of books) {
    console.log(b.toString());
}
// 2. feladat
for (let b of books) {
    if (b.getRating() > 7) {
        console.log(b.toString());
    }
}
// 3. feladat
function bestof(booklist) {
    let best = booklist[0];
    for (let i = 0; i < booklist.length; i++) {
        if (best.getRating() > booklist[i].getRating()) {
            best = booklist[i];
        }
    }
    return best;
}
console.log("A legjobbra értékelt könyv: " + bestof(books).toString());
