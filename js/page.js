function play(userSel){
  var num = Math.floor(Math.random()*3);

  document.getElementById("result").innerHTML = num;
  if(num === 0)
  {
    //rock
    let computerChoice = 'rock';
    // window.alert(computerChoice);
    document.getElementById("o-img").innerHTML = computerChoice;
    // document.getElementById("o-img").src = "svg/rock.svg";

  }

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
      if(computerChoice === 'rock')
      {
          document.getElementById("result").innerHTML = "It's a Tie";
      }
      else if(computerChoice === 'paper')
      {
        document.getElementById("result").innerHTML = "You Lost";
      }
      else
      {
        document.getElementById("result").innerHTML = "You Won";
      }
    break;
    case 'paper':
      // window.alert("paper selected");
      if(computerChoice === 'rock')
      {
          document.getElementById("result").innerHTML = "You Won";
      }
      else if(computerChoice === 'paper')
      {
        document.getElementById("result").innerHTML = "It's a Tie";
      }
      else
      {
        document.getElementById("result").innerHTML = "You Lost";
      }
    break;
    case 'scissors':
      // window.alert("scissors selected");
      if(computerChoice === 'rock')
      {
          document.getElementById("result").innerHTML = "You Lost";
      }
      else if(computerChoice === 'paper')
      {
        document.getElementById("result").innerHTML = "You Won";
      }
      else
      {
        document.getElementById("result").innerHTML = "It's a Tie";
      }
    break;
    default:

  }
  // window.alert(num);

}
