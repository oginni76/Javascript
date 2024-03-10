// Find the average of the array and assign a grade
// 1-59: f
// 60-69: D
// 70-79:C
// 80-89: B
// 90-99:A 
const marks = [80,100,80];

function score(){
    let sum = 0;
    for(let i = 0; i<marks.length; i++){
        sum += marks[i]
        avg = sum / marks.length           
    }
    console.log(avg)

    if(avg < 60){
        console.log('F');
        } else if (avg < 70 && avg >=60){
            console.log('D')
        } else if (avg < 80 && avg >= 70){
            console.log('C')
        } else if (avg < 90 && avg >= 80){
            console.log('B')
        } else if (avg <= 100 && avg >= 90){
            console.log('A')          
}
    // switch(avg){
    //     case (avg < 60):
    //         console.log('F')
    //     case (avg < 70 && avg > 60):
    //         console.log('D')
    //         return 'D'
    //     case (avg < 80 && avg > 70):
    //         console.log('C')
    //     case (avg < 90 && avg > 80):
    //         console.log('B')
    //     case (avg < 100 && avg > 90):
    //         console.log('A')
    // }

}
score()


// Ideally since i was going to iterate an array
// I should have used the for of loop but i just decided 
// to use the normal for loop to see if i could still properly
//use it