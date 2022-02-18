function simpleFunction(input) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof(input) == "string") {
                resolve(input.toUpperCase())
            } else {
                reject(input)
            }
        }, 4000)
    })
}

simpleFunction(prompt("Enter Something"))
    .then(successData => {
        console.log(successData)
    })
    .catch(errorData => {
        console.log(errorData)
    })
    .finally(() => {
        console.log("This is Done!")
    })
