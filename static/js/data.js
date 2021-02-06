/***************************************************
SELECT ALL REQUIRED HTML ELEMENTS
****************************************************/

var tableBody = d3.select("tbody");
var fetching = d3.select("#fetching");

/***************************************************
USER DEFINED FUNCTIONS
****************************************************/

// function to load table data
function loadTableData(dataArray) {
    // clear table content before loading
    tableBody.html("");

    // load data into table
    dataArray.forEach((data) => {
        var row = tableBody.append("tr");
        row.append("td").text(data["Time"]);
        row.append("td").text(data["V1"]);
        row.append("td").text(data["V2"]);
        row.append("td").text(data["V3"]);
        row.append("td").text(data["V4"]);
        row.append("td").text(data["V5"]);
        row.append("td").text(data["V6"]);
        row.append("td").text(data["V7"]);
        row.append("td").text(data["V8"]);
        row.append("td").text(data["V9"]);
        row.append("td").text(data["V10"]);
        row.append("td").text(data["V11"]);
        row.append("td").text(data["V12"]);
        row.append("td").text(data["V13"]);
        row.append("td").text(data["V14"]);
        row.append("td").text(data["V15"]);
        row.append("td").text(data["V16"]);
        row.append("td").text(data["V17"]);
        row.append("td").text(data["V18"]);
        row.append("td").text(data["V19"]);
        row.append("td").text(data["V20"]);
        row.append("td").text(data["V21"]);
        row.append("td").text(data["V22"]);
        row.append("td").text(data["V23"]);
        row.append("td").text(data["V24"]);
        row.append("td").text(data["V25"]);
        row.append("td").text(data["V26"]);
        row.append("td").text(data["V27"]);
        row.append("td").text(data["V28"]);
        row.append("td").text(data["Amount"]);
        row.append("td").text(data["Class"]);
    });
};

// fetch page data
function fetchPageData(pageNum) {
    d3.json(`/fetchpagedata/${pageNum}`).then(data => {
        // load table data
        loadTableData(data);
        fetching.text("");
    });
}

// fetch prev page data
function onPrevClicked() {
    d3.event.preventDefault();
}

// fetch next page data
function onNextClicked() {
    d3.event.preventDefault();
}

var currPrevLiDisabledVal;
var currNextLiDisabledVal;
var currLi1DisabledVal;
var currLi2DisabledVal;
var currLi3DisabledVal;
var currLi4DisabledVal;
var currLi5DisabledVal;

// disable page number links
function disablePageNumLinks() {
    currPrevLiDisabledVal = d3.select('#prevButtonLi').classed('disabled');
    currNextLiDisabledVal = d3.select('#nextButtonLi').classed('disabled');
    currLi1DisabledVal = d3.select("#page-num-li-1").classed('disabled');
    currLi2DisabledVal = d3.select("#page-num-li-2").classed('disabled');
    currLi3DisabledVal = d3.select("#page-num-li-3").classed('disabled');
    currLi4DisabledVal = d3.select("#page-num-li-4").classed('disabled');
    currLi5DisabledVal = d3.select("#page-num-li-5").classed('disabled');
    d3.select('#prevButtonLi').classed('disabled', true);
    d3.select('#nextButtonLi').classed('disabled', true);
    d3.select("#page-num-li-1").classed('disabled', true);
    d3.select("#page-num-li-2").classed('disabled', true);
    d3.select("#page-num-li-3").classed('disabled', true);
    d3.select("#page-num-li-4").classed('disabled', true);
    d3.select("#page-num-li-5").classed('disabled', true);
}

// enable page number links
function enablePageNumLinks() {
    d3.select('#prevButtonLi').classed('disabled', currPrevLiDisabledVal);
    d3.select('#nextButtonLi').classed('disabled', currNextLiDisabledVal);
    d3.select("#page-num-li-1").classed('disabled', currLi1DisabledVal);
    d3.select("#page-num-li-2").classed('disabled', currLi2DisabledVal);
    d3.select("#page-num-li-3").classed('disabled', currLi3DisabledVal);
    d3.select("#page-num-li-4").classed('disabled', currLi4DisabledVal);
    d3.select("#page-num-li-5").classed('disabled', currLi5DisabledVal);
}