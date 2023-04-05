//randomizer
var luzon = parseInt(Math.random()*21);
var visayas = parseInt(Math.random()*21);
var mindanao = parseInt(Math.random()*21);

document.getElementById("luzon").innerHTML = luzon;
document.getElementById("visayas").innerHTML = visayas;
document.getElementById("mindanao").innerHTML = mindanao;

//first item
if (luzon > visayas && luzon > mindanao) {
    document.getElementById("largestnum").innerHTML = "The place with most number of successful match is Luzon! (" + luzon + ")";
}

if (visayas > luzon && visayas > mindanao) {
    document.getElementById("largestnum").innerHTML = "The place with most number of successful match is Visayas! (" + visayas + ")";
}

if (mindanao > visayas && mindanao > luzon) {
    document.getElementById("largestnum").innerHTML = "The place with most number of successful match is Mindanao! (" + mindanao + ")";
}

if (luzon > visayas && luzon == mindanao) {
    document.getElementById("largestnum").innerHTML = "The place with most number of successful match is Luzon and Mindanao! (" + luzon + ")";
}

if (visayas > luzon && visayas == mindanao) {
    document.getElementById("largestnum").innerHTML = "The place with most number of successful match is Mindanao and Visayas! (" + mindanao + ")";
}

if (visayas > mindanao && visayas == luzon) {
    document.getElementById("largestnum").innerHTML = "The place with most number of successful match is Visayas and Luzon! (" + visayas + ")";
}

var alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("letter").innerHTML = "The person whom I struck with my arrows unsuccessfully is " + alphabet.charAt(luzon) + " (Im so sorry TT~TT)";
document.getElementById("time").innerHTML += "Time it takes for their love to develop is (" + (visayas*mindanao) + " mins): " + Math.floor(visayas*mindanao/60) + "hr "+ (visayas*mindanao%60) + "min.";