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
	
	var player1clicked = false;
	var player2clicked = false;
	var player1TimerStarted;
	var player2TimerStarted;
	var isNewGameTimerRequired = true;

var player1TimerContainer = document.getElementById('timer1');

function player1(){

	if(player1clicked){
		stopTimer();
		player1clicked=false;
		player2();
	}else{
		player1TimerStarted = setInterval(updateTime,1000);
		player1clicked = true;
	}
    function updateTime(){
        	if(player1Seconds<0){
               stopTimer();
            }else{
            	player1TimerContainer.innerHTML= player1Seconds--;
        	}
    }
    function stopTimer(){
    	clearInterval(player1TimerStarted);
    }
        
}

function player2(){

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
    	clearInterval(player2TimerStarted);
    }
        
}

function startTimer(){

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