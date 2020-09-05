var squares = document.querySelectorAll(".square"); // gettin all squares
var numSquare = 6; // default on hard

var colors = generateRandomColors(numSquare); // assigning initial values to squares

var givenColor = colors[pickColor(numSquare)]; // assign a value from the squares
var titleColor = document.getElementById("rgbTitle"); // rgb color code that must be identified 
var gameStage = document.getElementById("gamePhase"); //middle span tag that appears after you click one of the squares
var newColors = document.getElementById('newColors'); // when player presses New Colors button
var easyBTN = document.getElementById("easyBTN");
var hardBTN = document.getElementById("hardBTN");
var winBackground = document.getElementById("mainBackground");

console.log(givenColor);
titleColor.textContent = givenColor; // make title match the searched color
assignColorsToSquares();//assigning color to our squares



easyBTN.addEventListener("click", function () {
    numSquare = 3;
    easyBTN.classList.add("difficultyMode");
    hardBTN.classList.remove("difficultyMode");
    // colors = generateRandomColors(numSquare);
    // assignColorsToSquares();
    // givenColor = colors[pickColor(numSquare)];
    // titleColor.textContent = givenColor; // make title match the searched color
    resetGame();
    squares[3].style.backgroundColor = "#232323";
    squares[4].style.backgroundColor = "#232323";
    squares[5].style.backgroundColor = "#232323";

});

hardBTN.addEventListener("click", function () {
    numSquare = 6;
    hardBTN.classList.add("difficultyMode");
    easyBTN.classList.remove("difficultyMode");
    // colors = generateRandomColors(numSquare);
    // assignColorsToSquares();
    // givenColor = colors[pickColor(numSquare)];
    // titleColor.textContent = givenColor; // make title match the searched color
    resetGame();
});


//hovering effects
easyBTN.addEventListener("mouseover", function(){
    easyBTN.classList.add("difficultyMode");
});
easyBTN.addEventListener("mouseout",function(){
    easyBTN.classList.remove("difficultyMode");
})
hardBTN.addEventListener("mouseover", function(){
    hardBTN.classList.add("difficultyMode");
});
hardBTN.addEventListener("mouseout",function(){
    hardBTN.classList.remove("difficultyMode");
});
newColors.addEventListener("mouseover", function(){
    newColors.classList.add("difficultyMode");
});
newColors.addEventListener("mouseout",function(){
    newColors.classList.remove("difficultyMode");
});




// checking if the user presses the right square
for (var i = 0; i < numSquare; i++) {
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === givenColor) {
            // alert("yes, you got it");
            for (var j = 0; j < numSquare; j++)
                squares[j].style.backgroundColor = this.style.backgroundColor;

            winBackground.style.backgroundColor = givenColor;
            gameStage.textContent = "Correct!"
            newColors.textContent="Play Again?"

        }

        else {
            // alert("no, thats not it");
            this.style.backgroundColor = "#232323";
            gameStage.textContent = "Try Again"
        }

    });
}

newColors.addEventListener("click", function () {

    resetGame();
})

function assignColorsToSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
}



function resetGame() {
    colors = generateRandomColors(numSquare);
    givenColor = colors[pickColor(numSquare)];
    assignColorsToSquares();
    titleColor.textContent = givenColor; // make title match the searched color
    gameStage.textContent = "";
    winBackground.style.backgroundColor = "steelblue";
    newColors.textContent="New Colors"
}



function pickColor(num) {
    return Math.floor(Math.random() * num);
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}

function generateRandomColors(num) {
    var colors = [];
    for (var i = 0; i < num; i++) {
        colors[i] = randomColor();
    }
    return colors;
}



