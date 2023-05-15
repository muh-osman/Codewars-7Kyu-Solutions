// List Filtering

// In this kata you will create a function that
// takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


// Solution

// Loop through the array
// Check if the element is string

// Method 1
function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter((element) => typeof element !== 'string');
}
console.log(filter_list([1,2,'a','b']));





// Method 2
const filter = arr => arr.filter(el => +el)
console.log(filter([1, 2,'a','b']))
