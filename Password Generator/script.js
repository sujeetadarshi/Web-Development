let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialChar = "~!@#$%^&*()";

let warning = document.querySelector(".warning")
let inputs = document.getElementsByTagName("input");
console.log(inputs);
function getRandomData(dataSet) {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
}
let a = [uppercase, lowercase, number, specialChar];
const generatePassword = (password = "") => {

    warning.innerHTML = ""
  if (inputs[0].value == "") {
    inputs[0].style.boxShadow = "0px 0px 2px red";
     warning.innerHTML = "<p>**Please Enter Length of Password</p>"
  }
  else{
    inputs[0].style.boxShadow = "none";
  }
  if (
    !inputs[1].checked &&
    !inputs[2].checked &&
    !inputs[3].checked &&
    !inputs[4].checked
  ) {
    for (let i = 1; i < 5; i++) {
      inputs[i].style.boxShadow = "0px 0px 2px red";
    }
    warning.innerHTML = warning.innerHTML + "<p>**Please check at least one checkbox</p>"
  }else{
    for (let i = 1; i < 5; i++) {
      inputs[i].style.boxShadow = "none";
    }
  }

  for (let i = 1; i < 5; i++) {
    if (inputs[i].checked) {
      password += getRandomData(a[i - 1]);
    }
  }
  if (password.length < inputs[0].value) {
    return generatePassword(password);
  }

  document.querySelector(".password").innerHTML = truncateString(
    password,
    inputs[0].value
  );
};

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}

let refresh = document.querySelector(".refresh");
let rotationAngle = 0;
refresh.addEventListener("click", () => {
  rotationAngle += 360;
  refresh.style.transform = `rotateZ(${rotationAngle}Deg)`;
  copybtn.firstElementChild.src = "assests/copy.svg";
  copybtn.lastElementChild.innerHTML = "Copy";
  if (
    !inputs[1].checked &&
    !inputs[2].checked &&
    !inputs[3].checked &&
    !inputs[4].checked &&
    inputs[0].value == "" ||
    document.querySelector(".password").innerHTML == ""
  ) {
    return;
  } else {
    generatePassword();
  }
});

let copybtn = document.querySelector(".copybtn");
copybtn.addEventListener("click", () => {
  copybtn.firstElementChild.src = "assests/copied.svg";
  copybtn.lastElementChild.innerHTML = "Copied";
  var textToCopy = document.querySelector(".password").innerText;

  // Create a temporary textarea element to hold the text to copy
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;

  // Append the textarea to the body
  document.body.appendChild(tempTextArea);

  // Select the text in the textarea
  tempTextArea.select();

  // Copy the selected text
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);
});

let generate = document.querySelector(".generate");

generate.addEventListener("click", () => {
  generatePassword();
});

let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  inputs[0].value = "";
    
    for (let i = 1; i < 5; i++) {
      inputs[i].checked = false;
    }
    for (let i = 0; i < 5; i++) {
      inputs[i].style.boxShadow = "none";
    }
  warning.innerHTML = ""
  document.querySelector(".password").innerHTML =""
});
