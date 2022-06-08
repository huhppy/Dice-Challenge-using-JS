//Variables and get random Number
var randomNumber1 = randomIntNumber1(1, 6);
var randomNumber2 = randomIntNumber2(1, 6);

//Function to initiate random number for player1, used min max to create a range of numbers 1 to 5. By default using Math.random also includes number 0.
function randomIntNumber1(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Function to initiate random number for player2, used min max to create a range of numbers 1 to 5. By default using Math.random also includes number 0.
function randomIntNumber2(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Function to call or initiate to change the dice image according to the random number generated above
function changeDiceImage(){
  var firstDice = document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
  var secondDice = document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

  if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
  }else if(randomNumber1 >= randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
  }else{
    document.querySelector("h1").innerHTML = "Player 2 wins";
  }
}

//Output by calling the function name
changeDiceImage();

//Logs for the backend source to check if I am getting the right random number that is being applied on the dice images.
console.log(randomNumber1+" " +randomNumber2);
console.log("Player 1: " +randomNumber1 +" || Player 2: " +randomNumber2);
