var lefP = document.getElementById('leftPlus');
var num;
var leftScore, rightScore;

function upLeft () {
  console.log("kittens");
}
lefP.addEventListener("click", function(){
  leftScore = document.getElementById('lScore');
 var num = document.getElementById("lScore").innerHTML;
  num = parseInt(num);
  num++;
  
  document.getElementById("lScore").innerHTML = num;
  
  
});
var lefM = document.getElementById('leftMinus');
lefM.addEventListener("click", function(){
 var num = document.getElementById("lScore").innerHTML;
  num = parseInt(num);
  num--;
  
  document.getElementById("lScore").innerHTML = num;
  
  
});

var rigP = document.getElementById('leftPlus2');
rigP.addEventListener("click", function(){
var  num = document.getElementById("rScore").innerHTML;
  num = parseInt(num);
  num++;
  
  document.getElementById("rScore").innerHTML = num;
  
  
});

var rigM = document.getElementById('leftMinus2');
rigM.addEventListener("click", function(){
var  num = document.getElementById("rScore").innerHTML;
  num = parseInt(num);
  num--;
  
  document.getElementById("rScore").innerHTML = num;
  
  
});