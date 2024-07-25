let computerchoice ;
let userchoice = "Thinking........";
let resultmsg;
let score = {
    win : 0 ,
    loss : 0 ,
    tie : 0 ,
}
function computer_choising() {
  let randomnumber = Math.random() * 3;
  if (randomnumber > 0 && randomnumber <= 1) {
    computerchoice = "Bat";
  } else if (randomnumber > 1 && randomnumber <= 2) {
    computerchoice = "Ball";
  } else {
    computerchoice = "Stump";
  }
}
function result() {
  if (userchoice == "Bat" && computerchoice == "Bat") {
    score.tie++
    resultmsg = "it is a tie";
  } else if (userchoice == "Bat" && computerchoice == "Ball") {
    score.win++
    resultmsg = "you win";
  } else if (userchoice == "Bat" && computerchoice == "Stump") {
    score.loss++
    resultmsg = "you loss";
  } else if (userchoice == "Ball" && computerchoice == "Ball") {
    score.tie++
    resultmsg = "it is a tie";
  } else if (userchoice == "Ball" && computerchoice == "Bat") {
    score.loss++
    resultmsg = "you loss";
  } else if (userchoice == "Ball" && computerchoice == "Stump") {
    score.win++
    resultmsg = "you win";
  } else if (userchoice == "Stump" && computerchoice == "Stump") {
    score.tie++
    resultmsg = "it is a tie";
  } else if (userchoice == "Stump" && computerchoice == "Bat") {
    score.loss++
    resultmsg = "you loss";
  } else if (userchoice == "Stump" && computerchoice == "Ball") {
    score.win++
    resultmsg = "you win";
  }
}
document.querySelector("#user").innerText = `your choice = ${userchoice}`;
document.querySelector("#computer").innerText = `computer choice = ${computerchoice}`;
document.querySelector("#result").innerText = `result = ${resultmsg}`;
document.querySelector("#score").innerText = `Total win =${score.win}
Total loss =${score.loss} 
Total tie =${score.tie}`;
function handle_first_button(){
    computer_choising();
    userchoice='Bat';
    result();
    document.querySelector('#user').innerText = `your choice = ${userchoice}`; 
    document.querySelector('#computer').innerText = `computer choice = ${computerchoice}`; 
    document.querySelector('#result').innerText = `result = ${resultmsg}`;
    document.querySelector("#score").innerText = `Total win =${score.win}
Total loss =${score.loss} 
Total tie =${score.tie}`;
}
function handle_second_button(){
    computer_choising(); 
    userchoice='Ball';
    result(); 
    document.querySelector('#user').innerText = `your choice = ${userchoice}`;
    document.querySelector('#computer').innerText = `computer choice = ${computerchoice}`; 
    document.querySelector('#result').innerText = `result = ${resultmsg}`;
    document.querySelector("#score").innerText = `Total win =${score.win}
Total loss =${score.loss} 
Total tie =${score.tie}`;
}
function handle_third_button(){
    computer_choising(); 
    userchoice='Stump';
    result(); 
    document.querySelector('#user').innerText = `your choice = ${userchoice}`;
    document.querySelector('#computer').innerText = `computer choice = ${computerchoice}`; 
    document.querySelector('#result').innerText = `result = ${resultmsg}`;
    document.querySelector("#score").innerText = `Total win =${score.win}
Total loss =${score.loss} 
Total tie =${score.tie}`;
}