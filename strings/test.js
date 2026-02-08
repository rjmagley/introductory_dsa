var userName = "Michelle";
var currentDate = "Monday, March 1st, 2021";
var alertCount = 3;
var greetingString =  `Welcome to your profile, ${userName}! It is ${currentDate}, and you have ${alertCount} unread alerts.`;

userName = "Mike";
currentDate = "Tuesday, March 2nd, 2021";
alertCount = 74512;

console.log(greetingString);


var userName = "Michelle";
var alertCount = 3;
var today = new Date();

var greetingString =  `Welcome to your profile, ${userName}! It is ${today.toLocaleDateString()}, and you have ${alertCount} unread alerts.`;

console.log(greetingString);

