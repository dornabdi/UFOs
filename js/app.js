// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build Data Table
function buildTable(data) {
    //Clear existing data
    tbody.html("");

    // Use ForEach to append row/cells for each given value
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        //Lopp through each field in dataRow, add each value
        //as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val)
            }
        );  
    });

}

function handleClick() {
    //Get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Find new date if there is one, filter data using that date
    if (date) {
        //Apply filter to table data, keep rows that match the correct datetime
        filteredData = filteredData.filter(row => row.datetime === date);
    }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}  

// Attach event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build table when the page loads
buildTable(tableData);
