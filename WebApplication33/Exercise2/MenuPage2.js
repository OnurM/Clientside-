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

for (var burger in burgers) {
    var article = document.createElement("article");
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    var h3 = document.createElement("h3");
    var span = document.createElement("span");
    var div = document.createElement("div");


    legend.innerHTML = burger.size;
    h3.innerHTML = burger.name;
    span.innerHTML = "<img src='../Images/Hamburger.png' alt='Hamburger'>";
    div.className = "price";
    div.id = burger.dayOfTheWeek;

    document.getElementById("burgersPlace").appendChild(article);
    article.appendChild(fieldset);
    fieldset.appendChild(legend);
    fieldset.appendChild(h3);
    fieldset.appendChild(span);
    fieldset.appendChild(div);
}




//<article>
//        <fieldset>
//            <legend>Monday Burger</legend>
//            <h3>Pepper burger</h3>
//            <span></span>
//            <div class="price" id="monday">19.90</div>
//        </fieldset>
//    </article>
