var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var ranBtn = document.querySelector(".randomBTN");
var revBtn = document.querySelector(".reverseBTN");
var switchBtn = document.querySelector(".switchBTN");
var on = false;

//console.log(color1);
//console.log(color2);

var rgbToHex = function(){
	var hex = Number(Math.floor((Math.random()*255)+1)).toString(16);
	if(hex.length <2){
		hex = "0" +hex;
	}
	return hex;
};

var ranFullColorHex = function(){
	var red = rgbToHex();
	var green = rgbToHex();
	var blue = rgbToHex();
	return red+green+blue;
}

function setGradient(){
	if(on===true){
		switchBtn.style.background = "linear-gradient(to right, " + color1.value + "," +color2.value+")";
		revBtn.style.background= "linear-gradient( " + color2.value + "," +color1.value+")";
		body.style.background = "linear-gradient( " + color1.value + "," +color2.value+")";
		css.textContent = body.style.background + ";";
	} else{
		switchBtn.style.background = "linear-gradient(to bottom, " + color1.value + "," +color2.value+")";
		revBtn.style.background= "linear-gradient(to right, " + color2.value + "," +color1.value+")";
		body.style.background = "linear-gradient(to right, " + color1.value + "," +color2.value+")";
		css.textContent = body.style.background + ";";
	}
}

function setReverse(){
	var holder = color1.value;
	// color1.setAttribute("value", color2.value);
	// color2.setAttribute("value", holder);
	color1.value = color2.value;
	color2.value = holder;
	setGradient();
}

function setRandom(event){
	color1.value="#"+ranFullColorHex();
	color2.value="#"+ranFullColorHex();
	// color1.setAttribute("value" ,"#"+ranFullColorHex());
	// color2.setAttribute("value" ,"#"+ranFullColorHex());
	setGradient();
}
function switchClick(){
	if(on === false){
		on=true;
	}else{
		on=false;
	}
	setGradient();
}
ranBtn.addEventListener("click", setRandom);
revBtn.addEventListener("click", setReverse);
switchBtn.addEventListener("click", switchClick);
color1.addEventListener("input",setGradient);
color2.addEventListener("input", setGradient);
