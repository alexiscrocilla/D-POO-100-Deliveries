function getBasketContent(number){
    if (number>10){
        console.log("Too many fruit(s) selected.")
        return
    }
    var fruits = ["strawberries","strawberries","strawberries","apples","apples","limes","limes","peach","pears","pears"].slice(0,number)
    console.log(fruits.length + " fruit(s) selected")
    return fruits
}
