



// bind to click
// check switch text
// switch search placeholder
// $("#Switch").on("click", function (e) {
//     e.preventDefault()
//     $(`[type="search"`).attr("placeholder", $("#Switch").text() == "Ingredients" ? "Search Ingredients" : "Search Recipes");
//     $("#Switch")
//     $("#Switch").text($("#Switch").text() == "Ingredients" ? "Recipes" : "Ingredients")
// }) 

$('#carouselExampleIndicators').carousel({
    interval: 4000
})



// ~~~ Recipe Facts Populator ~~~
// This function will populate the recipe html with important details.  
function populateRecipe(recipe) {
    document.getElementById("title").innerHTML = recipe.label;
    populateIngredients(recipe.ingredients)
    document.getElementById("calories").innerHTML = recipe.calories;
    document.getElementById("servings").innerHTML = recipe.yield;
    document.getElementById("recipe-img").src = recipe.image;
    document.getElementById("prep-time").innerHTML = recipe.time;
}


// ~~~ Ingredient List Populator ~~~
// This function writes our ingredients into the webpage.
function populateIngredients(ingredients) {
    var whatever = document.getElementById.ingredients;
    var ul = document.getElementById("ingredients-list");
    // This loop makes sure every ingredient will be listed.
    for (i = 0; i < ingredients.length; i++) {
        var li = document.createElement("LI");
        var ingredientDesc = document.createTextNode(ingredients[i].quantity + " " + ingredients[i].measure.label + " " + ingredients[i].food.label);
        li.appendChild(ingredientDesc);
        ul.appendChild(li);
    }
}
