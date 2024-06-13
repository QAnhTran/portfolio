document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const projects = document.querySelectorAll(".project-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            projects.forEach(project => {
                if (filter === "all" || project.getAttribute("data-category") === filter) {
                    project.classList.add("show");
                } else {
                    project.classList.remove("show");
                }
            });
        });
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scroll({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
/*
document.addEventListener("DOMContentLoaded", function() {
    const slideshows = document.querySelectorAll(".slideshow");

    slideshows.forEach(slideshow => {
        let currentSlide = 0;
        const slides = slideshow.querySelectorAll(".slide");
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, idx) => {
                slide.style.display = idx === index ? "block" : "none";
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        showSlide(currentSlide);
        setInterval(nextSlide, 3000); // Change slide every 3 seconds
    });
});
*/