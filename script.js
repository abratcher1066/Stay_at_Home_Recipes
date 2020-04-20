// bind to click
// check switch text
// switch search placeholder
$("#Switch").on("click", function (e) {
    e.preventDefault()
    // what is the button text? ingredients

    // is it ingredidnts? yes
    var IsIngredients = $("#Switch").text() == "Ingredients";
    var placeholder = ""
    var buttonTxt = ""
    if(IsIngredients){
        placeholder = "Search Ingredients"
        buttonTxt = "Recipes"
    } else {
        placeholder = "Search Recipes"
        buttonTxt = "Ingredients"
    }
    $(`[type="search"]`).attr("placeholder", placeholder);
    var switchBtn = $("#Switch")
    switchBtn.text(buttonTxt)
})

$(document).ready(function(){

    $("#banner").skippr();

}); 


    