$(document).ready(function () {
    $("#search").keyup(function () {
        search();
    });

    $("input[name=filterCategory]").click(function () {
        search();
    });
});



function search() {
    var searchValue = $("#search").val();
    var regexSearchValue = new RegExp(searchValue, "i");
    $.getJSON("products.json", function (data) {

        var searchResult = "<ul class='searchResults'>";
        var filteredCategory = $("input[name=filterCategory]:radio:checked").val();

        $.each(data, function (key, value) {
            if ((value.name.search(regexSearchValue) !== -1) && (value.category.search(filteredCategory) !== -1) || (value.about.search(regexSearchValue) !== -1) && (value.category.search(filteredCategory) !== -1)) {
                searchResult += "<li> <p>" + value.name + " <strong>" + value.about + "</strong> </p>" + "<img src='~/../Images/" + value.url_image + "' alt='" + value.name + "' > </li>";
            }
        });

        searchResult += "</ul>";
        $("#searchResult").html(searchResult);
    });
}