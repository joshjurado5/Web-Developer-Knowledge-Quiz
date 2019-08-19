const correctAnswers = ['A', 'B', 'B', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    })

    // show results on page
    scrollTo(0,0)
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');


    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            output++
        }
    }, 10);
})

// window object (global object)
//  setTimeout(() => {
//      alert('hello ninjas');
//  }, 3000);

// let i = 0; 
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if(i === 5){
//         clearInterval(timer)
//     }
// }, 1000);