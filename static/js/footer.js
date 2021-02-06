// Embed footer HTML code in place of footer-placeholder
$.get("/footer", function(data) {
    $("#footer-placeholder").replaceWith(data);
});