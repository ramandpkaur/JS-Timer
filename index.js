// Accessing the basic HTML elements to take input from user
const form = document.querySelector('form');
const date = document.querySelector('#date');
const timer = document.querySelector('.timerBox');

// Accessing all the HTML elements
const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

const calculateTime = (date) => {

  // Set interval to refresh the timer every 1 second
  setInterval((date)=> {
      
    // Find difference in the time in milliseconds
    const currentDate = new Date().getTime();
    const finalDate = new Date(date).getTime();

    let difference = finalDate - currentDate;

    // Incase of past date selection
    if(difference <= 0) {
      timer.style.display = 'none';
      document.querySelector('#timerHeading').innerHTML = "Time's Up!";
      clearInterval(intervalId);
    }

    // Setting standard values to convert time into milliseconds
    const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;

    // Converting the difference in milliseconds to days hours minutes and seconds
    const leftDays = Math.floor(difference / day);
    const leftHours = Math.floor((difference % day) / hour);
    const leftMinutes = Math.floor((difference % hour) / minute);
    const leftSeconds = Math.floor((difference % minute) / second);

    // Setting the value in the HTML elements selected before the function
    daysElement.innerText = leftDays;
    hoursElement.innerText = String(leftHours).padStart(2, "0");
    minutesElement.innerText = String(leftMinutes).padStart(2, "0");
    secondsElement.innerText = String(leftSeconds).padStart(2, "0");

  }, 0, date);

}

form.addEventListener('submit', (e)=> {
  
  // Prevent page from reloading
  e.preventDefault();

  calculateTime(date.value);

});

