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

    var allPageItems = d3.selectAll(".page-item");
    var currActiveLinkId;
    var currActiveLinkNum;
    var currActivePageNum;
    allPageItems.each(function(pageItem, index) {
        if (d3.select(this).classed("active") == true) {
            currActiveLinkId = d3.select(this).attr('id');
            currActiveLinkNum = parseInt(currActiveLinkId.substr(12, 1));
            currActivePageNum = parseInt(d3.select(this).text());
        }
    });
    d3.select("#nextButtonLi").classed("disabled", false);
    if (currActiveLinkNum > 1) {
        nextActiveLinkId = "#page-num-li-" + (currActiveLinkNum - 1);
        d3.select("#page-num-li-1").classed("active", false);
        d3.select("#page-num-li-2").classed("active", false);
        d3.select("#page-num-li-3").classed("active", false);
        d3.select("#page-num-li-4").classed("active", false);
        d3.select("#page-num-li-5").classed("active", false);

        d3.select(nextActiveLinkId).classed("active", true);

        // display a message to the user
        fetching.style("text-align", "center").text("Fetching Data - Please wait...");

        // clear table content before loading
        tableBody.html("");

        disablePageNumLinks();

        fetchPageData(currActivePageNum - 1);

        enablePageNumLinks();

    } else if (currActiveLinkNum == 1) {
        if (currActivePageNum > 1) {
            d3.select("#page-num-link-1").text(currActivePageNum - 1);
            d3.select("#page-num-link-2").text(currActivePageNum);
            d3.select("#page-num-link-3").text(currActivePageNum + 1);
            d3.select("#page-num-link-4").text(currActivePageNum + 2);
            d3.select("#page-num-link-5").text(currActivePageNum + 3);
            if (currActivePageNum == 2) {
                d3.select("#prevButtonLi").classed("disabled", true);
            }
            // display a message to the user
            fetching.style("text-align", "center").text("Fetching Data - Please wait...");

            // clear table content before loading
            tableBody.html("");

            disablePageNumLinks();

            fetchPageData(currActivePageNum - 1);

            enablePageNumLinks();
        }
    }
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

/***************************************************
EVENT HANDLERS
****************************************************/
d3.select("#prevButton").on("click", onPrevClicked);
d3.select("#nextButton").on("click", onNextClicked);

// page number link event handler
d3.select("#page-num-link-1").on("click", function() {
    d3.event.preventDefault();
    if (d3.select("#page-num-li-1").classed("active") == false) {
        // display a message to the user
        fetching.style("text-align", "center").text("Fetching Data - Please wait...");

        // clear table content before loading
        tableBody.html("");

        disablePageNumLinks();

        d3.select("#page-num-li-1").classed("active", true);
        d3.select("#page-num-li-2").classed("active", false);
        d3.select("#page-num-li-3").classed("active", false);
        d3.select("#page-num-li-4").classed("active", false);
        d3.select("#page-num-li-5").classed("active", false);

        var pageNum = d3.select(this).text();
        fetchPageData(pageNum);

        enablePageNumLinks();
    }
});

// page number link event handler
d3.select("#page-num-link-2").on("click", function() {
    d3.event.preventDefault();
    if (d3.select("#page-num-li-2").classed("active") == false) {
        // display a message to the user
        fetching.style("text-align", "center").text("Fetching Data - Please wait...");

        // clear table content before loading
        tableBody.html("");

        disablePageNumLinks();

        d3.select("#page-num-li-1").classed("active", false);
        d3.select("#page-num-li-2").classed("active", true);
        d3.select("#page-num-li-3").classed("active", false);
        d3.select("#page-num-li-4").classed("active", false);
        d3.select("#page-num-li-5").classed("active", false);

        var pageNum = d3.select(this).text();
        fetchPageData(pageNum);

        enablePageNumLinks();
    }
});

// page number link event handler
d3.select("#page-num-link-3").on("click", function() {
    d3.event.preventDefault();
    if (d3.select("#page-num-li-3").classed("active") == false) {
        // display a message to the user
        fetching.style("text-align", "center").text("Fetching Data - Please wait...");

        // clear table content before loading
        tableBody.html("");

        disablePageNumLinks();

        d3.select("#page-num-li-1").classed("active", false);
        d3.select("#page-num-li-2").classed("active", false);
        d3.select("#page-num-li-3").classed("active", true);
        d3.select("#page-num-li-4").classed("active", false);
        d3.select("#page-num-li-5").classed("active", false);

        var pageNum = d3.select(this).text();
        fetchPageData(pageNum);

        enablePageNumLinks();
    }
});

// page number link event handler
d3.select("#page-num-link-4").on("click", function() {
    d3.event.preventDefault();
    if (d3.select("#page-num-li-4").classed("active") == false) {
        // display a message to the user
        fetching.style("text-align", "center").text("Fetching Data - Please wait...");

        // clear table content before loading
        tableBody.html("");

        disablePageNumLinks();

        d3.select("#page-num-li-1").classed("active", false);
        d3.select("#page-num-li-2").classed("active", false);
        d3.select("#page-num-li-3").classed("active", false);
        d3.select("#page-num-li-4").classed("active", true);
        d3.select("#page-num-li-5").classed("active", false);

        var pageNum = d3.select(this).text();
        fetchPageData(pageNum);

        enablePageNumLinks();
    }
});

// page number link event handler
d3.select("#page-num-link-5").on("click", function() {
    d3.event.preventDefault();
    if (d3.select("#page-num-li-5").classed("active") == false) {
        // display a message to the user
        fetching.style("text-align", "center").text("Fetching Data - Please wait...");

        // clear table content before loading
        tableBody.html("");

        disablePageNumLinks();

        d3.select("#page-num-li-1").classed("active", false);
        d3.select("#page-num-li-2").classed("active", false);
        d3.select("#page-num-li-3").classed("active", false);
        d3.select("#page-num-li-4").classed("active", false);
        d3.select("#page-num-li-5").classed("active", true);

        var pageNum = d3.select(this).text();
        fetchPageData(pageNum);

        enablePageNumLinks();
    }
});

/***************************************************
LOAD TABLE DATA - ON PAGE LOAD
****************************************************/

// display a message to the user
fetching.style("text-align", "center").text("Fetching Data - Please wait...");

disablePageNumLinks();

// fetch page 1 data
fetchPageData(1);

enablePageNumLinks();