var sliderCounter = 0;
var sliderContent = [
    "Web Developer",
    "Web Designer",
    "Software Developer",
    "Web Development",
    "FrontEnd Developer",
    "BackEnd Developer"
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
    if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0;
    }

    sliderValue.innerHTML = "";

    sliderValue.classList.remove("holder-animation");
    void sliderValue.offsetWidth;
    sliderValue.classList.add("holder-animation");

    for (i = 0; i < sliderContent[sliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderContent[sliderCounter][i];

        if (letterDiv.innerHTML == " ") {
            letterDiv.innerHTML = "&nbsp;";
        }
        letterDiv.classList.add("start");
        letterDiv.classList.add("animation");
        letterDiv.style.animationDelay = i / 10 + "s";
        sliderValue.appendChild(letterDiv);
    }

    sliderCounter++;
}

slide();
setInterval(slide, 2000);

function incrementNumber(elementId, targetNumber) {
    const displayElement = document.getElementById(elementId);
    let currentNumber = 0;

    function increment() {
        displayElement.textContent = currentNumber;
        if (currentNumber < targetNumber) {
            currentNumber++;
            setTimeout(increment, 500);
        }
    }

    increment();
}

window.onload = function() {
    incrementNumber('changingCloneProjects', 4);
    incrementNumber('changingCreativeProjects', 9);
};
