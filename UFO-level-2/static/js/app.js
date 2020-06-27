// from data.js
var tableData = data;

// YOUR CODE HERE!
var form = d3.select("#form");
var button = d3.select("#filter-btn")

// create an event handler that requests info
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(){
    // Remove an existing tbody so in new click display new info
    d3.select("tbody").remove()
    d3.select("#alert").text("")
    // Prevent the web-page of refreshing
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputElement);
    console.log(inputValue);

    // Filtering data with the desired data
    var filteredData = tableData.filter(item => 
        new Date(item.datetime).toDateString() === new Date(inputValue).toDateString());
    console.log(filteredData);

    if (filteredData.length == 0 ){
        var alertMess = d3.select("#alert");
        alertMess.text("Not UFO events registered in that date!");
    }
    else{
        // Appending the tbody to #ufo-table
        var ufoTable = d3.select("#ufo-table");
        ufoTable.append("tbody");

        var tbody = d3.select("tbody");
        
        filteredData.forEach(ufo => {
            console.log(ufo);
            var row = tbody.append("tr");
            Object.entries(ufo).forEach(([key,value]) => {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
        });   
    }

    

}

