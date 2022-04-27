let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');

	if(mySrc === 'images/grahmophone.png'){
		myImage.setAttribute('src', 'images/logo.png')
	}
	else{
		myImage.setAttribute('src', 'images/grahmophone.png')
	}
}

myButton = document.querySelector('button')
myHeading = document.querySelector('h1')

function setUserName() {
	let myName = prompt('Please enter your name:');
	if(!myName) {
		setUserName();
	}
	else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Welcome ' + myName;
	}
	
}

if(!localStorage.getItem('name')) {
	setUserName();
}
else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome ' + storedName;

}

myButton.onclick = function() {
	setUserName();
}