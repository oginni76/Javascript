// Create a function with a limit parameter
// The function should return 
// the sum of the muliples of 3 & 5 from 0 up to the limit passed

let sumMultiple = 0;
let multiplearray = [];

function sum(limit){
    for(let i = 0; i<=limit; i++){
        if ((i % 3 === 0)  || (i % 5 === 0)){ 
            multiplearray.push(i)
        }    
    }  
    console.log(multiplearray)  

    for(let i = 0; i<multiplearray.length; i++){
        sumMultiple += multiplearray[i];
    } 
    console.log(sumMultiple)
}
sum(10)

// This problem was a little tasking
// Mosh's way was much shorter and precise
// but i used this cause i wanted it to be clear
// the first loop takes the multiples and puts them inside an array using the push method
//While the second loop adds the element in the array

// Mosh Hamedani's Solution
// function sum(limit){
//     let sum = 0;
//     for (let i = 0; i <= limit; i++)
//         if ((i % 3 === 0)  || (i % 5 === 0))
//             sum+= i;
//     return sum;
// }
