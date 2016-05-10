var toGetherUrl = "https://togetherjs.com/togetherjs-min.js";

require(['lib/jquery-1.11.3','Controller/chessTimer'],function(jquery){
   console.log('Comming soon App Controller');
});

require([toGetherUrl], function(){
	console.log('toGether has been loaded');
});