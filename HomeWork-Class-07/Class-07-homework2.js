
let book = [
    {
     title: "The Robots of Dawn",
     author: "Isaac Asimoiv",
     readingStatus: true
    },
{
    title: "The final Book of The Hunger Games",
    author: "Suzane Colins",
    readingStatus: false
    }
]
for( let i = 0; i < book.length; i++) {
    let books = `${book[i].title} by ${book[i].author}`
    if(book[i].readingStatus) {
        console.log("Already read " + books)
    } else {
        console.log("You still need to read" + books)
    }
}