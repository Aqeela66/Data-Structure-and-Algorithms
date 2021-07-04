//You need to place 7 at the 3rd index of the array: [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0] . How’d you do that?

let array = [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0];
array.splice(3, 0, 7);
console.log(array);
for (let i = 0; i >= array.length; i++) {
    console.log(array[i]);
}

//2nd method to solve this problem

let array2 = [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0];
array2.splice(3, 0, 7);
console.log(array2.join());
for (let i = 0; i >= array2.length; i++) {
    console.log(array2[i]);
}


