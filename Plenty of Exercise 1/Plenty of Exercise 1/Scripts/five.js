var sek = document.getElementById("sekToDollarAndPund").value;

document.getElementById("calculateSekToDollarAndPund").addEventListener("click", function() {
    var dollar = Number(sek) * 6;
    var pund = Number(sek) * 12;
    alert(sek + "SEK in dollar: " + dollar + ", in pund: " + pund);
}, true);







