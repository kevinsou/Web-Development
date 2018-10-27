var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggle);

for (var i=0;i<li.length; i++){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li[i].appendChild(btn);
	btn.addEventListener("click", removeList);
}


//functions

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.addEventListener("click", removeList);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggle(event){
	if(event.target.tagName === "LI"){
		event.target.classList.toggle("done");
	}
}

function removeList (event){
	event.target.removeEventListener("click", removeList);
	event.target.parentNode.remove();
}
