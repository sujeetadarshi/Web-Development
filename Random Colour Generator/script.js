const getColor = () => {
    //Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#" + randomNumber.toString(16);
    document.querySelector(".box").style.backgroundColor = randomCode;
    document.querySelector(".colorCode").innerHTML = randomCode;
    document.getElementById("copy").lastElementChild.innerHTML="Copy"
    document.querySelector(".copySvg").src = "assests/copy.svg"

}
let btn = document.querySelector(".btn");

//event Call
btn.addEventListener("click", getColor)

//initial Call
getColor()

document.getElementById("copy").addEventListener("click", function() {

    document.getElementById("copy").lastElementChild.innerHTML="Copied"
    document.querySelector(".copySvg").src = "assests/copied.svg"
        var textToCopy = document.querySelector(".colorCode").innerText;

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