/**********************************************************************************
***********************************************************************************
*****" TO DO CREATE GENERALISED FUNCTIONS REMOVE UNWANTED VARIALBLES ****"
***********************************************************************************
**********************************************************************************
***********************************************************************************/

//2. ADD WINNER SYMBOL NEAR THE PLAYER WHO WON
//3. ADD LOOSER SYMBOL

//ADVANCED FEATUERS
//4. ADD TIMER FOR ADDITIONAL TIME 
var player1Min = 10,
    player2Min = 20,
	player1Seconds,
	player2Seconds;
	
	//player1Running variable is used to avoid starting the counter of player 1 during player2't time is running
	//Example: Player2 timer is running but accidently player1 hits his button which got resulted in player1's timer 
	//started which is incorrect therefore I have used player1Running, player2Running 
	var player1Running = false;
	var player2Running = false;

	var player1clicked = false;
	var player2clicked = false;
	var player1TimerStarted;
	var player2TimerStarted;
	var isNewGameTimerRequired = true;

var player1TimerContainer = document.getElementById('timer1');

function player1(){

	if(player1Running){
		player2Running = false;

		if(player1clicked){
			stopTimer();
			player1clicked=false;
		}else{
			player1TimerStarted = setInterval(updateTime,1000);
			player1clicked = true;
		}
			player2();
	    function updateTime(){
	        	if(player1Seconds<0){
	               stopTimer();
	            }else{
	            	player1TimerContainer.innerHTML= player1Seconds--;
	        	}
	    }
	    function stopTimer(){
	    	player2Running = true;
	    	clearInterval(player1TimerStarted);
	    }
	        
   }     
}

function player2(){

	if(player2Running){

		player1Running=false;
		
		if(player2clicked){
			stopTimer();
			player2clicked=false;
			player1();
		}else{
			player2TimerStarted = setInterval(updateTime,1000);
			player2clicked = true;
		}
	    
	    var player2TimerContainer = document.getElementById('timer2');	
	    
	    function updateTime(){
	        	if(player2Seconds<0){
	               stopTimer();
	            }else{
	            	player2TimerContainer.innerHTML= player2Seconds--;
	            }
	    }
	    function stopTimer(){
	    	player1Running=true;
	    	clearInterval(player2TimerStarted);
	    }
   }     
}

function startTimer(){

	player1Running= true;
	var gameLength = parseInt(document.getElementById('inputTimeoutValue').value);
	player1Seconds = gameLength;
	player2Seconds = gameLength;
	if( isNewGameTimerRequired == true && (player1Seconds != gameLength && player2Seconds != gameLength) ){
		return false;
	}
	player1TimerStarted = setInterval(updateTime,1000);
	player1clicked = true;
	    function updateTime(){
            player1TimerContainer.innerHTML= player1Seconds--;
        	if(player1Seconds<0){
               stopTimer();
        }
    }
    
    function stopTimer(){
    	clearInterval(player1TimerStarted);
    }

}