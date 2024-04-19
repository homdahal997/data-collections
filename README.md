# Data Collections

This project is a CSV parser that takes a CSV string, processes it, and performs various operations on the data.

## Part 1: Refactoring Old Code

The code starts by taking a CSV string and splitting it into rows. Each row is then split into cells using a comma separator. The cells are then joined with a space and pushed into a two-dimensional array.

## Part 2: Expanding Functionality

The code then calculates the number of columns dynamically based on the first row of data. This allows the code to accept any number of columns.

## Part 3: Transforming Data

For each row of data in the result array, the code creates an object where the key of each value is the heading for that value’s column. The keys are converted to all lowercase letters for consistency. These objects are stored in an array, in the order that they were originally listed.

## Part 4: Sorting and Manipulating Data

The code then performs various operations on the data:

- Removes the last element from the sorted array.
- Inserts a new object at index 1.
- Adds a new object to the end of the array.
- Calculates the average age of the group.

## Part 5: Full Circle

Finally, the code transforms the final set of data back into CSV format.

## Running the Code

To run the code, simply open it in a JavaScript environment and execute it.