console.log("=====================Part 1: Refactoring Old Code=======================");
// When code is outdated or inefficient, it often goes through a process called “refactoring.” Refactoring code is the process of restructuring that code without changing its original behavior.
// For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.

// our given csv string 
csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Let us start by splitting given string into rows
let rows = csvString.split("\n");
console.log(rows);

// Now loop through each row
for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    //console.log(row);
    // Now let's split row into cells using comma separator.
    let cells = row.split(",");
    let joinedRow = cells.join(" ");
    console.log(joinedRow);
}

console.log("=====================Part 2: Expanding Functionality=======================");
// Begin with the following task:
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// From problem 1, we can continue to work on with rows
// Here 
let row1 = rows[0];
// To find columsn we can split row 
let columns = row1.split(",");
colCount = columns.length;
console.log(colCount);
