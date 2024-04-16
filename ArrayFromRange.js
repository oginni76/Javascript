// Function should take in 2 parameters min and Max, then return an array of it

// Solution using arrow functions
let array = [];
const range = (min, max) => {
        for (i = min; i <= max; i++ ){
            array.push(i)
        }
        console.log(array)
        //return array; I use console.log cause I run the code on vscode terminal and not my browser console 
}
range(-5,55);


//Without arrow functions
// function range(min, max){
//     for (i = min; i <= max; i++ ){
//         array.push(i)
//     }
//     console.log(array)
// }

// range(-5,20)


//Overall this was a simple challenge, now to check mosh's solution.
// Mosh's solution was the same, only difference was he declared the empty array inside the function while I declared mine outside
