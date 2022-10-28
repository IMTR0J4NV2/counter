import '../css/style.css'

const counter = document.getElementById('counter');

const timer = setInterval(() => {
    parseInt(counter.innerText) === 9 ? clearInterval(timer) : counter.innerText = parseInt(counter.innerText) + 1
}, 1000)

