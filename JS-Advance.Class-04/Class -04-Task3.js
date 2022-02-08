let firstName = ["Stefan", "Marko", "Bojan", "Tanja", "Elena"];
let lastName = ["Stojanovski", "Bundalevski", "Damchevski", "Stojanovska", "Petrusevska"];

let res = (function(fname,lname){
    let rezult;
    for(i =0; i<fname.length; i++) {
        rezult = fname[i] +" "+ lname[i]
        console.log(rezult)
    }   
})(firstName, lastName)