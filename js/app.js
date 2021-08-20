// console.log('Project 1 Stratego');

// global
let pieceSelection = null;
let pieceToBeMoved = null;
let timesClicked = 0;
let turn = 'blue';
const bluePieces = document.querySelectorAll('.blue')
const redPieces = document.querySelectorAll('.red')
const blueWinsGame = ()=>{
  alert('Blue Wins!')
}
const redWinsGame = ()=>{
  alert('Red Wins!')
}
function losingRedPiece(redDead){
  let moveToContainer = document.querySelector('.pieces-container-p2')
      moveToContainer.appendChild(redDead)
}
function losingBluePiece(blueDead){
  let moveToComtainer1 = document.querySelector('.pieces-container-p1')
      moveToComtainer1.appendChild(blueDead)
}

// array of squares
const cells = ['1A', '1B', '1C', '1D', '1E', '1F', '1G', '1H', '1I', '1J', '2A', '2B', '2C', '2D', '2E', '2F','2G', '2H', '2I', '2J', '3A', '3B','3C', '3D', '3E', '3F', '3G', '3H', '3I', '3J', '4A', '4B', '4C', '4D','4E', '4F', '4G', '4H', '4I', '4J', '5A', '5B', '5E', '5F', '5I', '5J', '6A', '6B', '6E', '6F', '6I', '6J', '7A', '7B', '7C', '7D', '7E', '7F', '7G', '7H', '7I', '7J', '8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H', '8I', '8J', '9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I', '9J', '10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J']

const blueCells = ['1A', '1B', '1C', '1D', '1E', '1F', '1G', '1H', '1I', '1J', '2A', '2B', '2C', '2D', '2E', '2F','2G', '2H', '2I', '2J', '3A', '3B','3C', '3D', '3E', '3F', '3G', '3H', '3I', '3J', '4A', '4B', '4C', '4D','4E', '4F', '4G', '4H', '4I', '4J']

const redCells = ['7A', '7B', '7C', '7D', '7E', '7F', '7G', '7H', '7I', '7J', '8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H', '8I', '8J', '9A', '9B', '9C', '9D', '9E', '9F', '9G', '9H', '9I', '9J', '10A', '10B', '10C', '10D', '10E', '10F', '10G', '10H', '10I', '10J']

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
      if(timesClicked === 1 && event.target.getAttribute('class') === 'blue' && turn === 'blue' ||  timesClicked === 1 && event.target.getAttribute('class') === 'red' && turn === 'red'){
        pieceToBeMoved = event.target
      }else{
        if(pieceToBeMoved === null){
          timesClicked = 0;
          return;
        }
        let spaceBeingMovedTo = event.target
          if(spaceBeingMovedTo.parentElement.getAttribute('class') === 'square'){
            spaceBeingMovedTo = event.target.parentElement
          }
        spaceBeingMovedTo.append(pieceToBeMoved)
        timesClicked = 0;
        pieceToBeMoved = null;
        this.battleResults(spaceBeingMovedTo);
      }
    })
  },
  battleResults(space){
    if(space.children.length === 2){
        if(space.children[0].getAttribute('class') === 'blue' && space.children[0].getAttribute('value') < space.children[1].getAttribute('value')){
            console.log(space.children[1]);
            console.log('piece1');
            losingRedPiece(space.children[1])

        }else if(space.children[1].getAttribute('class') === 'blue' && space.children[1].getAttribute('value') < space.children[0].getAttribute('value')){
            losingRedPiece(space.children[0])

        }else if(space.children[0].getAttribute('class') === 'red' && space.children[0].getAttribute('value') < space.children[1].getAttribute('value')){
            losingBluePiece(space.children[1])

        }else if(space.children[1].getAttribute('class') === 'red' && space.children[1].getAttribute('value') < space.children[0].getAttribute('value')){
            losingBluePiece(space.children[0])

        }else if(space.children[0].getAttribute('class') === 'blue' && space.children[0].getAttribute('value') === space.children[1].getAttribute('value')){
            losingRedPiece(space.children[1])
            losingBluePiece(space.children[0])

        }else if(space.children[1].getAttribute('class') === 'blue' && space.children[1].getAttribute('value') === space.children[0].getAttribute('value')){
            losingBluePiece(space.children[1])
            losingRedPiece(space.children[0])
        }

        console.log('battle');
        }else if(space.children[0].getAttribute('#flag') && space.children[1].getAttribute('.red')){
          redWinsGame()
        }else if(space.children[0].getAttribute('#flagr') && space.children[1].getAttribute('.blue')){
          blueWinsGame()
        }
      }
}

// document.getElementById("5C").style.pointerEvents = "none";
// document.getElementById("5D").style.pointerEvents = "none";
// document.getElementById("5G").style.pointerEvents = "none";
// document.getElementById("5H").style.pointerEvents = "none";
// document.getElementById("6C").style.pointerEvents = "none";
// document.getElementById("6D").style.pointerEvents = "none";
// document.getElementById("6G").style.pointerEvents = "none";
// document.getElementById("6H").style.pointerEvents = "none";

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
        turns = 'blue'
        document.getElementById('place-piece-button').disable = true
        document.getElementById('start-button').disable = true
    })
let turns = document.getElementById('turn-button')
    turns.addEventListener('click', (event)=>{
      event.preventDefault()
      if(turn === 'blue'){
        turn = 'red'
      }else if(turn === 'red'){
        turn = 'blue'
      }
    })






//----------------- ALL CODE BELOW IS FOR FUTURE UPGRADES ------------------//


// array of objects (game pieces)
// const bluePieces = [{name: 'general', value:1}, {name:'colonel', value:2}, {name: 'major', value:3}, {name: 'captain', value:4}, {name: 'lieutenant', value:5}, {name: 'sergeant', value:6}, {name: 'corporal', value:7}, {name: 'mineSweeper', value:8}, {name: 'infantry', value:9}, {name: 'flag', value: 10}];
//
// const redPieces = [{name: 'general', value:1}, {name:'colonel', value:2}, {name: 'major', value:3}, {name: 'captain', value:4}, {name: 'lieutenant', value:5}, {name: 'sergeant', value:6}, {name: 'corporal', value:7}, {name: 'mineSweeper', value:8}, {name: 'infantry', value:9}, {name: 'flag', value: 10}];

// const pieceVs = {
//         general: {
//             general: "lose",
//             colonel: "win",
//             major: "win",
//             captain: "win",
//             lieutenant: "win",
//             sergeant: "win",
//             corporal: "win",
//             mineSweeper: "win",
//             infantry: "win",
//             bomb: "lose",
//             commando: "lose"
//         },
//         colonel: {
//           general: "lose",
//           colonel: "lose",
//           major: "win",
//           captain  : "win",
//           lieutenant: "win",
//           sergeant: "win",
//           corporal: "win",
//           mineSweeper: "win",
//           infantry: "win",
//           bomb: "lose",
//           commando: "win"
//         },
//         major: {
//           general: "lose",
//           colonel: "lose",
//           major: "lose",
//           captain: "win",
//           lieutenant: "win",
//           sergeant: "win",
//           corporal: "win",
//           mineSweeper: "win",
//           infantry: "win",
//           bomb: "lose",
//           commando: "win"
//         },
//         captain: {
//           general: "lose",
//           colonel: "lose",
//           major: "lose",
//           captain: "lose",
//           lieutenant: "win",
//           sergeant: "win",
//           corporal: "win",
//           mineSweeper: "win",
//           infantry: "win",
//           bomb: "lose",
//           commando: "win"
//         },
//         lieutenant: {
//           general: "lose",
//           colonel: "lose",
//           major: "lose",
//           captain: "lose",
//           lieutenant: "lose",
//           sergeant: "win",
//           corporal: "win",
//           mineSweeper: "win",
//           infantry: "win",
//           bomb: "lose",
//           commando: "win"
//         },
//         sergeant: {
//           general: "lose",
//           colonel: "lose",
//           major: "lose",
//           captain: "lose",
//           lieutenant: "lose",
//           sergeant: "lose",
//           corporal: "win",
//           mineSweeper: "win",
//           infantry: "win",
//           bomb: "lose",
//           commando: "win"
//         },
//         corporal: {
//           general: "lose",
//           colonel: "lose",
//           major: "lose",
//           captain: "lose",
//           lieutenant: "lose",
//           sergeant: "lose",
//           corporal: "lose",
//           mineSweeper: "win",
//           infantry: "win",
//           bomb: "lose",
//           commando: "win"
//         },
//         mineSweeper: {
//           general: "lose",
//           colonel: "lose",
//           major: "lose",
//           captain: "lose",
//           lieutenant: "lose",
//           sergeant: "lose",
//           corporal: "lose",
//           mineSweeper: "lose",
//           infantry: "win",
//           bomb: "win",
//           commando: "win"
//         },
//         infantry: {
//           general: "lose",
//           colonel: "lose",
//           major: "lose",
//           captain: "lose",
//           lieutenant: "lose",
//           sergeant: "lose",
//           corporal: "lose",
//           mineSweeper: "lose",
//           infantry: "lose",
//           bomb: "lose",
//           commando: "win"
//         },
//         bomb: {
//           general: "win",
//           colonel: "win",
//           major: "win",
//           captain: "win",
//           lieutenant: "win",
//           sergeant: "win",
//           corporal: "win",
//           mineSweeper: "lose",
//           infantry: "win",
//           commando: "win"
//         },
//         commando: {
//           general: "win",
//           colonel: "lose",
//           major: "lose",
//           captain: "lose",
//           lieutenant: "lose",
//           sergeant: "lose",
//           corporal: "lose",
//           mineSweeper: "lose",
//           infantry: "lose",
//           bomb: "lose",
//           commando: "lose"
//       }
//     }
//   }






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
