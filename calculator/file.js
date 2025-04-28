//this calls on the the appendtodisply and display
//it in the input which in this case was given and id
// display 
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

//This clear the entire input
function clearDisplay() {
    // document.getElementById("display").value = "";

    document.getElementById("display").value = "\ud83d\ude22\ud83d\ude24\ud83d\ude25 Got You";

    setTimeout(function() {
        document.getElementById("display").value = ""
    }, 2000);
}


//this carrysout the calcuation


function calculate() {

    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        alert("Invalid Calcuation")
    }
}