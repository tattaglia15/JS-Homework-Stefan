// let car = {
//     model: "Audi",
//     color: "Black",
//     year: 2021,
//     fuel: "Diesel",
//     fuelConsumption: 6/100,
// fuelDistance : function(input) {
//     let x = this.fuelConsumption * input
//     alert(`Fuel for entered km in litres: ${x}`)
//    }
// }
// car.fuelDistance(1000)

let car = {
    model: "Audi",
    color: "Blue",
    year: "2021",
    fuel: "Benzin",
    fuelConsum: 7 / 100,
fuelDistance : function() {
    let x = prompt("Enter the distance in km")
        x = this.fuelConsum * x
        alert(`You need ${x} litres for that distance.`) 
   }
}
car.fuelDistance()