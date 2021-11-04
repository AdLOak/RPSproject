function play(userSel){
  var num = Math.floor(Math.random()*3);

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
          window.alert("Its a tie ");
        break;
        case 1:
          //paper
          window.alert("You lost");
        break;
        case 2:
        //scissors
          window.alert("You won");
        break;
        default:
      }
    break;
    case 'paper':
      // window.alert("paper selected");
      switch(num)
      {
        case 0:
          //rock
          window.alert("You won");
        break;
        case 1:
          //paper
          window.alert("It's a tie");
        break;
        case 2:
          //scissors
          window.alert("You Lost");
        break;
        default:
      }

    break;
    case 'scissors':
      // window.alert("scissors selected");
      switch(num)
      {
        case 0:
          //rock
          window.alert("You lost ");
        break;
        case 1:
          //paper
          window.alert("You won");
        break;
        case 2:
          //scissors
          window.alert("It's a tie");
        break;
        default:
      }
    break;
    default:

  }
  // window.alert(num);

}
