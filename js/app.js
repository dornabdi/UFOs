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

