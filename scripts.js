document.addEventListener('DOMContentLoaded', function() {
    // Initialize Animated Slideshow
    const animatedSlideshows = document.querySelectorAll('.animated-slideshow');
    animatedSlideshows.forEach(initAnimatedSlideshow);

    function initAnimatedSlideshow(slideshow) {
        const slides = slideshow.querySelectorAll('.slide');
        let currentSlideIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }

        setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    // Initialize Photo Grid Popup
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        const image = item.querySelector('img');
        const imageUrl = image.getAttribute('src');
        
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const fullImageOverlay = document.createElement('div');
            fullImageOverlay.className = 'full-image-overlay';
            const fullImage = document.createElement('img');
            fullImage.src = imageUrl;
            fullImageOverlay.appendChild(fullImage);
            document.body.appendChild(fullImageOverlay);

            fullImageOverlay.addEventListener('click', () => {
                document.body.removeChild(fullImageOverlay);
            });
        });
    });
});
