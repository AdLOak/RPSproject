function play(userSel){
  var num = Math.floor(Math.random()*3);

  let wins = sessionStorage.getItem("numWins");
  let ties = sessionStorage.getItem("numTies");
  let loses = sessionStorage.getItem("numLoses");

  if (wins == null)
  {
    //"if wins is empty"
    wins = 0;
  }
  else
  {
    wins = wins;
  };

  if(ties == null)
  {
    //"if ties is empty"
    ties = 0;
  }
  else {
    ties = ties;
  };

  if(loses == null)
  {
    //"if loses are empty"
    loses = 0;
  }
  else
  {
    loses = loses;
  }

  document.getElementById("turn").innerHTML = "Opponent's Turn"
  document.getElementById("result").innerHTML = '...'; //prints out statement as result is being generated
  document.getElementById('o-img').src = "svg/mystery.svg"; //resets svg source to mystery.svg

  setTimeout(() => {
    //Edits the images for the opponents choice
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
            ++ties;
            resetTurn();
          break;
          case 1:
            //paper
            // window.alert("You lost");
            document.getElementById('result').innerHTML = "You lost!";
            ++loses;
            resetTurn();
          break;
          case 2:
            //scissors
            // window.alert("You won");
            document.getElementById('result').innerHTML = "You won!";
            ++wins;
            resetTurn();
          break;
          default:
            window.alert("Error has occurred");
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
            ++wins;
            resetTurn();
          break;
          case 1:
            //paper
            // window.alert("It's a tie");
            document.getElementById('result').innerHTML = "It's a tie!";
            ++ties;
            resetTurn();
          break;
          case 2:
            //scissors
            // window.alert("You Lost");
            document.getElementById('result').innerHTML = "You lost!";
            ++loses;
            resetTurn();
          break;
          default:
            window.alert("Error has occurred");
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
            ++loses;
            resetTurn();
          break;
          case 1:
            //paper
            // window.alert("You won");
            document.getElementById('result').innerHTML = "You won!";
            ++wins;
            resetTurn();
          break;
          case 2:
            //scissors
            // window.alert("It's a tie");
            document.getElementById('result').innerHTML = "It's a tie!";
            ++ties;
            resetTurn();
          break;
          default:
            window.alert("Error has occurred");

        }
      break;
      default:
        window.alert("Error has occurred");
    }

    // window.alert(num);
    sessionStorage.setItem("numWins", wins);
    sessionStorage.setItem("numTies", ties);
    sessionStorage.setItem("numLoses", loses);

    document.getElementById('numWon').innerHTML = sessionStorage.getItem("numWins");
    document.getElementById('numTied').innerHTML = sessionStorage.getItem("numTies");
    document.getElementById("numLost").innerHTML = sessionStorage.getItem("numLoses");
  }, 1000);

}

function resetTurn()
{
      document.getElementById('turn').innerHTML = "Your Turn";
}
function resetScore()
{
    sessionStorage.setItem("numWins", 0);
    sessionStorage.setItem("numTies", 0);
    sessionStorage.setItem("numLoses", 0);

    document.getElementById('numWon').innerHTML = sessionStorage.getItem("numWins");
    document.getElementById('numTied').innerHTML = sessionStorage.getItem("numTies");
    document.getElementById('numLost').innerHTML = sessionStorage.getItem("numLoses");
    document.getElementById('result').innerHTML = "Result";
    document.getElementById('o-img').src = "svg/mystery.svg";
    document.getElementById('turn').innerHTML = "Your Turn";
}
