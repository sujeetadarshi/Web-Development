const endDate = "20 March 2025 10:05 PM";
document.querySelector(".heading2").innerHTML = endDate;
let inputs = document.querySelectorAll("input");
const clock = () => {
  const end = new Date(endDate);
  let now = new Date();
  let difference = (end - now) / 1000;
  if (difference < 0) {
    return;
  }
  let days = Math.floor(difference / (60 * 60 * 24));
  let hours = Math.floor((difference / (60 * 60))%24);
  let minutes = Math.floor((difference / 60)%60);
  let seconds = Math.floor(difference % 60);
  let a = [days, hours, minutes, seconds];
  for (let i = 0; i < a.length; i++) {
    let element = a[i];
    console.log(element);
    if (element < 10) {
      element = "0" + element;
      console.log(element);
    }
    inputs[i].value = element;
  }
};
   clock();
    var interval = 1000 ; // 1000 milliseconds = 1 seconds

    // Call the refreshPage function after the specified interval
   setInterval(()=>{clock()}, interval);


