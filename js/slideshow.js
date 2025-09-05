document.addEventListener('DOMContentLoaded', function() {
    // Initialize all project slideshows
    const projectSlideshows = document.querySelectorAll('.project-image-slideshow');
    
    projectSlideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.slide');
        const prevBtn = slideshow.querySelector('.prev-btn');
        const nextBtn = slideshow.querySelector('.next-btn');
        let currentSlide = 0;
        
        // Show first slide
        slides[currentSlide].classList.add('active');
        
        // Function to show a specific slide
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = index;
            if (currentSlide >= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            slides[currentSlide].classList.add('active');
        }
        
        // Event listeners for buttons
        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        
        // Auto-advance slides every 5 seconds
        setInterval(() => showSlide(currentSlide + 1), 5000);
    });
}); 