/*Suppose you are given an array: [9, 7, 75, 32, 3234, 5, 3] . 
Find whether 3 is present in the given array.
If it’s there return true otherwise return false */

let array = [9, 7, 75, 32, 3234, 5, 3];
let i = 0;
while (i <= array.length) {
    if (array[i] == 3) {
        console.log("true");
    } else {
        console.log("false");
    } i++;
}