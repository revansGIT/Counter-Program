// COUNTER PROGRAM

const decreaseBTN = document.getElementById("decreaseBTN");
const resetBTN = document.getElementById("resetBTN");
const increaseBTN = document.getElementById("increaseBTN");
const countLabel = document.getElementById("countLabel");
const plus50 = document.getElementById("+50");
const plus100 = document.getElementById("+100");
const minus50 = document.getElementById("-50");
const minus100 = document.getElementById("-100");
let count = 0;

increaseBTN.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBTN.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBTN.onclick = function(){
    count=0;
    countLabel.textContent = count;
}
plus50.onclick = function(){
    count+= 50;
    countLabel.textContent = count;
}
plus100.onclick = function(){
    count+=100;
    countLabel.textContent = count;
}
minus50.onclick = function(){
    count-=50;
    countLabel.textContent = count;
}
minus100.onclick = function(){
    count-=100;
    countLabel.textContent = count;
}