document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselItem = document.querySelectorAll(".carousel-item");
    const totalItem = carouselItem.length;
    let currentIndex = 0;    

    const changeSlide = () => {
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;     
    }
    const nextSlide = () => {
        currentIndex = (currentIndex + 1 ) % totalItem;
        changeSlide();  
    }
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalItem) % totalItem; 
        changeSlide();
    }
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    setInterval(nextSlide, 7000);

    changeSlide();
})