const battleship = () => {
  let user1Name = prompt(`What is your name, User1?`)
  let user2Name = prompt(`What is your name, User2?`)

  const Player1 = {
    name: user1Name,
    shipcount: 4,
    gameBoard: [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    }

  const Player2 = {
    name: user2Name,
    shipcount: 4,
    gameBoard: [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    }
    
  let ship1 = 0; 
   do {
      let x = Math.floor(Math.random()*3)+0;
      let y = Math.floor(Math.random()*3)+0;
        if ( Player1.gameBoard[x][y] === 0){
          Player1.gameBoard[x][y] = 1;
          ship1++;
        } else {
          continue;
        }
      }
       while (ship1<4);
       
  let ship2 = 0;
    do{
      let x = Math.floor(Math.random()*3)+0;
      let y = Math.floor(Math.random()*3)+0;
        if ( Player2.gameBoard[x][y] === 0){
          Player2.gameBoard[x][y] = 1;
          ship2++;
        } else {
          continue;
        }
     }
      while(ship2<4);
    console.log (JSON.stringify(Player2.gameBoard));

    let CurrentUser = Player1;
    let message;
      while (true) {
        if (CurrentUser === Player1){
          let hitX = +prompt(`Chosee x coordinates to strike from 0 to 3, ${CurrentUser.name}`)
          let hitY = +prompt(`Choose y coordinate strike from 0 to 3', ${CurrentUser.name}`)
            if ( Player2.gameBoard[hitX][hitY] === 1 ) {
              Player2.gameBoard[hitX][hitY] = 0;
              Player2.shipcount -= 1;
              alert (`Hit!`)
              if (Player1.shipcount === 0) {
                alert(`You win! You've found all the ships, ${CurrentUser.name}`)
                break;
              }
            //} else if (Player2.shipcount === 0){
              //alert(`You win! You've found all the ships, ${CurrentUser.name}`)
              //break;       
            } else {
              alert(`You missed!`)
            }
            CurrentUser = Player2;
        }
        if (CurrentUser === Player2){
          let hitX = +prompt(`Chosee x coordinates to strike from 0 to 3, ${CurrentUser.name}`)
          let hitY = +prompt(`Chosee y coordinates to strike from 0 to 3, ${CurrentUser.name}`)
            if ( Player1.gameBoard[hitX][hitY] === 1 ) {
              Player1.gameBoard[hitX][hitY] = 0;
              Player1.shipcount -= 1;
              alert (`Hit!`)
              if (Player1.shipcount === 0) {
                alert(`You win! You've found all the ships, ${CurrentUser.name}`)
                break;
              } else {}
            } else {
              alert(`You missed!`)
            }
            CurrentUser = Player1;
        }

      }

  return (`The winner is ${CurrentUser.name}!`);
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult


