/* Suppose a situation in which you are expected to show ‘less than 10’ if a number is less than 10. However, 
if it’s greater than 10, print ‘greater than 10’.
 Also, deal with the case in which it’s equal to 10 with an appropriate message. */
let num = 5;

switch (num) {
    case 1:
        console.log("less than 10");
        break;
    case 2:
        console.log("less than 10");
        break;
    case 7:
        console.log("less than 10");
        break;
    case 10:
        console.log("Equal to 10");
        break;
    case 14:
        console.log("Greater than 10");
        break;
    default:
        console.log("Unknown Value");
}