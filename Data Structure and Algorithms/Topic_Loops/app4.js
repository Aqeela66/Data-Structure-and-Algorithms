/*Consider you are given an array [2,0,1,6,45,89].
 You need to find the largest element in the array.
  How’d you do that? */
let Array = [2, 0, 1, 6, 45, 89];
let largest = 0;

for (let i = 0; i < Array.length; i++) {
    if (largest < Array[i]) {
        largest = Array[i];
    }
}
console.log(largest);