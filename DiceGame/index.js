var rn = Math.ceil(Math.random(1,6)*6);
if(rn === 1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(rn === 2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png")
}
else if(rn === 3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png")
}
else if(rn === 4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png")
}
else if(rn === 5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png")
}
else{
    document.querySelector(".img1").setAttribute("src","./images/dice6.png")
}

var rn2 = Math.ceil(Math.random(1,6)*6);
if(rn2 === 1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(rn2 === 2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png")
}
else if(rn2 === 3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png")
}
else if(rn2 === 4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png")
}
else if(rn2 === 5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png")
}
else{
    document.querySelector(".img2").setAttribute("src","./images/dice6.png")
}

if(rn > rn2){
    document.querySelector("h1").innerHTML = "Player 1 wins !";
}
else if( rn < rn2){
    document.querySelector("h1").innerHTML = "Player 2 wins !";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}

