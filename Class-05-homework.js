let header = document.getElementById("myTitle");
console.log(`Our Header's Text: ${header.innerText}`)
header.innerText = ("This is New Text")

let changeParagraph = document.getElementsByClassName("paragraph");
console.log(`Our Paragraphs lenght ${changeParagraph.length}`);
console.log(`Our Paragraph's firs element: ${changeParagraph[0].innerText}`)
changeParagraph[0].innerText = ("Text of New Paragraph")
changeParagraph[1].innerText = ("Extra New Text")

let headers = document.getElementsByTagName("h3") [0];
headers.innerText = ("HELLO THERE")
let headerset = document.getElementsByTagName("h1") [1]
headerset.innerText = ("Hello How Are you")