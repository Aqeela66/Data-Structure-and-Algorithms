/*Suppose you’re given an array of animals [[‘cat’, ‘rabbit’], [‘pigeon’, ‘parrot’], [‘goldfish’, ‘whale’]]. 
 Now, when you encounter ‘car or ‘rabbit’ inside a nested loop, print ‘pet animals’ in the console.
 Also, if you encounter ‘pigeon’ or ‘parrot’, print ‘pet birds’.
  Also, when you encounter ‘goldfish’ or ‘whale’, print ‘fish’
*/
let animals = [["cat", "rabbit"], ["pigeon", "parrot"], ["goldfish", "whale"]];
let i = 0;
while (i < animals.length) {
    let j = 0;
    while (j < animals[i].length) {
        // console.log(animals[i][j]);

        if (animals[i][j] == "cat" || animals[i][j] == "rabbit") {
            console.log(animals[i][j]);
            console.log("pet animals");

        }
        else if (animals[i][j] == "pigeon" || animals[i][j] == "parrot") {
            console.log(animals[i][j]);
            console.log("pet birds");


        }
        else if (animals[i][j] == "goldfish" || animals[i][j] == "whale") {
            console.log(animals[i][j]);
            console.log("fish");
        }
        j++;
    }
    i++;

}