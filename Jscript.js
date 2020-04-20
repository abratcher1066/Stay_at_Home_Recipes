var keywordSearch = document.querySelector("#search").value;
var resultsListSpan = document.querySelector("#resultsList");
var apiResp;

function showIngredients(i) {
    $("#ingredientsModalContent").empty();

    var ptwo = $("<p>").addClass("ml-2").appendTo($("#ingredientsModalContent"));
    var ingredients = this.apiResp.hits[i].recipe.ingredientLines;

    for (var j = 0; j < ingredients.length; j++) {
        var ingredient = ingredients[j];
        var listItem = $("<li>").addClass("ml-2 text-info").text(ingredient);
        ptwo.append(listItem);
    }
    
    $("#ingredientsModal").modal('show');
    // console.log(this.apiResp.hits[i].recipe.label);
}

function displayResults(event) {
    var targetId = event.target.id;

    if (targetId == "search" && event.keyCode != 13) {
        return;
    }

    event.preventDefault();
    $(".row").empty();

    // showIngredients(1);

    var keywordSearch = "";
    console.log(event.target.id);

    if (targetId == "submit" || targetId == "search") {
        var keywordSearch = $("#search").val().trim();
        // var keywordSearch = document.querySelector("#search").value.trim();
    } else {
        if (targetId === "searchDesserts") {
            keywordSearch = "desserts"
        } else if (targetId === "searchBreakfast") {
            keywordSearch = "breakfast"
        } else if (targetId === "searchLunch") {
            keywordSearch = "lunch"
        } else if (targetId === "searchDinner") {
            keywordSearch = "dinner"
        }
        document.querySelector("#search").value = keywordSearch
    }
    console.log(keywordSearch);

    document.querySelector("#headline").style.display="none";
    document.querySelector("#featuredPosts").style.display="none";
    document.querySelector("#moreContent").style.display="none";

    var queryURL = "https://api.edamam.com/search?q=" + keywordSearch + "&to=30&app_id=a2306fed&app_key=4837c60881d8a0e284f9a0d4565bf8b1"

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            var results = response.data;
            apiResp = response
            console.log(response);
            console.log(response.hits[0].recipe.image)

            var row = $("<div>").addClass("row").appendTo($("#resultsList"));
            $("<i>").click(function(event){ 
                if (event.target.className === "fa-heart-o") {
                $(this).toggleClass("fa-heart fa-heart-o");
                console.log("click");
                
                }
            });

            for (var i = 0; i < 30; i++) {
                //creating div row to contain Cards
                var col = $("<div>").addClass("col m4 l4").appendTo(row);
                var card = $("<div>").addClass("card mt-4").appendTo(col);

                var favIcon = $("<i>").addClass("heart fa fa-heart-o");
                card.prepend(favIcon);
                $(".heart").css({
                    "position": "relative",
                    "left": "85%",
                    "padding": "12px",
                    "color": "red",
                    "font-size": "25px",
                })
                $("i.more_vert").css({
                    "position": "relative",

                })

                var cardImage = $("<div>").addClass("card-image waves-effect waves-block waves-light").appendTo(card);

                // Storing image
                var imgURL = response.hits[i].recipe.image;

                var image = $("<img>");
                image.attr("src", imgURL);
                image.attr("onclick", "javascript:showIngredients(" + i + ");");
                image.appendTo(cardImage);

                var cardContent = $("<div>").addClass("card-content").appendTo(card);
                var cardTitle = $("<span>").addClass("card-title ml-2 grey-text text-darken-4").appendTo(cardContent);
                cardTitle.attr("onclick", "javascript:showIngredients(" + i + ");");
                $(".card-content").css({
                    "height": "180px",
                })
                
                var title = response.hits[i].recipe.label;
                $("<h5>").addClass("d-inline-block mt-2 text-primary").appendTo(cardTitle).html(title)
                var instructions = response.hits[i].recipe.url;
                var pOne = $("<p>").appendTo(cardContent);
                var link = $("<a>").appendTo(pOne);
                link.addClass("instructions ml-2");
                $(".instructions").css({
                    "position": "absolute",
                    "bottom": "60px",
                })
                link.attr("href", instructions);
                link.attr("target", "_blank");
                link.html("Instructions");

            }

        });
       
}

$("#submit").on("click", displayResults);

$(document).on("click", "#searchDesserts", displayResults)
$(document).on("click", "#searchBreakfast", displayResults)
$(document).on("click", "#searchLunch", displayResults)
$(document).on("click", "#searchDinner", displayResults)
$(document).on("keydown", "#search", displayResults)

$(document).on("click", ".heart.fa", function(event) {
    $(this).toggleClass("fa-heart fa-heart-o");
    $(this)
      .siblings(".card-content")
      .children(".instructions");
    var testValue = $(this)
      .siblings(".card-content")
      .find(".instructions");
    console.log(testValue.attr("href"));
  });

$(document).ready(function(){
    $(".dropdown-trigger").dropdown();
    });
