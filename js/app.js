// console.log('Project 1 Stratego');

// global
let pieceSelection = null;
let pieceToBeMoved = null;
let timesClicked = 0;

// const player1 = bluePieces[]
// const player2 = redPieces[]


// array of objects
const bluePieces = [{name: 'general', value:1}, {name:'colonel', value:2}, {name: 'major', value:3}, {name: 'captain', value:4}, {name: 'lieutenant', value:5}, {name: 'sergeant', value:6}, {name: 'corporal', value:7}, {name: 'mineSweeper', value:8}, {name: 'infantry', value:9}, {name: 'flag', value: null}];

const redPieces = [{name: 'general', value:1}, {name:'colonel', value:2}, {name: 'major', value:3}, {name: 'captain', value:4}, {name: 'lieutenant', value:5}, {name: 'sergeant', value:6}, {name: 'corporal', value:7}, {name: 'mineSweeper', value:8}, {name: 'infantry', value:9}, {name: 'flag', value: null}];

const cells = ['1A', '1B', '1C', '1D', '1E', '1F', '1G', '1H', '1I', '1J', '2A', '2B', '2C', '2D', '2E', '2F','2G', '2H', '2I', '2J', '3A', '3B','3C', '3D', '3E', '3F', '3G', '3H', '3I', '3J', '4A', '4B', '4C', '4D','4E', '4F', '4G', '4H', '4I', '4J', '5A', '5B', '5E', '5F', '5I', '5J', '6A', '6B', '6E', '6F', '6I', '6J', '7A', '7B', '7C', '7D', '7E', '7F', '7G', '7H', '7I', '7J', '8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H', '8I', '8J', '9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I', '9J', '10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J']

const blueCells = ['1A', '1B', '1C', '1D', '1E', '1F', '1G', '1H', '1I', '1J', '2A', '2B', '2C', '2D', '2E', '2F','2G', '2H', '2I', '2J', '3A', '3B','3C', '3D', '3E', '3F', '3G', '3H', '3I', '3J', '4A', '4B', '4C', '4D','4E', '4F', '4G', '4H', '4I', '4J']

const redCells = ['7A', '7B', '7C', '7D', '7E', '7F', '7G', '7H', '7I', '7J', '8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H', '8I', '8J', '9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I', '9J', '10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J']

// const winGame = ()=>{
//   alert: 'Congratulations you have won!'
// }
//
// const loseGame = ()=>{
//   alert: 'You have been defeated!'
// }

// const setUp() = []
// (function place(){
//   for(i=0; i<blue)
// })
//
// const player1 = {
//   blue
// }
// const player2 = {
//   red
// }


// game logic
const game = {
  placePieces(){
    document.querySelector('#board-container').addEventListener('click', (event)=>{
      if(pieceSelection && event.target.getAttribute('class') === 'square'){
        if(pieceSelection.getAttribute('class') === 'blue' && blueCells.includes(event.target.getAttribute('id'))){
          event.target.append(pieceSelection)
          pieceSelection = null;
        }else if(pieceSelection.getAttribute('class') === 'red' && redCells.includes(event.target.getAttribute('id'))){
          event.target.append(pieceSelection)
          pieceSelection = null;
        }
      }
    })
    document.querySelector('.pieces-container-p1').addEventListener('click', (event)=>{
      if(event.target.getAttribute('class') === 'blue'){
        pieceSelection = event.target
      }
    })
    document.querySelector('.pieces-container-p2').addEventListener('click', (event)=>{
      if(event.target.getAttribute('class') === 'red'){
        pieceSelection = event.target
      }
    })
  },
  gameMovement(){
  document.querySelector('#board-container').addEventListener('click', (event)=>{
    timesClicked++
    console.log(timesClicked);
    if(timesClicked === 1 && event.target.getAttribute('class') === 'blue' ||  timesClicked === 1 && event.target.getAttribute('class') === 'red'){
      pieceToBeMoved = event.target
    }else{
      const spaceBeingMovedTo = event.target
      console.log(pieceToBeMoved);
      spaceBeingMovedTo.append(pieceToBeMoved)
      timesClicked = 0;
      pieceToBeMoved = null;
    }
  })
}


//   getPiece(){
//     console.log('getPiece');
//     // console.log(document.querySelectorAll('.square'));
//     document.querySelector('#board-container').addEventListener('click', (event)=>{
//       console.log(event.target.getAttribute('class'));
//       const pieceToBeMoved = event.target
//       if(event.target.getAttribute('class') === 'square')
//       console.log('passed if');
//       console.log(pieceToBeMoved);
//       game.movePieces(pieceToBeMoved)
//   })
// },
//   movePieces(movePiece) {
//     document.querySelector('#board-container').removeEventListener('click', ()=>{
//       console.log('remv event');
//     })
//     console.log('test');
//     console.log(movePiece);
//     document.querySelector('#board-container').addEventListener('click', (event)=>{
//       console.log(event);
//       const spaceBeingMovedTo = event.target
//       if(event.target.getAttribute('class') === 'blue'){
//         spaceBeingMovedTo.append(movePiece)
//         console.log(movePiece);
//         movePiece = null
//       }
//     })
//   },
}



const pieceVs = {
        general: {
            general: "lose",
            colonel: "win",
            major: "win",
            captain: "win",
            lieutenant: "win",
            sergeant: "win",
            corporal: "win",
            mineSweeper: "win",
            infantry: "win",
            // bomb: "lose",
            // commando: "lose"
        },
        colonel: {
          general: "lose",
          colonel: "lose",
          major: "win",
          captain  : "win",
          lieutenant: "win",
          sergeant: "win",
          corporal: "win",
          mineSweeper: "win",
          infantry: "win",
          // bomb: "lose",
          // commando: "win"
        },
        major: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "win",
          lieutenant: "win",
          sergeant: "win",
          corporal: "win",
          mineSweeper: "win",
          infantry: "win",
          // bomb: "lose",
          // commando: "win"
        },
        captain: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "win",
          sergeant: "win",
          corporal: "win",
          mineSweeper: "win",
          infantry: "win",
          // bomb: "lose",
          // commando: "win"
        },
        lieutenant: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "lose",
          sergeant: "win",
          corporal: "win",
          mineSweeper: "win",
          infantry: "win",
          // bomb: "lose",
          // commando: "win"
        },
        sergeant: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "lose",
          sergeant: "lose",
          corporal: "win",
          mineSweeper: "win",
          infantry: "win",
          // bomb: "lose",
          // commando: "win"
        },
        corporal: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "lose",
          sergeant: "lose",
          corporal: "lose",
          mineSweeper: "win",
          infantry: "win",
          // bomb: "lose",
          // commando: "win"
        },
        mineSweeper: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "lose",
          sergeant: "lose",
          corporal: "lose",
          mineSweeper: "lose",
          infantry: "win",
          // bomb: "win",
          // commando: "win"
        },
        infantry: {
          general: "lose",
          colonel: "lose",
          major: "lose",
          captain: "lose",
          lieutenant: "lose",
          sergeant: "lose",
          corporal: "lose",
          mineSweeper: "lose",
          infantry: "lose",
          // bomb: "lose",
          // commando: "win"
        },
      //   bomb: {
      //     general: "win",
      //     colonel: "win",
      //     major: "win",
      //     captain: "win",
      //     lieutenant: "win",
      //     sergeant: "win",
      //     corporal: "win",
      //     mineSweeper: "lose",
      //     infantry: "win",
      //     commando: "win"
      //   },
      //   commando: {
      //     general: "win",
      //     colonel: "lose",
      //     major: "lose",
      //     captain: "lose",
      //     lieutenant: "lose",
      //     sergeant: "lose",
      //     corporal: "lose",
      //     mineSweeper: "lose",
      //     infantry: "lose",
      //     bomb: "lose",
      //     commando: "lose"
      // }
    // }
  }

// let moveResults = ''
//   if(pieceVs[player1Move][player2Move] === "win"){
//
//     // moveResults = // "lose" piece goes into game-play-container
//                   // "win" piece occupies the spot its currently in
//                   // OR
//                   // "win" piece occupies the spot its moving to
//   }
//   else if(pieceVs[player1Move][player2Move] === "lose"){
//     // moveResults = // move piece to game-play-container
//    }
// }
// pieceVs(player1Move, player2Move)

document.getElementById("5C").style.pointerEvents = "none";
document.getElementById("5D").style.pointerEvents = "none";
document.getElementById("5G").style.pointerEvents = "none";
document.getElementById("5H").style.pointerEvents = "none";
document.getElementById("6C").style.pointerEvents = "none";
document.getElementById("6D").style.pointerEvents = "none";
document.getElementById("6G").style.pointerEvents = "none";
document.getElementById("6H").style.pointerEvents = "none";

// event listeners
let form = document.getElementById('place-piece-button')
    form.addEventListener('click', (event)=>{
        event.preventDefault()
        game.placePieces()
    })
let form2 = document.getElementById('start-button')
    form2.addEventListener('click', (event)=>{
        event.preventDefault()
        game.gameMovement()
        document.getElementById('place-piece-button').disable = true
        document.getElementById('start-button').disable = true
    })






// make pieces move after start button clicked
// make pieces win/lose when they touch
// when piece "lose" move to its piece container




















    // an indicator for which piece is currently selected
    // function selectPiece(){
    //   if(currentPiece === '' && $(evt.currentTarget).css('border') === '1px solid black'){
    // 		$(evt.currentTarget).css('border', '4px solid green')
    // 		currentPiece = evt.currentTarget;
    //     // and indicating when it is no longer selected
    //   }else if ($(evt.currentTarget).css('border') === '4px solid green'){
    // 		$(evt.currentTarget).css('border', '1px solid black')
    // 		currentPiece = '';
    // 	}
    // }

    // function shows the instructions for the game, or hides them
    // function showInstructions() {
    // 	if (instructions.css('display') === 'none'){
    // 		instructions.css('display', 'flex');
    // 		about.css('display', 'block');
    // 	} else {
    // 		instructions.css('display', 'none');
    // 		about.css('display', 'none');
    // 	}
    //
    // }
