var firstNumber = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;
var thirdNumber = document.getElementById("thirdNumber").value;


var sum = Number(firstNumber) + Number(secondNumber) + Number(thirdNumber);
var average = sum / 3;


document.getElementById("sumAndAverageFromThreeNumbers").addEventListener("click",function() {
    alert("Sum: " + sum + ". Average " + average);
},true);








function onlyAllowNumbers(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}