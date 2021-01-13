const inpTxt = document.getElementById('inpTxt');
const btn = document.getElementById("btn");
const answerBox = document.getElementById("answer");
let txtArray = [];


const countVowels = () => {
	const txtValue = inpTxt.value;
	txtArray.push(txtValue);
	txtArray = Array.from(txtValue);


	filtrVowels();
}

btn.addEventListener('click',  countVowels);

const filtrVowels = () => {
	let vowels = txtArray.filter((letter) => 'aeiou'.includes(letter)).length;
	answerBox.classList.add('answer');
	answerBox.innerHTML = `Your text has ${vowels} vowels`;
	inpTxt.value = '';
}