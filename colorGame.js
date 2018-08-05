var numSquares = 6;//so at top we have 3 variables that aren't selecting things 
var colors = []; //now we have reset function we can set it as an empty array at start
// var colors = generateRandomColors(numSquares); //we erase the hardcoded array to make a function that generate random colors
// var colors = [
//    "rgb(255, 0, 0)",
//    "rgb(255, 255, 0)",
//    "rgb(0, 255, 0)",
//    "rgb(0, 255, 255)",
//    "rgb(0, 0, 255)",
//    "rgb(255, 0, 255)"
// ]
var pickedColor; //now we have reset and init function we can set it as a varibale with no values 
// var pickedColor = pickColor();//colors[3]; //at first we're picking cyan but this would be random color of course 
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");//this gives us two buttons


init(); //at the very begining we run the init function

function init(){
   setupModeButtons();
   setupSquares();
   reset();
}

function setupModeButtons(){
	//mode button event listeners
	for(var i=0 ; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
	   modeButtons[0].classList.remove("selected");//since we have two items in our modeButtons list
	   modeButtons[1].classList.remove("selected");//what we are doing is removing the selected class from both
	   this.classList.add("selected");//then we are adding it to the one that we just clicked on
	   this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;//this is ternary operator
	    //the shorter way of doing this if statement called ternary operator
	    // if(this.textContent === "Easy") {
	    // 	numSquares = 3; 
	    // } else {
	    // 	numSquares = 6;
	    // }
	    reset();//our logic
	    //we need to figure out how many squares to show 
	    //pick new colors
	    //pick a new pickedColor from that colors
	    //update page to reflect changes 
	});
   } 
}

function setupSquares(){
	for(var i=0 ; i < squares.length ; i++){
	//add initial colors to squares
      // squares[i].style.background = colors[i]; we don't need it anymore
    //add click listeners to squares
      squares[i].addEventListener("click",function(){
    //grab color of clicked square 
      var clickedColor = this.style.background;
    //compare color to pickedColor
      if(clickedColor === pickedColor){
      	messageDisplay.textContent = "Correct!";
      	resetButton.textContent = "Play Again?";
      	changeColors(clickedColor);
      	h1.style.background = clickedColor;
      } else {
      	this.style.background = "#232323";
      	messageDisplay.textContent = "Try Again";
       }
    });  
   }
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random colour from the array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
	//change colours of the squares(reflect those six new colours on the page)
    for(var i=0 ; i<squares.length ; i++) { //we are looping through all the squares and we're updating their color 
       if(colors[i]){
       	 squares[i].style.display = "block";//that's how we bring the color back and reshow them
         squares[i].style.background = colors[i];//if there is a color to paint, change the color of squares
       } else {                        //otherwise hide it for us with .style.display = "none"
         squares[i].style.display = "none";    //this line of code will hide those botton three for us 
       } 
    	
    }
    h1.style.background = "steelblue";//then we're changing the background of h1 back to this blue 
}
// easyBtn.addEventListener("click", function(){
//    hardBtn.classList.remove("selected");	
//    easyBtn.classList.add("selected");
//    numSquares = 3;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for (var i = 0 ; i <squares.length ; i++){
//    	if(colors[i]){
//    		squares[i].style.background = colors[i]; 
//    	} else {
//    		squares[i].style.display = "none"; //now we're hiding the 3 bottoms
//    	}
//    }
// })

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");	
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0 ; i <squares.length ; i++){
//    		squares[i].style.background = colors[i]; 
//    		squares[i].style.display = "block"; //now we're exposed(visible) all of the bottoms
//    	}
//    });


resetButton.addEventListener("click",function(){
	reset();
	// //generate all new colours
	// colors = generateRandomColors(numSquares);
	// //pick a new random colour from the array
	// pickedColor = pickColor();
	// //change colorDisplay to match pickedColor
 //    colorDisplay.textContent = pickedColor;
 //    this.textContent = "New Colors";//we could also write resetButton instead of this but it's easier to do this 

 //    messageDisplay.textContent = "";
	// //change colours of the squares(reflect those six new colours on the page)
 //    for(var i=0 ; i<squares.length ; i++) {
 //    	squares[i].style.background = colors[i];
 //    }
 //    h1.style.background = "steelblue";
})

// colorDisplay.textContent = pickedColor; //now we can get rid of this line, because we are doing this inside of the init function which is calling reset



function changeColors(color){
	//loop through all the squares 
	for(var i=0 ; i<squares.length ; i++){
	//change each color to match given color
	squares[i].style.background = color;
    }
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
	//make an empty array
	var arr = [];
	//repeat num times, we need to loop through num times
	for(var i=0 ; i< num; i++){
	//get random color and push it into arr
	   arr.push(randomColor())	
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	//now we need to make this format "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
	//be careful about the spaces after comma ,
};