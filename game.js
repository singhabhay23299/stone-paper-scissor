let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const msg=document.querySelector(".msg-container");
const userScore=document.querySelector("#user-score")
const compScore=document.querySelector("#comp-score")


//you won😊you lose🥲


const shoWinner = (userWin,user,computer) => {
  if (userWin) {
    userscore++
    userScore.innerText=userscore;
    msg.innerHTML= `you won 😊 your ${user} beats ${computer}`
    msg.style.backgroundColor="blue"
    console.log("you won")
  }
  else {
    compscore++
    compScore.innerText=compscore;
    console.log("you lose")
    msg.innerHTML= `you lost🥲 ${computer} beats your ${user}`
    msg.style.backgroundColor="red"
  }

}

//agar game draw ho tab 
const drawGame = () => {
  msg.innerHTML="game draw !"
  console.log("the game was draw");
}

//computer ki choice ban rahi hai
const compChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random];

}
//user apni choice choose karrah hai
const playGame = (user) => {
  console.log("user's choice is ", user);
  const computer = compChoice();
  console.log("computer's choice is", computer);


  if (user === computer) {
    drawGame();
  }
  else {
    let userWin = true;
    if (user === "rock") {
      //scissor,paper
      userWin = computer === "paper" ? false : true;
    }
    else if (user === "paper") {
      userWin = computer === "scissors" ? false : true;
    }
    else {
      userWin = computer === "rock" ? false : true;
    }
    shoWinner(userWin,user,computer);

  }


}









choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const user = choice.getAttribute("id");
    playGame(user);
  });
});



