var inputNumber = document.getElementById("theNumber").value;



document.getElementById("result").addEventListener("click", function () {
    var sqrtValue = Math.sqrt(Number(inputNumber));
    alert(sqrtValue);
},true);


function onlyAllowNumbers(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}