var historyCal = [];
var newCal;
function display(val)
{  
   if(newCal) {
      newCal = false;
      document.getElementById("result").value = "";
    }
    document.getElementById("result").value+=val;
}

function solve()
{
    let x = document.getElementById("result").value;
    let y = eval(x)
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

function toggleDayNight(event) {
   console.log(event);
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