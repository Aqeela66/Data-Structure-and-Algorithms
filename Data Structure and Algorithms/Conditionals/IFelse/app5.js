/* You need to write a function that prints out ‘wild animals’ if the names of lion and leopard are passed to it.
 However,
 if I pass the names of cats and rabbits to it, it prints ‘pet animals’.
  However, if I pass any other name to it, it says ‘unknown’ */

let animal = "lions";
if (animal == "lions" || animal == "leopards") {
    console.log("WILD Animals");
} else if (animal == "cats" || animal == "rabbits") {
    console.log("PET Animals");
} else {
    console.log('Unknown');
}