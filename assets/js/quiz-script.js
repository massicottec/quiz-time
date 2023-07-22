var choices = [{
	optA: "Biggs",
	optB: "Wedge",
	optC: "Cid",
	optD: "Mog",
}, {
	optA: "Golbez",
	optB: "Fusoya",
	optC: "The Dark Elf",
	optD: "Tellah",
}, {
	optA: "Gaius Van Baelsar",
	optB: "Hildebrand Manderville",
	optC: "Greg",
	optD: "Nero Tol Scaeva",
}, {
	optA: "Run away",
	optB: "Suplex it",
	optC: "Phoenix Down",
	optD: "Both B and C",
}, {
	optA: "Earth, Fire, Water, and Air",
	optB: "Water, Fire, Earth, and Heart",
	optC: "Light, Dark, Chromatic, and Aberrant",
	optD: "Ice, Ice, Vanilla, Ice",
}, {
	optA: "The Highwind",
	optB: "The Enterprise",
	optC: "The Lunar Whale",
	optD: "The M.S. Prima Vista",
}, {
	optA: "A Moogle",
	optB: "A Chocobo",
	optC: "An Oglop",
	optD: "A Cactuar",
}, {
	optA: "A Clown",
	optB: "A Jester",
	optC: "A Fool",
	optD: "A Waiter",
}, {
	optA: "Wakka",
	optB: "Sin",
	optC: "Grand Maester Seymour",
	optD: "Lightning",
}, {
	optA: "Elven",
	optB: "Dwarven",
	optC: "Beaver",
	optD: "French",
}];

var questions = ['Which of the following characters appear in every Final Fantasy title?',
	'Which of the following characters termed the phrase, “You spoony bard!”?',
	'Who is the dapper agent of enquiry and self proclaimed inspector from Final Fantasy XIV?',
	'What is the most appropriate method of dealing with an undead train?',
	'In Final Fantasy I what were the elements of the 4 crystals the warriors of light were trying to save.',
	'What was the name of the airship that the Tantalus Theatre Troupe used when trying to kidnap Princess Garnet?',
	'What Final Fantasy critter was Cid Fabool IX, from FFIX, transformed into as punishment for adultery?',
	'What does Kefka, from FFVI, claim not to be when confronted by Sabin and friends in the Imperial Desert Camp.',
	'What is Rikku`s, from FFX, greatest fear?',
	'In Final Fantasy II, Guy was possessed of an important language skill that helped the party complete their journey.  What was that language?'];

var answers = ["Cid", "Tellah", "Hildebrand Manderville", "Both B and C", "Earth, Fire, Water, and Air", "The M.S. Prima Vista", "An Oglop", "A Waiter", "Lightning", "Beaver"];

var questionNumber = 0;
var questionTime = document.getElementById('question');
var questionA = document.getElementById('optA');
var questionB = document.getElementById('optB');
var questionC = document.getElementById('optC');
var questionD = document.getElementById('optD');
var result = document.getElementById('outcome');
var buttonEL = document.getElementsByClassName('btn');
var timeCurrent = document.getElementById('timer');
var message = document.createElement('p');
var choose = "";
var count = 0;
var time = 180;
var scores = 0;

// listens for user to click an answer button and then runs the check function to see if the selected option is correct
for (var i = 0; i < buttonEL.length; i++) {
	buttonEL[i].addEventListener('click', event => {
		choose = event.target.closest("button")
		check();
		count++;
		return;
	});
};

// checks if the selected answer is correct.  If correct the function will output the stated text and run the fillout funtion to repopulate the questions with the enxt set of questions
function check() {
	if (answers[questionNumber] === choose.textContent) {
		result.textContent = `Kupo, ${choose.textContent} is indeed the correct answer.`;
		questionNumber++;
		if (questionNumber === questions.length) {
			end();
			window.location.href = "scores.html";
		}

		fillout();
	} else if (answers[questionNumber] !== choose) {
		result.textContent = `${choose.textContent} is incorrect kupo.`;
		time -= 5;
	}
	return;
};

// populates the question boxes with the associated question options from the choices array
function fillout() {
	questionTime.textContent = questions[questionNumber];
	questionB.textContent = choices[questionNumber].optB;
	questionA.textContent = choices[questionNumber].optA;
	questionC.textContent = choices[questionNumber].optC;
	questionD.textContent = choices[questionNumber].optD;
	return;
}

function end() {
	scores = time;
	localStorage.setItem('savedScore', scores);
}

var interval = setInterval(() => {
	message.textContent = `Time: ${time}`
	timeCurrent.appendChild(message)
	time--;

	if (time === 0) {
		clearInterval(interval);
		window.location.href = "scores.html";
	}
}, 1000);