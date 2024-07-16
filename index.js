window.onload = function() {
    var changingText1 = document.getElementById("changingText");
    var changingText2 = document.getElementById("changing");
    var changingText3 = document.getElementById("edu");
    var changingText4 = document.getElementById("pro");
    var changingText5 = document.getElementById("cer");
    var changingText6 = document.getElementById("ski");

    var texts1 = ["K Sagar, Released: 14/09/2023"];
    var texts2 = ["Loading Resource......"];
    var texts3 = ["Educational Background (2/3);"];
    var texts4 = ["Latest Projects ..(3/5);"];
    var texts5 = ["Latest Certificates ..(4/5);"];
    var texts6 = ["Key Skills ..(8/8);"];

    var letterIndex1 = 0;
    var letterIndex2 = 0;
    var letterIndex3 = 0;
    var letterIndex4 = 0;
    var letterIndex5 = 0;
    var letterIndex6 = 0;

    function typeText1() {
        if (letterIndex1 < texts1[0].length) {
            changingText1.textContent += texts1[0].charAt(letterIndex1);
            letterIndex1++;
            setTimeout(typeText1, 100);
        }
    }

    function typeText2() {
        if (letterIndex2 < texts2[0].length) {
            changingText2.textContent += texts2[0].charAt(letterIndex2);
            letterIndex2++;
            setTimeout(typeText2, 100);
        }
    }

    function typeText3() {
        if (letterIndex3 < texts3[0].length) {
            changingText3.textContent += texts3[0].charAt(letterIndex3);
            letterIndex3++;
            setTimeout(typeText3, 150);
        }
    }
    function typeText4() {
        if (letterIndex4 < texts4[0].length) {
            changingText4.textContent += texts4[0].charAt(letterIndex4);
            letterIndex4++;
            setTimeout(typeText4, 150);
        }
    }
    function typeText5() {
        if (letterIndex5 < texts5[0].length) {
            changingText5.textContent += texts5[0].charAt(letterIndex5);
            letterIndex5++;
            setTimeout(typeText5, 150);
        }
    }
    function typeText6() {
        if (letterIndex6 < texts6[0].length) {
            changingText6.textContent += texts6[0].charAt(letterIndex6);
            letterIndex6++;
            setTimeout(typeText6, 150);
        }
    }

    typeText1(); // Start typing for the first text
    typeText2(); // Start typing for the second text
    typeText3(); // Start typing for the third text
    typeText4();
    typeText5();
    typeText6();
};



var form=document.getElementById("sheetdb")
form.addEventListener("submit", e=>{
e.preventDefault();
fetch(form.action,{
    method:"POST",
    body: new FormData(document.getElementById("sheetdb")),
}).then((html) => {
    window.open('thanks.html');
});
})

document.addEventListener("contextmenu", function(event){
    alert("inspect is not allowed");
    event.preventDefault();
})
