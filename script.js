// Hire Me Button
const hireBtn = document.getElementById("hireBtn");

if (hireBtn) {
    hireBtn.addEventListener("click", function () {
        alert("Thank you for visiting my portfolio! Please contact me through the Contact section.");
    });
}

// Download Resume
function downloadResume() {
    window.open("resume.pdf", "_blank");
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

// Change Welcome Title
const title = document.querySelector("#home h2");

if (title) {
    title.addEventListener("click", function () {
        title.textContent = "Welcome to My Portfolio 🚀";
    });
}