let userScore=0;
let compScore=0;

// choice access

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

// computer choice
const genCompChoice=()=>{
    // rock,paper,scissor
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame=()=>{
    // console.log("game was draw");
    msg.innerText="Game was Draw. Play again";
    msg.style.backgroundColor="#081b31";
    
};
// show winner

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        // console.log("you win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

        
    }
    else{
        // console.log("you lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }

};



const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    // Generate computer choice
    const compChoice= genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice==compChoice){
        // Draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            //scissors,paper
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
           userWin= compChoice=="scissors"?false:true;
        }
        else{
            // rock,paper
           userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    }
    
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
        
    });

    
});

