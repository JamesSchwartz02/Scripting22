// JavaScript Document

function write(){

/**************Variables**************/

var mansName = document.getElementById('mname').value;
console.log (mansName)

var company = document.getElementById('comp').value;
console.log (company)	

var sound = document.getElementById('sound').value;
console.log (sound)

var animal = document.getElementById('ani').value;
console.log (animal)
	
var verbPt	= document.getElementById('verbPT').value;
console.log (verbPt)
	
var emotionPT = document.getElementById('emoPT').value;
console.log (emotionPT)
	
var verbPT = document.getElementById('VerbPT').value;
console.log (verbPT)
	
var womanName = document.getElementById('wname').value;
console.log (womanName)	
	
var animalPart = document.getElementById('anipart').value;
console.log (animalPart)	
	
var manName = document.getElementById('Mname').value;
console.log (manName)
	
var laugh = document.getElementById('laugh').value;
console.log (laugh)	

var emotion = document.getElementById('emo').value;	
console.log (emotion)	

var food = document.getElementById('food').value;	
console.log (food)
	
var animalBody = document.getElementById('anibody').value;
console.log (animalBody)	
	
var fastFood = document.getElementById('ffc').value;
console.log (fastFood)	
	
var sport = document.querySelector('input[name = "sport"]:checked').value;
console.log (sport)

var sportMessage;

var sportImage;
	
	
/*******if Statement********/	
	
if (sport=="bat"){sportMessage =" grabbed a baseball bat and tried to scare it off the " 
				  sportImage = "<img class = 'img-fluid' src='images/baseball_bat.jpg'> "}	
else if(sport=="hockey"){sportMessage = " picked up her family hockey stick and started shouting at the " 
						 sportImage = "<img class = 'img-fluid' src='images/hockey_stick.jpg'>"}	
else if(sport=="golf"){sportMessage = " got a golf club from her friends bag and strted swing at the  "
					   sportImage = "<img class = 'img-fluid' src='images/golf_club.jpg'> ";}	
	
	
/**********Output************/

	
document.getElementById('output').innerHTML = mansName+" was happily asleep from a long night of working at "+company+ ". All of a sudden, he woke up to a loud "+sound+"! When "+mansName+" got up to investigate the noise he stumbled upon a "+animal+" in his kitchen "+verbPt+" in his fridge. "+mansName+" face light up with "+emotionPT+" and began "+verbPT+". The noise he was making woke up "+womanName+" and she got up to check what was all the ruckus only to find "+mansName+" in a corner of the kitchen hiding from an "+animal+". "+womanName+" "+sportMessage+" "+animal+". In response the "+animal+" stood up and grabbed its "+animalPart+". It began to pull it away and out came "+manName+"'s head. "+womanName+" stopped and began to "+laugh+" this made "+mansName+" "+emotion+" and he went to bed feeling "+emotion+" and embarrassed. "+manName+" explained what he was doing. Apparently, he came home wearing the "+animal+" costume and was hungry, so he went to go find leftover "+food+" in the fridge but he got stuck because the "+animalBody+" was too big. With this information "+womanName+" helped him out of the fridge and ordered a delivery of "+fastFood+". "+manName+ " got out of the costume and finally got something to eat.";	

	
document.getElementById('output').innerHTML += sportImage;	
}