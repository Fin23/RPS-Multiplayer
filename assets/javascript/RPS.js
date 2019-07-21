// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgA1zRiYOmAhK9Fd3sJdaPgzK7HmJPGB4",
    authDomain: "rps-game-e23b7.firebaseapp.com",
    databaseURL: "https://rps-game-e23b7.firebaseio.com",
    projectId: "rps-game-e23b7",
    storageBucket: "rps-game-e23b7.appspot.com",
    messagingSenderId: "814550301760",
    appId: "1:814550301760:web:ea8e73feeb5ab4e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebaseConfig);
  var database = firebase.database();

  //end of fire base configuration and initialize


const userScore = 0;
const computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("Rock");
const paper_button = document.getElementById("Paper");
const scissors_button = document.getElementById("Scissors");
var turnCount = 0;
// var computerChoice = getComputerChoice();


var ref = database.ref('scores')
  var data = {
      rock: "Rock",
      paper: "Paper",
      scissors: "Scissors"
  }
  console.log(data);
  //ref.push(data);


//simple function to have an anrray looped through with each button click randomly
// function getComputerChoice(){

//     const choices = ['Rock', 'Paper', 'Scissors'];
//    const randomNumber = Math.floor(Math.random() * 3);
//    return choices [randomNumber];
// };
//console.log(getComputerChoice());
//end of simple function




function game (userChoise){

    turnCount++
    
    //  computerChoice = getComputerChoice();

     console.log(userChoise);
     console.log(turnCount);
    //  console.log(computerChoice);

    // console.log("Player 2 wins (currently computer)")
    // console.log("Players Tie good job you both suck");

}

//function main(){
  function rock1(){
      game("Rock");
      //console.log("hey you click rock")
      
      ref.push(data.rock);//this sends to fire base
      ref.push(turnCount);
      //ref.push(computerChoice);
  }
  function paper1(){
      game("Paper");
      //console.log("this be paper, dolla dolla bills y'all")
      ref.push(data.paper);//this sends to firebase
      ref.push(turnCount);
     // ref.push(computerChoice);
  }
  function scissors1(){
      game("Scissors");
      //console.log("scissors are dangerous dumb ass don't run with them")
      ref.push(data.scissors);//this sends to firebase
      ref.push(turnCount);
     // ref.push(computerChoice);
  }
//}
//main();