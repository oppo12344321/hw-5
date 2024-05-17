let step = "" ;

let spanWho = document.getElementById('spanWho');
let winner = "" 

const who = () =>{
    if(step == 'circle') {
        step = 'krest'; 
        spanWho.innerText = 'Крестики'
    } else {
        step = 'circle'
        spanWho.innerText = 'Нолик'

    }
} 

who() 

let blockItem = document.querySelectorAll('.blockItem') 
let counter = 0; 

blockItem.forEach((item)=>{
    item.addEventListener('click', ()=> {
        if(!item.classList.contains('circle') && !item.classList.contains('krest')) {  
         item.classList.add(step) 
         if (step=='krest'){
            item.innerText = 'X'
         }
         if (step=='circle'){
            item.innerText = 'O'
         }

          counter++;
           
         who()
         circleWin()
         krestWin()
         win()
 
        }
          

    })

}) 

let win = 
[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
] 

let circleWin = ()=> {
    for(let i = 0; i< win.length; i++) {
        if( 
        blockItem[win[i][0]].classList.contains('circle') &&
        blockItem[win[i][1]].classList.contains('circle') &&
        blockItem[win[i][2]].classList.contains('circle') 
        ){
            blockItem[win[i][0]].classList.add('winColor') 
            blockItem[win[i][1]].classList.add('winColor') 
            blockItem[win[i][2]].classList.add('winColor') 
            

            winner ='Нолики'
            endGame(winner)

            return 1
        }
    }
}

let krestWin = ()=> {
    for(let i = 0;i < win.length; i++) {
        if( 
        blockItem[win[i][0]].classList.contains('krest') &&
        blockItem[win[i][1]].classList.contains('krest') &&
        blockItem[win[i][2]].classList.contains('krest') 
        ){
            blockItem[win[i][0]].classList.add('winColor') 
            blockItem[win[i][1]].classList.add('winColor') 
            blockItem[win[i][2]].classList.add('winColor') 
            

            winner ='Крестики'
            endGame(winner)

            return 1
        }
    }
}

let noWin = ()=> {
    if (!krestWin () && !circleWin() && (counter >=9)) {  
        winner = 'Ничья'
        endGame(winner)
    }
}

let blockWinner = document.getElementById('blockWinner') 
let spanWinner = document.getElementById('spanWinner')
let btnNewGame = document.getElementById('btnNewGame')

let blockArea =document.getElementById('blockArea') 


let endGame = (winner)=>{
    blockArea.style.pointerEvents = 'none';
    blockWinner.style.display = 'flex'
    spanWinner.innerText = winner
}

btnNewGame.addEventListener('click', ()=>{
    document.location.reload()
})