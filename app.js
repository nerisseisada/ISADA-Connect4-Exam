//Initialization
var pRed = "Red";
var pblack = "Black";
var pCurrent = pRed;

c_c0 = 0
c_c1 = 0
c_c2 = 0
c_c3 = 0
c_c4 = 0
c_c5 = 0
c_c6 = 0


document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {

        count = eval(`c_${e.id}`)
        eval(`c_${e.id}++`)

        if (count <= 6 && pCurrent == pRed) {
            document.getElementById(`${e.id}-${count}`).style.backgroundColor = "red"
            
            pCurrent = pblack;
            turn = document.getElementById("turn");
            turn.textContent = "Black's Turn";

            checkWinner('red')
        }
        
        else {
            document.getElementById(`${e.id}-${count}`).style.backgroundColor = "black"
            
            pCurrent = pRed;
            turn = document.getElementById("turn");
            turn.textContent = "Red's Turn";

            checkWinner('black')
        }
       

    })
})



function checkWinner(player) {
  
    // Horizontal
    for (i = 0; i <= 6; i++) {
            for (j = 0; j <= 4; j++) {
                if (document.getElementById(`c${i}-${j}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${i}-${j + 1}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${i}-${j + 2}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${i}-${j + 3}`).style.backgroundColor == `${player}` &&
                document.getElementById(`c${i}-${j + 4}`).style.backgroundColor == `${player}`) 
                {
                    finalWinner(player);
                    return;
                }

            }
        }


    // Vertical
        for (i = 0; i <= 5; i++) {
            for (j = 0; j <= 4; j++) {
                if (document.getElementById(`c${j}-${i}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${j + 1}-${i}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${j + 2}-${i}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${j + 3}-${i}`).style.backgroundColor == `${player}` &&
                   document.getElementById(`c${j + 4}-${i}`).style.backgroundColor == `${player}`) 
                {
                    finalWinner(player);
                    return;
                }

            }

        }
    
    // Right Diagonal
        for (i = 0; i <= 3; i++) {
            for (j = 0; j <= 3; j++) {
                if (document.getElementById(`c${i}-${j}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${i + 1}-${j + 1}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${i + 2}-${j + 2}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${i + 3}-${j + 3}`).style.backgroundColor == `${player}` &&
                   document.getElementById(`c${i + 4}-${j + 4}`).style.backgroundColor == `${player}`) 
                {
                    finalWinner(player);
                    return;
                }

            }
        }

    // Left Diagonal
        for (i = 0; i <= 3; i++) {
            for (j = 5; j >= 4; j--) {
                if (document.getElementById(`c${i}-${j}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${i + 1}-${j - 1}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${i + 2}-${j - 2}`).style.backgroundColor == `${player}` && 
                document.getElementById(`c${i + 3}-${j - 3}`).style.backgroundColor == `${player}` &&
                   document.getElementById(`c${i + 4}-${j - 4}`).style.backgroundColor == `${player}`) 
                {
                    finalWinner(player);
                    return;
                }

            }
        }


}

function finalWinner(player) {
    let winner = document.getElementById("turn");
    if (player == 'red') {
        winner.innerText = "Red Wins";    
        location.reload()    
    } else if (player == 'black'){
        winner.innerText = "Black Wins";
        location.reload()

    }
    else if (player ==""){
        winner.innerText = "It's a Tie";
        location.reload()
    }

    
}


