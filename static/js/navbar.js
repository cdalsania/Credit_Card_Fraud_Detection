// Embed navbar.html in place of nav-placeholder
$.get("/navbar", function(data) {
    var pageNavItemId = d3.select("#nav-placeholder").attr("pagename");
    $("#nav-placeholder").replaceWith(data);
    d3.select("#home-li").classed('active', false);
    d3.select("#data-li").classed('active', false);
    d3.select("#analysis-li").classed('active', false);
    d3.select("#predictions-li").classed('active', false);
    d3.select("#conclusions-li").classed('active', false);
    d3.select("#about-li").classed('active', false);
    d3.select(pageNavItemId).classed('active', true);
});