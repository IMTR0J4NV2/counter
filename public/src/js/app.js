import '../css/style.css'

const counter = document.getElementById('counter');

const timer = setInterval(() => {
    counter.innerText = parseInt(counter.innerText) + 1
}, 1000)

