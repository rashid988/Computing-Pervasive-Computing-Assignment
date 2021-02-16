///////Date Function///////
//////Current Time////

let btnShow =document.querySelector("button");
let output = document.querySelector("h1");

btnShow.addEventListener('click', () => {
    var d = new Date();
var mSec = d.getTime();
var min = mSec / (1000*60);

document.write("Current Time: " + d);
});
