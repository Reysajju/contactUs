const form = document.getElementById('contact-form');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        to_name: 'Your Name', // Replace with your name
        to_email: 'your-email@example.com', // Replace with your email
        message_html: message,
    };

    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
    emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
    ).then((response) => {
        console.log('Email sent successfully', response);
        status.innerHTML = 'Email sent successfully!';
        form.reset();
    }, (error) => {
        console.log('Error sending email:', error);
        status.innerHTML = 'Error sending email. Please try again.';
    });
});