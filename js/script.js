const firstpage = document.querySelector('.quizapp');
const secondpage = document.querySelector('.rullbox');
const thirdpage = document.querySelector('.question');
const lastpage = document.querySelector('.lastpage');
const startquizbutton = document.querySelector('#strtbtn');
const exitbutton = document.querySelector('#exitbtn');
const continuebutton = document.querySelector('#continuebtn');
const title = document.querySelector('.title');
const options = document.querySelector('.question-answar');
const nextbtn = document.querySelector('.nxtbtn button');
const quitbutton = document.querySelector('#quitbtn');
const playagainbtn = document.querySelector('#playaginbtn');
const time = document.querySelector('.sec');

let counter;
let counterlines;

let questions = [
    {
        numb: 1,
        question: 'What does HTML Stand For?',
        answer: 'Hyper Text Markup Language',
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What Does CSS Stand For?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What Does PHP Stand For?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor"
        ]
    },

    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },

    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language"
        ]
    },
]

startquizbutton.onclick = () => {
    firstpage.style.display = 'none';
    secondpage.style.display = 'block';
}

exitbutton.onclick = () => {
    secondpage.style.display = 'none';
    firstpage.style.display = 'block';
}
continuebutton.onclick = () => {
    secondpage.style.display = 'none';
    thirdpage.style.display = 'block';
    nextbtn.style.display = 'none';
    showquestion(0);
    showtime(15);
    showtimelines(0)


}
let sum = 0;
let question_count = 0;
let optionlist = options.querySelectorAll('span');

function showquestion(index) {

    title.innerHTML = `<h3>${questions[index].numb}. ${questions[index].question} </h3>`;
    options.innerHTML = `<span>${questions[index].options[0]}</span>
    <span>${questions[index].options[1]}</span><span>${questions[index].options[2]}</span><span>${questions[index].options[3]}</span>`;
    const qcount = document.querySelector('.question-count');
    qcount.innerHTML = `<span>${questions[index].numb} of ${questions.length}</span>`;

    // option select 
   

    optionlist.forEach(function (item) {
        let correctans = questions[index].answer;
        let children = item.parentNode.children;
        item.onclick = () => {
            clearInterval(counter);
            clearInterval(counterlines);
            options.classList.add('disable');
            nextbtn.style.display = 'block';
            let userans = item.innerText;
            
            if (userans == correctans) {
                item.style.background = '#7FB77E';
                sum++;
                
            }
            
            else {
                item.style.background = '#FEA1A1';
                for (let x of children) {

                    if (x.textContent == correctans) {
                        x.style.background = '#7FB77E';

                        
                    }
                }

            }

        }

    })

}

nextbtn.onclick = () => {
    options.classList.remove('disable');
    nextbtn.style.display = 'none';
    time.textContent = 15;
    clearInterval(counter);
    showtime(15);
    progress.style.width = '0px';
    clearInterval(counterlines);
    showtimelines(0)

    if (question_count < questions.length - 1) {
        question_count++
        showquestion(question_count);
    }
    else {

        lastpage.style.display = 'block';
        const mark = document.querySelector('.marks');

        mark.innerHTML = `<h1>Congratulations</h1><h3> you gave ${sum} correct answar</h3>`
    }
}

const progress = document.querySelector('.progress');

function showtime(sec) {
    counter = setInterval(timecount, 1000);
    function timecount() {
        time.textContent = sec;
        sec--;
        if (sec <= 0) {
            clearInterval(counter);
            time.textContent = '00';
            
            

        }
        if (sec < 10) {
            time.textContent = '0' + sec;
        }
    }
    return sec
}

function showtimelines(time) {
    counterlines = setInterval(coutprogress, 49);
    function coutprogress() {
        time += 1;
        progress.style.width = `${time}px`;
        if (time == 321) {
            clearInterval(counterlines);
        }
    }
}
quitbutton.onclick=()=>{
    window.location.reload()
}
