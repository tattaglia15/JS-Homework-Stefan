let year = +prompt("Enter The Year")
let zodiac = (year-4) % 12
switch(zodiac) {
    case 0:
        alert("Rat");
        break;
    case 1:
        alert("Ox");
        break;
    case 2:
        alert("Tiger");
        break;
    case 3:
        alert("Rabbit");
        break;
    case 4:
        alert("Dragon");
        break;
    case 5:
        alert("Snake");
        break;
    case 6:
        alert("Horse");
        break;
    case 7:
        alert("Goat");
        break;
    case 8:
        alert("Monkey");
        break;
    case 9:
        alert("Rooster");
        break;     
    case 10:
        alert("Dog");
        break;
    case 11:
        alert("Pig");
        break;
    default:
        alert("Not a valid year");         
}


