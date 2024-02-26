
// lottie
// Set up the options for the Intersection Observer
var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

// Target the section you want to observe
var targetSection = document.getElementById('about');

// Function to handle the intersection changes
function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // Start the Lottie animation when the section is in view
            animation.play();
            observer.unobserve(entry.target);
        }
    });
}

// Create an Intersection Observer instance
var observer = new IntersectionObserver(handleIntersection, options);

// Observe the target section
observer.observe(targetSection);

// Load animation
var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: false, // Set autoplay to false initially
    path: '../data/json/whiteribbon.json'
});