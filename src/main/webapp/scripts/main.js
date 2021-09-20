let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	
	let myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
	
}

if(!localStorage.getItem('name')){
	
	setUserName();
	
	}else {
		let storedName = localStorage.getItem('name');
		myHeading.textContent = 'Mozilla is Cool, ' + storedName;
		
	}
	
	
	
	
myButton.onclick = function(){
	
	setUserName();
	
}

function pageMove(){
/*form의 name을 page혹은 button의 name을 page로 줘도 된다.
여러정보를 담아 보낼땐 form태그 + appendChild(수업시간에 배운 방식)
한가지에 대해 보낼떈 버튼에 name 혹은 id를 부여해도 되는거 같다.
name은 중복해서 적을수있으니 여러개를 보낼수있음! (button들에게 같은 name을 부여)
혹은 form에 name이나 id를주면 지정한 form태그안의 값들만 보낼수있겠지!*/

	var move = document.page;	
	move.submit();
	
}

function pageMove2(something){

	alert(something);
	
	
}



