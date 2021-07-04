//Given an array [0, 3, 4, 5, 6, 9, 0], place 1 at the start of this array.

let array = [0, 3, 4, 5, 6, 9, 0];
array.unshift(1);               //unshift use for add a number in the start
console.log(array);
for (let i = 0; i >= array.length; i++) {
    console.log(array[i]);
}
