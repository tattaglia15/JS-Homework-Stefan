function Animal (fName, type, age) {
    this.firstName = fName
    this.typeAnimal = type
    this.ageAnimal = age
}

let animals = [];
let buttons = document.getElementById("myButtons");
let myAnimals = document.getElementById("myAnimals");
buttons.getElementsByTagName("button")[0].addEventListener("click", function (){
    let fName = buttons.children[0].value;
    let type = buttons.children[1].value;
    let age = buttons.children[2].value;
    let newAnimals = new Animal(fName, type, age)
    animals.push(newAnimals)
    showAnimals(animals, document.getElementsByTagName("ul")[0]);
})

function showAnimals(animalsArray, element) {
    element.innerHTML = "";
    for(let ani of animalsArray) {
        element.innerHTML += `<li><b>First Name:</b> ${ani.firstName} <b>Type:</b>${ani.typeAnimal}, <b>Age:</b> ${ani.ageAnimal} </li>`
    }
}