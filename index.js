var randomnumber1=Math.floor((Math.random()*6))+1;
var randomnumber2=Math.floor((Math.random()*6))+1;

var Img1= "images/dice"+randomnumber1+".png"
var Img2= "images/dice"+randomnumber2+".png"

document.querySelector(".img1").setAttribute("src",Img1);
document.querySelector(".img2").setAttribute("src",Img2);

if (randomnumber1>randomnumber2){
    document.querySelector(".container h1").innerHTML="Player 1 Wins🚩";}
else if(randomnumber1===randomnumber2){
    document.querySelector(".container h1").innerHTML="Draw";}
else if(randomnumber1<randomnumber2){
    document.querySelector(".container h1").innerHTML="Player 2 Wins🚩";}
