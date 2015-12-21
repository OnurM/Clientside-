var salesAmount = document.getElementById("salesAmount").value;

var salesProfit = (Number(salesAmount) * 0.09) + 15000;



document.getElementById("result").addEventListener("click", function() {
    alert(salesProfit);
}, false);

document.getElementById("something").addEventListener("click", function () {
    alert("Sen jag... :)");
}, false);

document.getElementById("somethingElse").addEventListener("click", function () {
    alert("JAG FÖRST!!!", true);
});




function onlyAllowNumbers(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}