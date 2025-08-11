let choices = document.querySelectorAll(".choice");
let images = document.querySelectorAll("img");
let msg = document.querySelector(".msg");
let userScorep = document.querySelector("#your-score");
let computerScorep = document.querySelector("#computer-score");
let detailMsg = document.querySelector(".detail-msg");
userScore = 0;
computerScore = 0;


choices.forEach((choice) => {
     choice.addEventListener("click", () => {
      let userChoice =  choice.getAttribute("id");
      console.log(`user choice is ${userChoice}`);
      let computerArray = ["rock", "paper" , "scissor"];
      let arrayInd = Math.floor(Math.random() * 3);
      let computerChoice = computerArray[arrayInd];
      console.log(`computer choice is ${computerChoice}`);
      if(userChoice === computerChoice){
        detailMsg.innerText="both are same";
        msg.innerText = "Match is Draw";   
      }
      else if(userChoice === "rock" && computerChoice === "paper"){
       detailMsg.innerText="computer paper covers the user rock";
        msg.innerText= "computer wins";
        computerScore++;
        computerScorep.innerText = computerScore;
      }
      else if(userChoice === "rock" && computerChoice === "scissor"){
        detailMsg.innerText="user rock break the computer scissor";
        msg.innerText = "user wins";
        userScore++;
        userScorep.innerText = userScore;

      }else if(userChoice === "paper" && computerChoice === "rock"){
        detailMsg.innerText="user paper covers the computer rock";
         msg.innerText= "user wins";
         userScore++;
        userScorep.innerText = userScore;
        
      }else if(userChoice==="paper" && computerChoice==="scissor"){
        detailMsg.innerText="computer scissor cuts the user paper";
        msg.innerText= "computer wins";
         computerScore++;
        computerScorep.innerText = computerScore;

      }else if(userChoice === "scissor" && computerChoice === "rock"){
        detailMsg.innerText="computer rock break the user scissor";
         msg.innerText= "computer wins";
          computerScore++;
        computerScorep.innerText = computerScore;

      }else if(userChoice === "scissor" && computerChoice === "paper"){
        detailMsg.innerText="user scissor cut the computer paper";
        msg.innerText= "user wins";
        userScore++;
        userScorep.innerText = userScore;
      }


     });
});

