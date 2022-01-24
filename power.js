let users_Name = prompt("Enter Your Name :");
let user = document.getElementById("user-name");
let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let game_cont = document.getElementById("game-cont");
let result_div = document.getElementById("result-div");
let winning_status = document.getElementById("winning-status");
let rival_choice = document.getElementById("rival-choice");
let admin_choice = document.getElementById("admin-picked");
let score_reflector = document.getElementById("score");
let play_btn = document.getElementById("play-btn");
let pc_score = document.getElementById("pc-score");
let rule_btn = document.getElementById("rule");
let audioElement = new Audio('./sound/click.mp3');

let win_counter = 0;
let pc_win_counter = 0;
user.innerText = users_Name +" Picked";

function randomChoice() {
    min = 1;
    max = 3;
    val = Math.floor((Math.random() * max)) + 1;
    return val;
}
play_btn.addEventListener("click", function () {
    game_cont.style.display = "block";
    result_div.style.display = "none";
   
});

function stoneFunction(val) {
    audioElement.play();
    console.log("i am stone " + val);
    game_cont.style.display = "none";
    result_div.style.display = "flex";
    let pc_Choice = 0;
    pc_Choice = randomChoice();
    if (pc_Choice == 1 && val == 1) {
        rival_choice.src = "./images/stone.png";
        console.log("tie")
        admin_choice.src = "./images/stone.png";
        winning_status.innerText = "Tie";
    }
    else if (pc_Choice == 2 && val == 1) {
        rival_choice.src = "./images/paper.png";
        admin_choice.src = "./images/stone.png";
        winning_status.innerText = "Pc Won !";
        pc_win_counter++;
        pc_score.innerText = pc_win_counter;
    }
    else {
        rival_choice.src = "./images/scissors.png";
        admin_choice.src = "./images/stone.png";
        winning_status.innerText = "You Won !";
        win_counter++;
        score_reflector.innerText = win_counter;
    }

}


function paperFunction(val) {
    audioElement.play();

    console.log("i am paper " + val);
    game_cont.style.display = "none";
    result_div.style.display = "flex";
    let pc_Choice = 0;
    pc_Choice = randomChoice();
    if (pc_Choice == 1 && val == 2) {
        rival_choice.src = "./images/stone.png";
        console.log("tie")
        admin_choice.src = "./images/paper.png";
        winning_status.innerText = "You Won !";
        win_counter++;
        score_reflector.innerText = win_counter;
    }
    else if (pc_Choice == 2 && val == 2) {
        rival_choice.src = "./images/paper.png";
        admin_choice.src = "./images/paper.png";
        winning_status.innerText = "Tie";
    }
    else {
        rival_choice.src = "./images/scissors.png";
        admin_choice.src = "./images/paper.png";
        winning_status.innerText = "Pc Won !";
        pc_win_counter++;
        pc_score.innerText = pc_win_counter;
    }

}


function scissorsFunction(val) {
    audioElement.play();

    console.log("i am scissor " + val);
    game_cont.style.display = "none";
    result_div.style.display = "flex";
    let pc_Choice = 0;
    pc_Choice = randomChoice();
    if (pc_Choice == 1 && val == 3) {
        rival_choice.src = "./images/stone.png";
        console.log("tie")
        admin_choice.src = "./images/scissors.png";
        winning_status.innerText = " Pc Won !";
        pc_win_counter++;
        pc_score.innerText = pc_win_counter;
    }
    else if (pc_Choice == 2 && val == 3) {
        rival_choice.src = "./images/paper.png";
        admin_choice.src = "./images/scissors.png";
        winning_status.innerText = "You Won !";
        win_counter++;
        score_reflector.innerText = win_counter;
    }
    else {
        rival_choice.src = "./images/scissors.png";
        admin_choice.src = "./images/scissors.png";
        winning_status.innerText = "Tie";
    }


}

function ruleShow(){
    if(rule_btn.style.display== "block"){
        rule_btn.style.display = "none";
    }else{
        rule_btn.style.display = "block";
    }
}

body.addEventListener("click",function(){
    rule_btn.style.display = "none";
})