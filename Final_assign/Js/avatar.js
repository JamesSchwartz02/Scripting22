// JavaScript Document


/****Builder*****/
var character={head:"", metal:"", handle:"", wood:"", colour:""};

function setHead(changling){
	
	character.head=changling;
	console.log (changling);
	bodyBuilder();
	
}

function setMetal(changling){
	
	character.metal=changling;
	console.log (changling);
	bodyBuilder();
}

function setHandle(changling){
	
	character.handle=changling;
	console.log (changling);
	bodyBuilder();
}

function setWood(changling){
	
	character.wood=(changling);
	console.log (changling);
	bodyBuilder();
}

function setColour(changling){
	
	character.colour=(changling);
	console.log (changling);
	bodyBuilder();
}

function write(){
		
var weaponName = document.getElementById('Weapon').value;
console.log (weaponName);	
	
document.getElementById('NameOut').innerHTML = "Behold! "+weaponName+"!";	

}

function bodyBuilder(){
	
	if(character.head!=""){
	document.getElementById('head').innerHTML="<img class='img-fluid' src='Images/Weapon_Head/"+character.head+"' 'alt='weapon'>";			
	}

	if(character.metal!=""){
	document.getElementById('metal').innerHTML="<img class='img-fluid' src='Images/Weapon_Head/"+character.metal+"' 'alt='goldweapon'>";	
	}
	
	if (character.handle!=""){
	document.getElementById('handle').innerHTML="<img class='img-fluid' src='Images/Weapon_Handles/"+character.handle+"' 'alt='handle'>";	
	}
}


