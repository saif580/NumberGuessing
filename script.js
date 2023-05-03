'use strict';

let secretNumber=Math.trunc(Math.random()*20+1) ;
let score=20;
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent="No Number "
    //when player wins
    } else  if(guess===secretNumber){
        document.querySelector('.message').textContent="Correct Number ";
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

    //when player is too high
    } else if(guess > secretNumber){
        if(score>1){
            document.querySelector('.message').textContent="Too High "
            score--;
            document.querySelector('.score').textContent=score;
        } else {
            document.querySelector('.message').textContent="You Lost The Game ";
            document.querySelector('.score').textContent=0;
        }  
    //when player is too low  
    } else if(guess < secretNumber){
        if(score>1){
            document.querySelector('.message').textContent="Too Low !"
            score--;
            document.querySelector('.score').textContent=score;
        } else {
            document.querySelector('.message').textContent="You Lost The Game "
            document.querySelector('.score').textContent=0;
        }
    }
})
//resetting the game
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20+1) ;
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent='?'
});