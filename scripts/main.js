const menu = document.querySelector('.other-links-toggle');
const links = document.querySelector('.mega-menu');
const overlay = document.querySelector('.overlay');
let visible = false;
menu.onclick = function(){
    if (!visible) {
        links.classList.add('is-enabled')
        menu.classList.add('is-active')
        overlay.classList.add('is-active')
        setTimeout(() => {links.classList.add('is-active')}, 150)
        visible = true
    } else {
        links.classList.remove('is-active')
        menu.classList.remove('is-active')
        overlay.classList.remove('is-active')
        setTimeout(() => {links.classList.remove('is-enabled')}, 300)
        visible = false
    }
}

overlay.onclick = function(){
    links.classList.remove('is-active')
    setTimeout(() => {links.classList.remove('is-enabled')}, 300)
    menu.classList.remove('is-active')
    overlay.classList.remove('is-active')
    visible = false
}

document.querySelectorAll('.mega-menu ul li').forEach(item => {
  item.addEventListener('click', event => {
    links.classList.remove('is-active')
    setTimeout(() => {links.classList.remove('is-enabled')}, 300)
    menu.classList.remove('is-active')
    overlay.classList.remove('is-active')
    visible = false
  })
})

window.addEventListener('resize', function(eqSize){
  if (window.innerWidth>991){
    var rightHeight = document.querySelector('.preview img').clientHeight;
    var leftHeight = document.querySelector('.list').clientHeight;
    document.querySelector('.list').style.maxHeight=rightHeight+66.4+'px';
  } else {
    document.querySelector('.list').style.maxHeight=300+'px';
  }
});

window.onload = function(eqSize){
  if (window.innerWidth>991){
    var rightHeight = document.querySelector('.preview img').clientHeight;
    var leftHeight = document.querySelector('.list').clientHeight;
    document.querySelector('.list').style.maxHeight=rightHeight+66.4+'px';
  } else {
    document.querySelector('.list').style.maxHeight=200+'px';
  }
}

let countDownDate = new Date("june 2, 2024 0:0:0").getTime();
// console.log(countDownDate);

var second = 1000
var minute = second * 60
var hour = minute * 60
var day = hour * 24
var month = day*30
var year = month *12 + 5.25 * day

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;
  
  if (dateDiff > 0) {
  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let years = Math.floor(dateDiff / (year));
  let months = Math.floor((dateDiff % (year)) / (month));
  let days = Math.floor((dateDiff % (year) %(month)) / (day));
  let hours = Math.floor((dateDiff % (day)) / (hour));
  let minutes = Math.floor((dateDiff % (hour)) / (minute));
  let seconds = Math.floor((dateDiff % (minute)) / second);

document.querySelector(".years").innerHTML = years < 10 ? `0${years}` : years;
document.querySelector(".months").innerHTML = months < 10 ? `0${months}` : months;
document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

}
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
// Skills Animate Width
if (window.scrollY >= section.offsetTop - 500) {
    progressSpans.forEach((span) => {
    span.style.width = span.dataset.progress;
    });
}
// Stats Increase Number
if (window.scrollY >= statsSection.offsetTop - 800) {
    if (!started) {
    nums.forEach((num) => startCount(num));
    }
    started = true;
}
};

function startCount(el) {
let goal = el.dataset.goal;
let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
    clearInterval(count);
    }
}, 2000 / goal);
}