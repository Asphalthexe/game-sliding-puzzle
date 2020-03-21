////////////////////////////////////////////////////////
// implement zeit oder züge zähler
// close windoow für invisible div setzen
// implement win function + lose function maybe
// typewriter text when start




///////////////////////////////////////////////////////

// Slide Puzzle Game

window.onload = () => {
   document.getElementById('startPuzzle').onclick = () => {
      shuffle()
      checkWin();
   }
   // TIME COUNTER //
   let canvas = document.getElementById('canvas')
   let ctx = canvas.getContext('2d')

   let timeCounter = 0

   let draw = () => {
      timeCounter++

      ctx.font = '25pt monspace'
      ctx.fillStyle = 'green'
      ctx.fillText(`Your Time: ${timeCounter}`, 0, 50)
      if (checkWin() === false) {
         window.requestAnimationFrame(draw);
      } else {
         clearTimeout(timeCounter);
      }

      window.requestAnimationFrame(draw)
   }

   draw()
   // TIME COUNTER END //

   ////////////////////////
   // Set Random Background Image //
   let imgArray = [
      '../images/birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg',
      '../images/adrianna-geo-1rBg5YSi00c-unsplash.jpg',
      '../images/ayo-ogunseinde-Erstoy-MuVA-unsplash.jpg',
      '../images/brandon-vazquez-jdvpdAvDuB0-unsplash.jpg',
      '../images/kolya-korzh-RMVdKLMDGo0-unsplash.jpg',
      '../images/mehrad-vosoughi-1E5XakhWNOw-unsplash.jpg',
      '../images/orlova-maria-bU8TeXhsPcY-unsplash.jpg',
      '../images/photo-1509437142917-63dfe86dcbec.jpg',
      '../images/sharon-pittaway-N7FtpkC_P7o-unsplash.jpg',
      '../images/vista-wei-OiERUvVrioU-unsplash.jpg',
      '../images/yucel-moran-ff0WHlZi1HU-unsplash.jpg',
   ]

   let randomImg = imgArray[Math.floor(Math.random() * imgArray.length)];

   document.querySelector('.tile1, .tile2, .tile3, .tile4, .tile5, .tile6, .tile7, .tile8,.tile9').style.background = "randomImg";

   // Set Random Background Image END //

};


// Check row 3 + 2 + 1, if every tile is on the correct spot (cell)
let cell11 = document.getElementById("cell11")
let cell12 = document.getElementById("cell12")
let cell13 = document.getElementById("cell13")
let cell21 = document.getElementById("cell21")
let cell22 = document.getElementById("cell22")
let cell23 = document.getElementById("cell23")
let cell31 = document.getElementById("cell31")
let cell32 = document.getElementById("cell32")
let cell33 = document.getElementById("cell33")


let tile1 = document.getElementsByClassName(".tile1")
let tile2 = document.getElementsByClassName(".tile2")
let tile3 = document.getElementsByClassName(".tile3")
let tile4 = document.getElementsByClassName(".tile4")
let tile5 = document.getElementsByClassName(".tile5")
let tile6 = document.getElementsByClassName(".tile6")
let tile7 = document.getElementsByClassName(".tile7")
let tile8 = document.getElementsByClassName(".tile8")
let tile9 = document.getElementsByClassName(".tile9")


function checkWin() {

   // check which place each tile has (has the div id the correct class / tile)
   function correctPlace() {
      if (cell33.classList.contains("tile9") === true &&
         cell32.classList.contains("tile8") === true &&
         cell31.classList.contains("tile7") === true &&
         cell23.classList.contains("tile6") === true &&
         cell22.classList.contains("tile5") === true &&
         cell21.classList.contains("tile4") === true &&
         cell13.classList.contains("tile3") === true &&
         cell12.classList.contains("tile2") === true &&
         cell11.classList.contains("tile1") === true) {
         console.log("everything in spot")
         return true
      } else {
         return false;
         console.log("something is not in correct spot");
      }
   }

   // check if win or lose
   let check = setInterval(function () {
      if (correctPlace() === true) {
         alert("Won Game")
         console.log("Won Game")
         // set .popup to visible //
         document.getElementsByClassName('.popup').style.display = 'inherit';
         clearInterval(check)
      } else {
         console.log("not the correct place")
      }
   }, 80)

   }



/////////////// Swap tiles /////////////
   function swapTiles(cell1, cell2) {
      let temp = document.getElementById(cell1).className;
      document.getElementById(cell1).className = document.getElementById(cell2).className;
      document.getElementById(cell2).className = temp;
   }

   function shuffle() {
      // access each cell of the 3x3 grid
      // For each row of the 3x3 grid
      for (let row = 1; row <= 3; row++) {
         //For each column in this row
         for (let column = 1; column <= 3; column++) {
            // Pick a random row from 1 to 3
            let row2 = Math.floor(Math.random() * 3 + 1);
            // Pick a random column from 1 to 3
            let column2 = Math.floor(Math.random() * 3 + 1);
            // Swap both cells
            swapTiles("cell" + row + column, "cell" + row2 + column2);
         }
      }
   }

   function clickTile(row, column) {
      let cell = document.getElementById("cell" + row + column);
      let tile = cell.className;
      if (tile != "tile9") {
         // Check if empty tile on the right
         if (column < 3) {
            if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
               swapTiles("cell" + row + column, "cell" + row + (column + 1));
               return;
            }
         }
         // Check if empty tile on the left
         if (column > 1) {
            if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
               swapTiles("cell" + row + column, "cell" + row + (column - 1));
               return;
            }
         }
         // Check if empty tile is above
         if (row > 1) {
            if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
               swapTiles("cell" + row + column, "cell" + (row - 1) + column);
               return;
            }
         }
         // Check if empty tile is below
         if (row < 3) {
            if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
               swapTiles("cell" + row + column, "cell" + (row + 1) + column);
               return;
            }
         }
      }


   }


   ///////////////////////////////////////////////////////////////////////////