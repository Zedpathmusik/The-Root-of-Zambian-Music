let countlike = 0;
let countunlike = 0;
let countlove = 0;

function likebtn(){

 if(countlike == 0){
  countlike = 1;
  alert('Thanks, LIKE sent');
 }else if(countlike == 1){
  countlike = 2;
  alert('Stop Abusing SYSTEM');
 }else if(countlike == 2){
  countlike = 3;
  alert('SYS IS NOW DOWN');
 }else{
  alert('Like not sent, because of you.');
 }
 
}

function Unlikebtn(){

 if(countunlike == 0){
  countunlike = 1;
  alert('YOU disliked this');
 }else if(countunlike == 1){
  countunlike = 2;
  alert('Dislike wont be sent');
 }else if(countunlike == 2){
  countunlike = 3;
  alert('SYS IS DOWN THANKS TO YOU');
 }else{
  alert('SORRY! we couldn’t recognise this act');
 }
 
}

function lovebtn(){

 if(countlove == 0){
  countlove = 1;
  alert('Thanks, Love sent');
 }else if(countlove == 1){
  countlove = 2;
  alert('Stop harming SYS');
 }else if(countlove == 2){
  countlove = 3;
  alert('SYS is dameged.');
 }else{
  alert('Your Reaction wont be sent due to the abuse of power by user');
 }
 
}