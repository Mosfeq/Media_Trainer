const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const questionNumber = document.getElementById('questionNumber')

nextButton.addEventListener('click', function handleClick() {
    questionNumber.textContent = 'Question 2';
});