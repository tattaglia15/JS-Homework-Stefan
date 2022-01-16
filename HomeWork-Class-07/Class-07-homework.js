let animal = {
    name: "Ricky",
    kind: "Cat",
    speak: function(speakCat) {
        console.log(speakCat)
    }
}
animal.speak(`Dog says: Hello bro!!!`)

// //bonus 
// let animal = {
//     name: prompt("Enter the name"),
//     kind: prompt("Enter the kind"),
//     speak: function() {
//         return ` Speak from: ${this.name+ "-" +this.kind}`
//     }
// }
// animal.speak()
// let speakAnimal = animal.speak()
// console.log(speakAnimal)