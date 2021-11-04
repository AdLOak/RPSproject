function play(userSel){
  var num = Math.floor(Math.random()*3);

  let wins = sessionStorage.getItem("numWins");
  let ties = sessionStorage.getItem("numTies");
  let loses = sessionStorage.getItem("numLoses");

  document.getElementById("result").innerHTML = num;
  document.getElementById('o-img').src = "";
  if(num === 0)
  {
    //rock
    document.getElementById('o-img').src = "svg/rock.svg";
  }
  else if (num === 1)
  {
    //paper
    document.getElementById('o-img').src = "svg/paper.svg";
  }
  else
  {
    //scissors
    document.getElementById('o-img').src = "svg/scissors.svg";
  }

  // Start of result declarations
  switch (userSel) {
    case 'rock':
      // window.alert("rock selected"); //prints out user selection
      switch(num)
      {
        case 0:
          //rock
          // window.alert("Its a tie ");
          document.getElementById('result').innerHTML = "It's a tie!";
        break;
        case 1:
          //paper
          // window.alert("You lost");
          document.getElementById('result').innerHTML = "You lost!";
        break;
        case 2:
        //scissors
          // window.alert("You won");
          document.getElementById('result').innerHTML = "You won!";
        break;
        default:
          window.alert("Error has occurred")

      }
    break;
    case 'paper':
      // window.alert("paper selected");
      switch(num)
      {
        case 0:
          //rock
          // window.alert("You won");
          document.getElementById('result').innerHTML = "You won!";
        break;
        case 1:
          //paper
          // window.alert("It's a tie");
          document.getElementById('result').innerHTML = "It's a tie!";
        break;
        case 2:
          //scissors
          // window.alert("You Lost");
          document.getElementById('result').innerHTML = "You lost!";
        break;
        default:
          window.alert("Error has occurred")
      }

    break;
    case 'scissors':
      // window.alert("scissors selected");
      switch(num)
      {
        case 0:
          //rock
          // window.alert("You lost ");
          document.getElementById('result').innerHTML = "You lost";
        break;
        case 1:
          //paper
          // window.alert("You won");
          document.getElementById('result').innerHTML = "You won!";
        break;
        case 2:
          //scissors
          // window.alert("It's a tie");
          document.getElementById('result').innerHTML = "It's a tie!";
        break;
        default:
          window.alert("Error has occurred")

      }
    break;
    default:
      window.alert("Error has occurred")


  }
  // window.alert(num);

}
