document.getElementById("calculateThisShit").addEventListener("click", function() {
    var variabelA = document.getElementById("variabelA").value;
    var variabelX = document.getElementById("variabelX").value;
    alert(((variabelA * variabelX) * 3) + 7);
}, true);


function onlyAllowNumbers(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}