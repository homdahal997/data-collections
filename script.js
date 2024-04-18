console.log("=====================Part 1: Refactoring Old Code=======================");
// When code is outdated or inefficient, it often goes through a process called “refactoring.” Refactoring code is the process of restructuring that code without changing its original behavior.
// For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.

// our given csv string 
csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Let us start by splitting given string into rows
let rows = csvString.split("\n");
// console.log(rows);

// for two-D array for part 2
let twoDimArray = [];
// Now loop through each row
for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    //console.log(rows.length);
    //console.log(row);
    // Now let's split row into cells using comma separator.
    let cells = row.split(",");
    console.log(cells);
    let joinedRow = cells.join(" ");
    twoDimArray.push(cells); // pusing this here instead of writing another loop for part-2.
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
// Print twoDArray 
console.log(twoDimArray);


console.log("=====================Part 3: Transforming Data=======================");
/**
 * For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
 */
// Empty array initilization to hold our objects
let object = [];
// here we can use 
