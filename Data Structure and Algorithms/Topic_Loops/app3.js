/*Work on the problem above to dynamically print
 the name of each animal and prepend it with ‘this is’ conditionally.
  Print ‘something else’ if the name doesn’t equal any of the names in the list.*/

let Animals = ['cat', 'rabbit', 'pigeon', 'parrot', 'goldfish'];
for (let i = 0; i <= Animals.length; i++) {
    console.log('This is ' + Animals[i]);
}
{
    console.log(' This is something else');

}