const roles = ["Web Developer", "Web Designer", "Software Engineer", "FrontEnd Developer", "BackEnd Developer"];
let currentRoleIndex = 0;
const changingRolesElement = document.getElementById("changingroles");
let currentText = "";
let isDeleting = false;
let charIndex = 0;

function type() {
    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
        currentText = currentRole.substring(0, charIndex--);
    } else {
        currentText = currentRole.substring(0, charIndex++);
    }

    changingRolesElement.textContent = currentText;

    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, 1000); // Pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }

    const typingSpeed = isDeleting ? 100 : 200; // Adjust typing speed here
    setTimeout(type, typingSpeed);
}

type();