let gameseq=[];
let userseq=[];
let btns=["yellow","red","green","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let radidx=Math.floor(Math.random()*3);
    let radcolor=btns[radidx];
    let radbtn=document.querySelector(`.${radcolor}`);
    gameseq.push(radcolor);
    console.log(gameseq);
    gameflash(radbtn);
}
function checkans(idx){
    //console.log("current level:",level);
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
       // console.log("same value");
    }
    else{
        h2.innerHTML=`Game over! your score was<b>${level}</b> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
          document.querySelector("body").style.backgroundColor="white";  
        },150)
        reset();

    }

}
function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute('id');
    console.log(userColor);
    userseq.push(userColor);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)

}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}