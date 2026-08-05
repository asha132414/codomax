// ==========================
// Hire Me Button
// ==========================
const hireBtn = document.getElementById("hireBtn");

if (hireBtn) {
    hireBtn.addEventListener("click", function () {
        alert("Thank you for visiting my portfolio! Please contact me through the Contact section.");
    });
}

// ==========================
// Download Resume
// ==========================
function downloadResume() {
    window.open("resume.pdf", "_blank");
}

// ==========================
// Scroll to Top Button
// ==========================
const topBtn = document.getElementById("topBtn");

if (topBtn) {

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

}

// ==========================
// Change Welcome Title
// ==========================
const title = document.querySelector("#home h1");

if (title) {

    title.addEventListener("click", function () {

        title.textContent = "Welcome to My Portfolio 🚀";

    });

}

// ==========================
// Contact Form Validation
// ==========================
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            formMessage.style.color = "red";
            formMessage.textContent = "Please fill in all fields.";
            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.style.color = "red";
            formMessage.textContent = "Please enter a valid email address.";
            return;

        }

        formMessage.style.color = "green";
        formMessage.textContent = "✅ Message sent successfully!";

        contactForm.reset();

    });

}