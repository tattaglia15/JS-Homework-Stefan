function Product(name, category, hasDiscount, price) {
    this.name = name
    this.category = category
    this.hasDiscount = hasDiscount
    this.price = price
}
let products = [
    new Product("Bread", "Food", 1, 2), 
    new Product("Chocolate", "Food", 2, 4), 
    new Product("Orange", "Drinks", 1, 3),
    new Product("Fanta", "Drinks", 1, 3),
    new Product("Apple", "Food", 2, 3),
    new Product("Meat", "Food", 4, 10),
    new Product("Jamison", "Drinks", 3, 20),
    new Product("Rice", "Food", 0, 3),
    new Product("Pistachio", "Food", 0, 3),
    new Product("Cheese", "Food", 0, 5),
    new Product("Tv", "Technology", 5, 500),
    new Product("Pc", "Technology", 10, 700),
    new Product("Mobile Phone", "Technology", 0, 700),
    new Product("Toothpaste", "Health", 0, 2),
    new Product("Whey Protein", "Suplements", 0, 50),
]
function checkPrice(product) {
      return product.price > 20
}
let productsAbove20 = products.filter(checkPrice)
console.log(productsAbove20)

function checkDiscount(product) {
    if(product.category == "Food" && product.hasDiscount != 0) {
       console.log(product.name)
    }
}

let namesFood = products.filter(checkDiscount)
function discount(currentSum, prices){
    return  currentSum += prices
}
let averageProduct=products.filter(p=>p.hasDiscount).map(p=>p.price)
.reduce(discount,0);
console.log(`Sum of average price of all product that are on discount is ${averageProduct/products.filter(p=>p.hasDiscount).length}`)

let productVowel = products.filter(p=>p.hasDiscount == 0).filter(pr=>pr.name.startsWith("A")
 || pr.name.startsWith("E") || pr.name.startsWith("I") || pr.name.startsWith("O")||
  pr.name.startsWith("U")).map(product=>`${product.name} ${product.price}`);
  console.log(`The product who start with vowel and dont have discopunt are : ${productVowel}`)

function copyArray(array) {
    let arrayClon = []
array.forEach(item => arrayClon.push(item))
return arrayClon
}
let newArray = copyArray(products)
 newArray.sort((s1,s2) => s2.price - s1.price)
 console.log(newArray)