$(document).ready(function() {
    $("#search").keyup(function() {
        var searchValue = $("#search").val();
        var regexSearchValue = new RegExp(searchValue, "i");
        $.getJSON("~/../products.json", function(data) {
            var searchResult = "<ul class='searchResults'>";

            var filteredCategory = $("input[name=product]:radio:checked").val();

            $.each(data, function(key, value) {
                if ((value.name.search(regexSearchValue)) && value.category.search()) {
                    
                }
            });
        });
    });
});