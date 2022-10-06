import { Book } from "./Book";

let books : Array<Book> = [];
let book1 : Book = new Book("könyv1", 6); 
let book2 : Book = new Book("könyv2", 4); 
let book3 : Book = new Book("könyv3", 10);
/*
books.push(book1);
books.push(book2);
books.push(book3);
*/


// + feladat
for (let i : number = 0; i < 30; i++) {
    books.push(new Book("Book#"+i,randomNumBetweenTwoValues(1,10)))
}

function randomNumBetweenTwoValues(min : number, max : number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  // + feladat



  // 1. feladat

for (let b of books) {
    console.log(b.toString());
}



// 2. feladat

    for (let b of books) {
        if(b.getRating() > 7){
        console.log(b.toString());
    }
    }

    

// 3. feladat

    function bestof(booklist : Array<Book>) : Book {
        let best : Book = booklist[0];
        for (let i : number = 0; i < booklist.length; i++) {
            if(best.getRating() > booklist[i].getRating()) {
                best = booklist[i];
            }
        }
        return best;
    }

    console.log("A legjobbra értékelt könyv: "+bestof(books).toString());


