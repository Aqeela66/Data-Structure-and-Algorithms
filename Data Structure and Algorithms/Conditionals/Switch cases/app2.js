/* you are given two numbers num1=4, num2=7.
add both and return true if both are equal to 11
otherwise return false if they dont equal to 11 */

let num1 = 4;
let num2 = 7;
let sum = num1 + num2;

switch (sum) {
    case 11:
        console.log("true");
        break;
    default:
        console.log("false");
}