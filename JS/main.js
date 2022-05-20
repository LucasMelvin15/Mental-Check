const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")


 hamburger.addEventListener('click',() =>{
     hamburger.classList.toggle("active")
     navMenu.classList.toggle("active")
 })

 document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click" ,()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}) )


//swiper js section

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    
    
  });