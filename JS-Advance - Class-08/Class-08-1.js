function getPost(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            success: function (data) {
                resolve(data)
            },
            error: function (errorData) {
                reject(errorData)
            }
        })
    })
}

getPost("https://jsonplaceholder.typicode.com/posts/1")
    .then(successData => {
        showProperty(successData)
    })
    .catch(errorData => {
        console.log(errorData)
    })
    .finally(() => {
        console.log("Its done")
    })

function showProperty(posts) {
    $("ul").append(`
   <li> UserId: ${posts.userId} </li>
   <li> Id: ${posts.id} </li>
   <li> Title: ${posts.title} </li>
   <li> Body: ${posts.body} </li>`
    )
}

getPost(`https://jsonplaceholder.typicode.com/users/1`)
    .then(successData => {
        showAnotherProperty(successData)
    })
    .catch(errorData => {
        console.log(errorData)
    })
    .finally(() => {
        console.log("Its done")
    })

function showAnotherProperty(stuff) {
    $("ul").after(`
    <p> ${stuff.address.street} </p>
    <p> ${stuff.company.name} </p>
    <p> ${stuff.email} </p>
    <p> ${stuff.id} </p>
    <p> ${stuff.name} </p>
    <p> ${stuff.phone} </p>
    <p> ${stuff.username} </p>
    <p> ${stuff.website} </p>
    `)
}