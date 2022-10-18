$(document).ready(function() {
    console.log("Let's get ready to party with jQuery")
})

$("article img").addClass("image-center");

$("article p:last-child").remove();

$("#title").css("font-size", Math.random() * 100);

$("ol").append( $("<li>", {text: "Hello World"}));

$("aside").empty().append($("p", {text: "Sorry for the list"}));

$(".form-control").on("change keyup blur", function() {
    const forms = $(".form-control");
    $("body").css("background-color", `rgb(${forms.eq(0).val()}, ${forms.eq(1).val()}, ${forms.eq(2).val()})`)
})

$("img").on("click", function(e) {
    $(e.target).remove();
})