/*Suppose you’re given an array [ [1, 2], [3, 4], [5, 6] ].
 Print all the members of this two-dimensional array using for loop and while nested loops.*/

let array = [[1, 2], [3, 4], [5, 6]];
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }
}