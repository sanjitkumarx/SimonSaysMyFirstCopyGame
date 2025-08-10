let h4= document.querySelector("h4");

let gamestart=false;
let level=0;

let btncolor=["red","green","yellow","blue"];

document.addEventListener("keypress",function(){

//GAME START CONDITION


if(gamestart==false){
console.log("game start");
gamestart=true;
levelup();
}

});
let user=[];
let game=[];


//flash function

function btnflash(button) {

button.classList.add("flash");
setTimeout( function () {
button.classList.remove("flash");
},100); 

}

// level up function

function levelup(){

level++;

h4.innerText=`level ${level}`;
let rn=Math.floor(Math.random()*3);
let rc=btncolor[rn];
let ra=document.querySelector(`.${rc}`);

btnflash(ra);
game.push(rc);
console.log(game);
user=[];

}


function userflash(button) {

button.classList.add("user");
setTimeout( function () {
button.classList.remove("user");
},100); 

}

function check(indx){


if(user[indx]===game[indx]){

if(user.length == game.length){
setTimeout(levelup,1000);
    
}

}else{
    h4.innerText="wrong input game over !! your score is : ";
    h4.append(level);
    console.log(level);
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){

       document.querySelector("body").style.backgroundColor="white"; 
    },1000);
    reset();
}

}

function btnpress(){
let btn= this;
userflash(btn);
usercolor=btn.getAttribute("id");
console.log(usercolor);
user.push(usercolor);
check(user.length-1);


}
let btn = document.querySelectorAll(".btn");
for(btn of btn){
btn.addEventListener("click",btnpress);
}

function reset (){

gamestart=false;
user=[];
game=[];
level=0;


}


