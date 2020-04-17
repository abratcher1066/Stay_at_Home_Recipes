// bind to click
// check switch text
// switch search placeholder
$("#Switch").on("click", function (e) {
    e.preventDefault()
    $(`[type="search"`).attr("placeholder", $("#Switch").text() == "Ingredients" ? "Search Ingredients" : "Search Recipes");
    $("#Switch")
    $("#Switch").text($("#Switch").text() == "Ingredients" ? "Recipes" : "Ingredients")
})