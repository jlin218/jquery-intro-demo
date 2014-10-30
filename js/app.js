/* app.js
* main script file for our little application
* */

"use strict";
var tile =  'imgs/sec1.jpg';
var info = 'some other data';

var gameBoard = $('#game-board');

//create and configure a new <img> element...
var newTile = $(document.createElement('img'));

newTile.attr('src', 'img/background.jpg');
newTile.attr('alt', 'photo of nature');
newTile.attr('width', '250px');

//use the .data() method to aassociate extra data with HTML elements
newTile.data('assocTile', tile); //first param is a key
newTile.data('tileInfo', info); // sec param is a value

//add to the board
gameBoard.append(newTile);

//whn an image in game-board is clicked
$('#game-board img').click(function(){
	//remeber that 'this' refers to the DOM element that
	//raised the event; wraooed in jQuery $() to get more functionality

	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');
	var tileData2 = clickedImage.data('tileInfo');

	clickedImage.attr('src', tileData1);
	clickedImage.attr('alt', tileData2);

//	console.log(tileData1);


});

var array = ['a', 'b', 'c', 'd'];
var unionArray = _.union(array, ['e','f']);


_.forEach(array, function(element, index) {

 console.log(element);
 console.log(index);

});

var numArray = [1,2,3,4,5,6,7,8,9,10];

var evens = _.filter(numArray, function(num) {return 0 == num % 2;});
console.log(evens);

var shuffledArray = _.shuffle(array);

console.log(shuffledArray);
console.log(numArray);
console.log(array);
console.log(unionArray);

/*

   __          __         
   / /_  ____ _/ /_  ____ _
  / __ \/ __ `/ __ \/ __ `/
 / / / / /_/ / / / / /_/ / 
/_/ /_/\__,_/_/ /_/\__,_/  
                           


*/

var startTime = _.now();
console.log(startTime);

var timer; //hold our timer value

//use window.setInterval to create a timer that runs a function 
//every second

timer = window.setInterval(onTimer, 10);

function onTimer() {
	//compare _.now() to start time to get elapsed time
	//Math.floor() rounds down to the nearest integer
	var elapsedSeconds = Math.floor((_.now() - startTime) / 10);
	console.log(elapsedSeconds);
	$('#game-board h2').css("font-size", elapsedSeconds + 'px'); //(game-board's h2)

}

function stopTimer(){
	window.clearInterval(timer);
	$('#game-board').empty();
}

$('.jumbotron').click(stopTimer);



