let gameSeq = [];
let userSeq = [];

let btns = ["box1" , "box2" , "box3", "box4"];

let started = false ;
let level = 0;
let highScore = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
      console.log("Game is Started");
      started = true ;

      levelUp();
    }
});

 function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
     btn.classList.remove("flash");
   },250);
 }

 function userFlash(btn){
  btn.classList.add("userFlash");
  setTimeout(function(){
      btn.classList.remove("userFlash");
  }, 250);
}



  function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIndx = Math.floor(Math.random()*4);
    let rannColor = btns[randIndx];
    let randBtn = document.querySelector(`.${rannColor}`);
    gameSeq.push(rannColor);
    console.log(gameSeq);
    gameFlash(randBtn);
  }

  function checkAns(idx){

    if(userSeq[idx] == gameSeq[idx]){
        if( userSeq.length == gameSeq.length ){
           setTimeout(levelUp, 1000);
        }

    } else {
        h2.innerHTML=`Game Over! Your score was <b> ${level}</b> 
        <br>Press any key to start the game.`; 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white"; 
        },150);
        reset();

    }
}

function btnPress(){
  console.log(this);
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);

  checkAns( userSeq.length-1 );
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn){
  btn.addEventListener("click", btnPress);
}

function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
} 



  