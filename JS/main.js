 const hamburger = document.querySelector('.hamburger')
 const navbar = document.querySelector('.nav-menu')
  hamburger.addEventListener('click',() =>{
      hamburger.classList.toggle("active")
      nav-menu.classList.toggle("active")
  })

  document.querySelectorAll(".navbar").forEach(n => n.addEventListener("click" ,()=>{
      hamburger.classList.remove("active")
      nav-menu.classList.remove("active")
  }) )