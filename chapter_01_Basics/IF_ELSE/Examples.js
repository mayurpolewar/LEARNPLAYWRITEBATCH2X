/*let x = 7
if (x % 2 === 0) {
    console.log("x is an even number");
} else {
    console.log("x is an odd number");
}*/

// Leap year checker
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}