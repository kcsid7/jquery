$("#movieSubmit").on("click", function(e) {
    let movieTitle = $("#movieTitle");
    let movieRating = $("#movieRating");
    $(".movieList").append($("<p>", {text: `${movieTitle.val()} - ${movieRating.val()}`})); 

    $("p").on("click", function(e) {
        $(e.target).remove();
    })

    $("p").on("mouseenter", function(e) {
        $(e.target).css("text-decoration", "line-through");
    }).on("mouseleave", function(e) {
        $(e.target).css("text-decoration", "none");

    })

    movieTitle.val("");
    movieRating.val("");
})