// Create a function that works like the includes method.
//Let it take in two parameters, an array and a searchelement
//Your function should search the array to see if a particular element exists

//Example of how the includes method work
// let array = [1,2,3,4,5]
// let num = array.includes(5)
// console.log(num)

// This was my first solution. It works but there's an issue. The condition works for all the numbers in the array. 
// It returns true if the element is in the array(which is what we want) but it also returns false when it loops through the other numbers that are not it. I tried a couple of methods but none seem to work.
// I tried putting some of the code outside the loop. Didn't work
//Tried using the break statement but it would work after we get the true, what about before?

function includes(array, searchElement){
    for (let arrays of array){
        let check = arrays === searchElement? true : false;
    console.log(check)
    }
}
includes([1,2,3,4,6], 4)


// After spending quite a while I had to check the solution


// Mosh Solution
// const numbers = [1,2,3,4,5,6,7,8,8,9,0];
// console.log(includes(numbers, 5));
// function includes(array, searchElement){
//     for (let element of array)
//         if (element === searchElement)
//             return true;
//     return false;
// }


// My Final Solution - I had to settle for the if statement
// const includes = (array, searchElement) => {
//     for(let arrays of array)  
//         if (arrays === searchElement)
//             return true
//     return false
// }
// console.log(includes([1,2,3,4,5,6,7,8,8,9,0], 8))   



// My mistake - I put the for loop in a scope with {}, mosh didn't do that. and a whole lot more that 2+ hours couldn't solve. 
// My conclusion according to my first solution
// Using the ternary operator couldn't give a perfect code due to scope




