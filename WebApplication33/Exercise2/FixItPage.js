/*
For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked!

###Window object at page 124:###
1. Link the script with FixIt.hmtl

2. Add som tags that doesn't change the visual part of the paragraph.

3.Play with the properties at page 124 in the book. 
  Use properties creatively to display things at the html page
  


4.Add a stylesheet that displays the changed words in fat font and in red.
5. PLay with the Methods 
### DOM page 126:###
6. Play with the DOM-properties

### String objects page 128, 129: ###

7. Save the the text from the makeMeAnArray-paragraph into an array.
8. Use all the string methods and propertys allong with the array

### String objects page 132: ###
9. check if the 4th element in the array is a number

### Math page 134: ###
10. Round one of the numbers in the paragraph up/down
11. replace the 3rd word with PI then roud it to the nearest integer

### Date object###
12. Calculate how many days it's until your birthday and present it.
13. Calculate how many minutes old you are and present it.

Bonus exercises:
### Demo page 141:###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date

*/


//Uppgift 2-5
window.document.write("Using window.location to get the current URL and writing it out with window.document.write():  " + window.location + "<br>");

alert("Den nuvarande X-positionen för musen är: " + window.screenX + ". Y-positionen är:  " + screenY + ". The height of your window is: " + window.innerHeight + " and the width is: " + window.innerWidth + ". You are at: " + window.location);

(function showMeTheChangedWords() {
    var changedWords = document.getElementsByClassName("changedText");
    for (var i = 0; i < changedWords.length; i++) {
        changedWords[i].className += " " + "changeMyWords";
    }
})();

alert("Detta görs med hjälp av window.alert()");

if (confirm("Öppnar aftonbladet!!!")) {
    window.open("http://aftonbladet.se");
}

if (confirm("Printa sidan")) {
    window.print();
}

//Uppgift 6
document.write("Title of this document: " + document.title + "<br>");
document.write("This document was last modified: " + document.lastModified + "<br>");
document.write("This documents URL is: " + document.URL + "<br>");
document.write("This documents domain is: " + document.domain + "<br>");


//Uppgift 7-9
var arrayFromParagraph = document.getElementById("makeMeAnArray").innerHTML.trim().split(" ");

var toTrim = "               "+ arrayFromParagraph[0];

console.log(arrayFromParagraph.length);
console.log(arrayFromParagraph[0].toUpperCase());
console.log(arrayFromParagraph[0].toLowerCase());
console.log(arrayFromParagraph[0].charAt(5));
console.log(arrayFromParagraph[0].indexOf("l"));
console.log(arrayFromParagraph.lastIndexOf("n"));
console.log(arrayFromParagraph[0].substring(0, 2));
console.log("Before: " + toTrim + ", After: " + toTrim.trim());
console.log(arrayFromParagraph[0].replace("r", "s"));

console.log(isNaN(arrayFromParagraph[4]));



//Uppgift 10 - 11
console.log(Math.ceil(arrayFromParagraph[4]));
arrayFromParagraph[2] = 3.14;
console.log(Math.round(arrayFromParagraph[2]));


// ** Uppgift 12-13 **

//idag
today = new Date();

var birthday = new Date(today.getFullYear(), 07, 31) //sätter datumet till 31 Augusti

if (today.getMonth() == 11 && today.getDate() > 25) //om min födelsedag redan har passerat i år
    birthday.setFullYear(birthday.getFullYear() + 1); //räkna ut nästa födelsedag

//räkna ut hur många millisekunder det går på ett dygn
var oneDay = 1000 * 60 * 60 * 24;

//räkna ut tidsskillnaden (i dagar) på de två olika datumen
var daysLeft = Math.ceil((birthday.getTime() - today.getTime()) / (oneDay));

//det går 1440 minuter på ett dygn
var minutesLeft = Math.ceil(daysLeft * 1440);

document.getElementById("birthdayPresentation").innerHTML = daysLeft + " dagar kvar till nästa födelsedag (08/31) <br/>";

document.getElementById("minutePresentation").innerHTML = minutesLeft + " minuter kvar till nästa födelsedag (08/31) <br/> <br/>";
