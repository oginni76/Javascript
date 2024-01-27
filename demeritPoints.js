//Demerit Points Exercise

//Driver speed limit is 70
//For every 5km the driver moves higher than the speed limit 
//he gets a point

//Once the point is greater the 12, the driver license gets suspended

function checkSpeed(speed){

if (speed <= 70) {
    console.log(`Ok. You're within the speed limit`);

}   else if(speed > 70){
        let roundup = Math.round(speed);
        let value = roundup - 70;
        let points = value / 5;
    // console.log(roundup);
    // console.log(value);
    // console.log(points);

        if (points >= 12){
            console.log('License Suspended')
        } else { 
            console.log(`Be Careful, you have ${points} points. When it gets to 12. Your license will be suspended.`) 
        }
    } 
}

checkSpeed(120);


// HOW I APPROACHED THE PROGRAM

// for every +5 increase from 70 add 1 Point

// when point => 12 
// return license suspended

// speed - speedlimit = value
// value/5 = point


// CHALLENGES FACED
// Nothing much, just a syntax error
// It was actually smooth

// When the syntax error occured i used python to complete  it
//Then came back here

// THINGS I SHOULD HAVE DONE BETTER
// Declared the speedlimit 70 as a constant rather than using it like that
// Used better variable names.

// Instead of using else if on line 16. I could have just used the return keyword for the first if statement(line 12) and then start a new if statement under it.