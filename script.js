// Menambahkan event scroll untuk animasi
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Cek jika elemen sudah hampir terlihat
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible'); // Menambahkan kelas 'visible' untuk memicu animasi
        }
    });
});

// Carousel auto swipe dan tombol navigasi
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slideWidth = slides[0].offsetWidth;
    const slideContainer = document.querySelector('.slides');
    slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Auto slide setiap 3 detik
setInterval(nextSlide, 3000);

// Event listener untuk tombol
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
