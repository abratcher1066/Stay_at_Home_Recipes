
// API signup	723d7a87	live



function populateRecipe (recipe) {
    document.getElementById("title").innerHTML = recipe.label;
    populateIngredients(recipe.ingredients)
    document.getElementById("calories").innerHTML = recipe.calories;
    document.getElementById("servings").innerHTML = recipe.yield;
    document.getElementById("recipe-img").src = recipe.image;
    document.getElementById("diet-labels").innerHTML = recipe.dietLabels;
    document.getElementById("health-labels").innerHTML = recipe.healthLabels;
}

function populateIngredients (ingredients) {
    var whatever = document.getElementById.ingredients;
    var ul = document.getElementById("ingredients-list");
  
    for (i = 0; i < ingredients.length; i++) {
        // SHOULD BE a ul/li list in the html
        // append text node to li
        // append li to ul
        var li = document.createElement("LI");
        var ingredientDesc = document.createTextNode(ingredients[i].quantity + " " + ingredients[i].measure.label + " " + ingredients[i].food.label);
        li.appendChild(ingredientDesc);
        ul.appendChild(li);
    }

}


document.getElementById("title");




// function takes the recipe info
// uses that info to populate the recipe section of the webpage
//