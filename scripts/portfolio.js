document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
        document.querySelector(".sidebar").classList.toggle("active");
        document.querySelector(".overlay").classList.toggle("active");
    }

    document.querySelector(".hamburger").addEventListener("click", toggleMenu);
    document.querySelector(".overlay").addEventListener("click", toggleMenu);

    // Contact Form Submission
    document.querySelector(".btn").addEventListener("click", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contactform").reset();
    });
});
