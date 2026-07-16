console.log("Connected");

function alertUser() {
    alert("HI THERE!");
}

let btn = document.getElementById("hiBtn");

if (btn) {
    btn.addEventListener("click", alertUser);
}

let btn2 = document.getElementById("colorBtn");

let isDarkMode = false;

if (btn2) {
    btn2.addEventListener("click", changeBackground);
}

function changeBackground() {
    if (isDarkMode) {
        document.body.style.background = "lightgreen";
        document.body.style.color = "black";
        isDarkMode = false;
    } else {
        document.body.style.background = "black";
        document.body.style.color = "white";
        isDarkMode = true;
    }
}