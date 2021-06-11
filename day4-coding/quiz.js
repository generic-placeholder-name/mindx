let quizzes = []
let totalQuestions = 0;
let correctAnswers = 0;

function insertQuiz(question, choices, answer) {
    totalQuestions++;
    quizzes.push({
        question: question,
        choices: choices,
        answer: answer
    });
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = randomInt(0, i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function askQuiz() {
    let idx = randomInt(0, quizzes.length - 1);
    let msg = "";
    msg += quizzes[idx].question;
    shuffleArray(quizzes[idx].choices);
    for(let i = 0; i < 4; i++) {
        msg += "\n";
        msg += `${i + 1}. `;
        msg += quizzes[idx].choices[i];
    }
    let ans = Number(prompt(msg)) - 1;
    if (quizzes[idx].choices[ans] === quizzes[idx].answer) {
        alert("You answered correctly!");
        correctAnswers++;
    }
    else {
        alert(`You answered wrong, correct answer is ${quizzes[idx].answer}`);
    }
    quizzes.splice(idx, 1);
}

function askAllQuizzes() {
    let tmp = quizzes;
    while(quizzes.length) {
        askQuiz();
    }
    alert("Out of quizzes");
    alert(`Your score is ${correctAnswers} out of ${totalQuestions}`);
    quizzes = tmp;
}

insertQuiz("1 + 1 = ?", [1, 2, 3, 4], 2);
insertQuiz("1 + 2 = ?", [1, 2, 3, 4], 3);

if(prompt("want a quiz?") === "yes") askAllQuizzes();