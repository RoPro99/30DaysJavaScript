///Substring in string
const hobbbies='I love c++,html and css';

//indexof()
hobbbies.indexOf();

const position = hobbbies.indexOf('and');
console.log(position);
///lastindexof()
const lastposition = hobbbies.lastIndexOf('css');

console.log(position,lastposition);
 ///includes
 const include = hobbbies.includes('css');
 console.log(include);//it will search and tell the value is true or false

//it will start at 21th position


//Getting A Substring

const examplestring = 'hotdog';

//slice
const dog = examplestring.slice(0,4);//it will take idex value  from 2 5
console.log(dog); 

























// Returns the position of the first occurrence of a substring.

// @param searchString — The substring to search for in the string

// @param position — The index at which to begin searching the
// String object. If omitted, search starts at the beginning of the string.