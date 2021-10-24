// Array to maintain History Data
var historyCal = [];
// Boolean variable to notify if a new equation has begun
var newCal;

// Display function is used to display the equation and result in it it gets triggered on every button click 
function display(val)
{  
   if(newCal) {
      newCal = false;
      document.getElementById("result").value = "";
    }
    document.getElementById("result").value+=val;
}

// Solve method is called on click of '=' once completly executed newCal is made true to notify a begining of new equation
function solve()
{
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
    maintainHistory(x, y);
    newCal = true;
}

function maintainHistory(equation, result) {
  var historyData = equation + '=' + result;
   if ( historyCal.indexOf(historyData) === -1 ) {
      historyCal.push(historyData);
   }
   var hist = document.getElementById('history');
   hist.innerHTML += "<li>" + historyCal[historyCal.length-1] + "</li>";
}

function clr()
{
    document.getElementById("result").value = ""
}

function toggleDayNight() {
   var element = document.querySelectorAll("input");
   element.forEach((input) => {
      input.classList.toggle("night");
   })
   var dayNightBtn = document.getElementById("dayNight");
   if (dayNightBtn.value === "Night Mode") {
      dayNightBtn.value = "Day Mode";
   } else {
      dayNightBtn.value = "Night Mode"
   }
}