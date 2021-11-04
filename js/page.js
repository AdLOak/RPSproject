function play(userSel){
  var num = Math.floor(Math.random()*3);

  document.getElementById("result").innerHTML = num;
  if(num === 0)
  {
    //rock
  }
  else if (num === 1)
  {
    //paper
  }
  else
  {
    //scissors
  }
  switch (userSel) {
    case 'rock':
      {
        // document.getElementById("result").innerHTML = "You Won";
      }
    break;
    case 'paper':
      // window.alert("paper selected");
      {
      }
    break;
    case 'scissors':
      // window.alert("scissors selected");
      {
        // document.getElementById("result").innerHTML = "It's a Tie";
      }
    break;
    default:

  }
  // window.alert(num);

}
