/* consider the situation in which you are required to check if a number is 1 or0 . 
if its 1 you need to print true.
otherwise you should print 0 */

let x = 1;
switch (x) {
    case 0:
        console.log("true");
        break;
    case 1:
        console.log("false");
        break;
    default:
        console.log("The number is neither 0 nor 1");

}