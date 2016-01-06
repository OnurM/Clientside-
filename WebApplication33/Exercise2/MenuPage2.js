/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.
2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
3. add 7 drinks to the page using Product.
4. add 7 pizzas to the page using Product.
5. add 7 subs to the page using Product.
6. GO to file FixIt.html
*/
//DRINKS
//Subs

//Uppgift 1
var mondayBurger = {
    name: "Monday Burger",
    size: "90 g",
    dayOfTheWeek: "Monday",
    price: 13.30
}

var tuesdayBurger = {
    name: "Tuesday Burger",
    size: "150 g",
    dayOfTheWeek: "Tuesday",
    price: 17.30
}

var wednesdayBurger = {
    name: "Wednesday Burger",
    size: "90 g",
    dayOfTheWeek: "Wednesday",
    price: 12.30
}

var thursdayBurger = {
    name: "Thursday Burger",
    size: "200 g",
    dayOfTheWeek: "Thursday",
    price: 19.90
}

var fridayBurger = {
    name: "Friday Burger",
    size: "150 g",
    dayOfTheWeek: "Friday",
    price: 13.30
}

var saturdayBurger = {
    name: "Saturday Burger",
    size: "150 g",
    dayOfTheWeek: "Saturday",
    price: 13.30
}

var sundayBurger = {
    name: "Sunday Burger",
    size: "200 g",
    dayOfTheWeek: "Sunday",
    price: 17.70
}

var burgers = [mondayBurger, tuesdayBurger, wednesdayBurger, thursdayBurger, fridayBurger, saturdayBurger, sundayBurger];

addToPage(burgers, "~/../Images/Hamburger.png", "burgersPlace");

//Uppgift 2
function Product(name, size, price, dayOfTheWeek) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.dayOfTheWeek = dayOfTheWeek;
}

//Uppgift 3
var mondayDrink = new Product("Monday Drink", "Big", 6.30,"Monday");
var tuesdayDrink = new Product("Tuesday Drink", "Big", 6.33,"Tuesday");
var wednesdayDrink = new Product("Wednesday Drink", "Small", 3.90,"Wednesday");
var thursdayDrink = new Product("Thursday Drink", "Medium", 5.75,"Thursday");
var fridayDrink = new Product("Friday Drink", "Big", 5.90,"Friday");
var saturdayDrink = new Product("Saturday Drink", "Medium", 4.75,"Monday");
var sundayDrink = new Product("Sunday Drink", "Big", 5.75, "Sunday");

var drinks = [mondayDrink, tuesdayDrink, wednesdayDrink, thursdayDrink, fridayDrink, saturdayDrink, sundayDrink];

addToPage(drinks, "~/../Images/Drink.png", "drinksPlace");

//Uppgigt 4
var mondayPizza  = new Product("Monday Pizza", "Big", 16.30, "Monday");
var tuesdayPizza = new Product("Tuesday Pizza", "Big", 16.33, "Tuesday");
var wednesdayPizza = new Product("Wednesday Pizza", "Small", 13.90, "Wednesday");
var thursdayPizza = new Product("Thursday Pizza", "Medium", 15.75, "Thursday");
var fridayPizza = new Product("Friday Pizza", "Big", 15.90, "Friday");
var saturdayPizza = new Product("Saturday Pizza", "Medium", 14.75, "Monday");
var sundayPizza = new Product("Sunday Pizza", "Big", 15.75, "Sunday");

var pizzas = [mondayPizza, tuesdayPizza, wednesdayPizza, thursdayPizza, fridayPizza, saturdayPizza, sundayPizza];

addToPage(pizzas, "~/../Images/Pizza.png", "pizzaPlace");


function addToPage(arrayOfObjects, imageURL, divID) {
    for (var i = 0; i < arrayOfObjects.length; i++) {

        var article = document.createElement("article");
        var fieldset = document.createElement("fieldset");
        var legend = document.createElement("legend");
        var h3 = document.createElement("h3");
        var span = document.createElement("span");
        var div = document.createElement("div");


        legend.innerHTML = arrayOfObjects[i].size;
        h3.innerHTML = arrayOfObjects[i].name;
        span.innerHTML = "<img src='" + imageURL + "' alt='Drink'>";
        div.className = "price";
        div.innerHTML = arrayOfObjects[i].price;

        document.getElementById(divID).appendChild(article);
        article.appendChild(fieldset);
        fieldset.appendChild(legend);
        fieldset.appendChild(h3);
        fieldset.appendChild(span);
        fieldset.appendChild(div);
    }
}