let parentcount1 = 0;
let parentcount2 = 0;


function cont1(){
  playbtns.style.display = "block";
  playbtns.style.display = "flex";
  playbtns2.style.justifyContent = "Space-evenly"
};

function parentplay1(){
 parentcount1 = 1;
 audioparent1.play();
 pausebtn.style.display = "block";
 playbtn.style.display = "none";
};function parentpause1(){
 parentcount1 = 0;
 audioparent1.pause();
 pausebtn.style.display = "none";
 playbtn.style.display = "block";
}

function cancelbtn(){
  playbtns.style.display = "none";
}


//for 2
function cont2(){
  playbtns2.style.display = "block";
  playbtns2.style.display = "flex";
  playbtns2.style.justifyContent = "Space-evenly"
};

function parentplay2(){
 parentcount2 = 1;
 audioparent2.play();
 pausebtn22.style.display = "block";
 playbtn22.style.display = "none";
};function parentpause2(){
 parentcount2 = 0;
 audioparent2.pause();
 pausebtn22.style.display = "none";
 playbtn22.style.display = "block";
}

function cancelbtn2(){
  playbtns2.style.display = "none";
}







let audioparent = document.getElementById('audioparent3')
let parentcount3 = 0;
let parentcount4 = 0;
let parentcount5 = 0;
let parentcount6 = 0;

//parent3
function nothing1(){
 if(parentcount3 == 0){
  parentcount3 = 1;
  audioparent3.play();
  stat1.textContent = "(Playing...)";
  
 }else{
  parentcount3 = 0;
  audioparent3.pause();
  stat1.textContent = "(Paused)";
 }
 
}


//parent4
function nothing2(){
 if(parentcount4 == 0){
  parentcount4 = 1;
  audioparent4.play();
  stat2.textContent = "(Playing...)";
  
 }else{
  parentcount4 = 0;
  audioparent4.pause();
  stat2.textContent = "(Paused)";
 }
 
}



//parent5
function nothing3(){
 if(parentcount5 == 0){
  parentcount5 = 1;
  audioparent5.play();
  stat3.textContent = "(Playing...)";
  
 }else{
  parentcount5 = 0;
  audioparent5.pause();
  stat3.textContent = "(Paused)";
 }
 
}


//parent6
function nothing4(){
 if(parentcount6 == 0){
  parentcount6 = 1;
  audioparent6.play();
  stat4.textContent = "(Playing...)";
  
 }else{
  parentcount6 = 0;
  audioparent6.pause();
  stat4.textContent = "(Paused)";
 }
 
}