//for 2
let track2 = document.getElementById('audio2');
let start2 = document.getElementById('playbtn2');
let stop2 = document.getElementById('pausebtn2');
let count2 = 0;
//for 3
let track3 = document.getElementById('audio3');
let start3 = document.getElementById('playbtn3');
let stop3 = document.getElementById('pausebtn3');
let count3 = 0;
//for 4
let track4 = document.getElementById('audio4');
let start4 = document.getElementById('playbtn4');
let stop4 = document.getElementById('pausebtn4');
let count4 = 0;
//for 5
let track5 = document.getElementById('audio5');
let start5 = document.getElementById('playbtn5');
let stop5 = document.getElementById('pausebtn5');
let count5 = 0;
//for 6
let track6 = document.getElementById('audio6');
let start6 = document.getElementById('playbtn6');
let stop6 = document.getElementById('pausebtn6');
let count6 = 0;
//for 7
let track7 = document.getElementById('audio7');
let start7 = document.getElementById('playbtn7');
let stop7 = document.getElementById('pausebtn7');
let count7 = 0;
//for 8
let track8 = document.getElementById('audio8');
let start8 = document.getElementById('playbtn8');
let stop8 = document.getElementById('pausebtn8');
let count8 = 0;






//on start 2
function play2(){
 count2 = 1;
 audio2.play();
 playbtn2.style.display = "none";
 pausebtn2.style.display = "block";
 console.log('playing...2');
}
//on stop 2
function pause2(){
 count2 = 0;
 audio2.pause();
 playbtn2.style.display = "block";
 pausebtn2.style.display = "none";
 console.log('paused...2');
}

//on start 3
function play3(){
 count3 = 1;
 audio3.play();
 playbtn3.style.display = "none";
 pausebtn3.style.display = "block";
 console.log('playing...3');
}
//on stop 3
function pause3(){
 count3 = 0;
 audio3.pause();
 playbtn3.style.display = "block";
 pausebtn3.style.display = "none";
 console.log('paused...3');
}

//on start 4
function play4(){
 count4 = 1;
 audio4.play();
 playbtn4.style.display = "none";
 pausebtn4.style.display = "block";
 console.log('playing...4');
}
//on stop 4
function pause4(){
 count4 = 0;
 audio4.pause();
 playbtn4.style.display = "block";
 pausebtn4.style.display = "none";
 console.log('paused...4');
}

//on start 5
function play5(){
 count5 = 1;
 audio5.play();
 playbtn5.style.display = "none";
 pausebtn5.style.display = "block";
 console.log('playing...5');
}
//on stop 5
function pause5(){
 count5 = 0;
 audio5.pause();
 playbtn5.style.display = "block";
 pausebtn5.style.display = "none";
 console.log('paused...5');
}

//on start 6
function play6(){
 count6 = 1;
 audio6.play();
 playbtn6.style.display = "none";
 pausebtn6.style.display = "block";
 console.log('playing...6');
}
//on stop 6
function pause6(){
 count6 = 0;
 audio6.pause();
 playbtn6.style.display = "block";
 pausebtn6.style.display = "none";
 console.log('paused...6');
}

//on start  7
function play7(){
 count7 = 1;
 audio7.play();
 playbtn7.style.display = "none";
 pausebtn7.style.display = "block";
 console.log('playing...7');
}
//on stop 7
function pause7(){
 count7 = 0;
 audio7.pause();
 playbtn7.style.display = "block";
 pausebtn7.style.display = "none";
 console.log('paused...7');
}

//on start  8
function play8(){
 count8 = 1;
 audio8.play();
 playbtn8.style.display = "none";
 pausebtn8.style.display = "block";
 console.log('playing...8');
}
//on stop 8
function pause8(){
 count8 = 0;
 audio8.pause();
 playbtn8.style.display = "block";
 pausebtn8.style.display = "none";
 console.log('paused...8');
}