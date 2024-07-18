document.addEventListener('DOMContentLoaded', () => {
    const subscribeForm = document.querySelector('.subscribe form');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const sliderControls = document.createElement('div');
    sliderControls.className = 'slider-controls';

    testimonialSlides.forEach((slide, index) => {
        const button = document.createElement('button');
        button.innerText = index + 1;
        button.addEventListener('click', () => {
            showSlide(index);
        });
        sliderControls.appendChild(button);
    });

    document.querySelector('.testimonials').appendChild(sliderControls);

    let currentSlide = 0;
    function showSlide(index) {
        testimonialSlides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
        currentSlide = index;
    }

    showSlide(currentSlide);

    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = subscribeForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        if (email) {
            alert(`Subscribed with ${email}`);
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
});
