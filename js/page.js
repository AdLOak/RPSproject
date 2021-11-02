function play(userSel){
  var num = Math.floor(Math.random()*3);

  document.getElementById("result").innerHTML = num;
  if(num === 0)
  {
    //rock
    let computerChoice = 'rock';
    // window.alert(computerChoice);
    document.getElementById("o-img").innerHTML = computerChoice;
  }
  else if (num === 1)
  {
    //paper
    let computerChoice = 'paper';
    // window.alert(computerChoice);
    document.getElementById("o-img").innerHTML = computerChoice;

  }
  else
  {
    //scissors
    let computerChoice = 'scissors';
    // window.alert(computerChoice);
    document.getElementById("o-img").innerHTML = computerChoice;

  }
  switch (userSel) {
    case 'rock':
      // window.alert("rock selected");

    break;
    case 'paper':
      // window.alert("paper selected");
    break;
    case 'scissors':
      // window.alert("scissors selected");
    break;
    default:

  }
  // window.alert(num);

}
