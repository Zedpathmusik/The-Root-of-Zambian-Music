//variblas
      let  = document.getElementById('audio');
      let prev = document.getElementById('prev');
      let play = document.getElementById('play');
      let pause = document.getElementById('pause');
      let next = document.getElementById('nex');
      let count = 0;
      //prev it
       function preview(){
        console.log('No Preview');//SYS==OK
       }      
      //play it
      function player(){
       count = 1;//SYS==start
       audio.play();//SYS==start play
       play.style.display = "none";
       pause.style.display = "block";
       console.log('playing...');//SYS==OK
      }
      //pause it
      function pauser(){
       count = 0;//SYS==stop
       audio.pause();//SYS==stop play
       play.style.display = "block";
       pause.style.display = "none";
       console.log('paused...')//SYS==OK
      }
      //nex it
      function nexter(){
       console.log('No Next');//SYS==OK
      }
      