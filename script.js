// Scroll effect for changing background color
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top >= 0 && rect.top < windowHeight) {
            section.style.backgroundColor = getRandomColor();
        }
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Feedback form handling
const form = document.getElementById('feedback-form');
const feedbackInput = document.getElementById('feedback-input');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submit

    const feedbackText = feedbackInput.value.trim();

    if (feedbackText === '') {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Please provide your feedback before submitting!';
    } else {
        responseMessage.style.color = '#2ecc71';
        responseMessage.textContent = 'Thank you for your feedback!';
        feedbackInput.value = ''; // Clear the input field
    }
});
