import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




// / time

const message = document.querySelector(".message");

startClock();

startDate();


function startClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    minutes = formatTime(minutes);
    seconds = formatTime(seconds);
    hours = formatTime2(hours);

    let time = hours + ":" + minutes + ":" + seconds;

    message.textContent = time;

    setInterval(startClock, 1000);
}

function formatTime(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}


function formatTime2(value) {

    if (value >= 12) {

        value = value - 12;
    }
    if (value == 0) {
        value = 12;

    }
    return value;
}

function startDate() {


}

var dddd = document.querySelector("#DD");

console.log(dddd);


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;
dddd.textContent = today;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
