var scoresHigh = document.getElementById('score')
var initials = document.getElementById('initialInput');
var scoreSubmit = document.getElementById('scoreSubmit');
var resetData = document.getElementById('reset');

function postScore() {
    console.log(initials.value);
    var initial = initials.value;
    var storageScore = localStorage.getItem('savedScore');
    // var newScore = JSON.parse(storageScore);
    var scoreInputTime = document.createElement('li');
    scoreInputTime.textContent = `${initial}: ${storageScore}`;
    scoresHigh.appendChild(scoreInputTime);
}

scoreSubmit.addEventListener('click', postScore);
resetData.addEventListener('click', () => {
    localStorage.clear();
})