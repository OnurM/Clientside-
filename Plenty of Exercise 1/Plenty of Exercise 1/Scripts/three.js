var hours = document.getElementById("hours").value;

var inMinutes = hours * 60;
var inSeconds = inMinutes * 60;

document.getElementById("calculateMinutesAndSecondsFromHours").addEventListener("click", function() {
    alert(hours + " hours in minutes: " + inMinutes + ", in seconds: " + inSeconds);
},true);







function onlyAllowNumbers(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}