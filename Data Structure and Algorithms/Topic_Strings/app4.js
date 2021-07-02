//Consider a string ‘Node.js’given to you. I want the last three characters removed. How’d you do that?

let string = "Node.js"
string = string.substring(0, string.length - 3);
console.log(string);