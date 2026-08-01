// Welcome Message
const hireBtn = document.getElementById("hireBtn");

hireBtn.addEventListener("click", function () {
    alert("Thank you for visiting my portfolio! Please contact me through the Contact section.");
});

// Download Resume
function downloadResume() {
    alert("Resume download will be available soon!");
    // Later you can use:
    // window.open("Asha_Resume.pdf");
}

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// DOM Manipulation
const title = document.querySelector("#home h2");

title.addEventListener("click", function () {
    title.textContent = "Welcome to My Portfolio 🚀";
});