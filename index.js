const words = ["Life Drop","A drop for you,an ocean for someone else.","Excuses never save life,Blood donation does."]
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('typeeffect').innerHTML += word.shift();
			
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 300);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('typeeffect').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting,50);
	};
	loopDeleting();
};

typingEffect();
var colors=["red","green","blue"];
var randomNumber=Math.floor(Math.random()*colors.length);
var body=document.getElementsById('body');
body.addEventListener('click',function (){
	body.style.backgroundColor=colors[randomNumber];

});