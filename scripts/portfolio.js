document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields before submitting.');
            return;
        }
        
        alert(`Thank you, ${name}! Your message has been received. I will get back to you soon.`);
        document.getElementById('contactForm').reset();
    });

    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.navbar ul').classList.toggle('active');
    });
});
