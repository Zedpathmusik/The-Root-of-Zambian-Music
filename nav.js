function show(){
let menubtn = document.querySelector('.menu-btn');
let cancelbtnjs = document.querySelector('.cancel-btn');
let opener = document.getElementById('opener');

 menubtn.style.display = "none";
 cancelbtnjs.style.display = "block";
 opener.style.display = "block";
 console.log('Opened');//SYS==OK
};
function hide(){
let menubtn = document.querySelector('.menu-btn');
let cancelbtnjs = document.querySelector('.cancel-btn');
let opener = document.getElementById('opener');


 menubtn.style.display = "block";
 cancelbtnjs.style.display = "none";
 opener.style.display = "none";
 console.log('Closed');//SYS==OK
}
