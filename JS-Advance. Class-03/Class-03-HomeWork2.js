document.getElementsByTagName("button")[0].addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response){
    response.json().then(function(data){
             printStats(data)
        })
    })
 .catch(function(error){
     console.log(error)
    })   
})


function printStats(info) {
    $("table").first().append(
        `<tr><td>Id: </td><td> ${info.id} </td>
         <tr><td>Name: </td><td> ${info.name} </td>
         <tr><td>Username: </td><td> ${info.username} </td>
         <tr><td>Email: </td><td> ${info.email} </td>
         <tr><td>Address/Street: </td><td> ${info.address.street} </td>
         <tr><td>Address/Suite: </td><td> ${info.address.suite} </td>
         <tr><td>Address/City: </td><td> ${info.address.city} </td>
         <tr><td>Address/Zipcode: </td><td> ${info.address.zipcode} </td>
         <tr><td>Phone: </td><td> ${info.phone} </td>
         <tr><td>Website: </td><td> ${info.website} </td>
         <tr><td>Company/Name: </td><td> ${info.company.name} </td>
         <tr><td>Company/catchPhrase: </td><td> ${info.company.catchPhrase} </td></tr>`
      )
}