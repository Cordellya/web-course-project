var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDice1 = "images/dice" + randomNumber1 + ".png";
var randomDice2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDice1);
image2.setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 win";
} else if (randomDice1 == randomDice2) {
    document.querySelector("h1").innerHTML = "Draw";
} else {
    document.querySelector("h1").innerHTML = "Player 2 win";
}