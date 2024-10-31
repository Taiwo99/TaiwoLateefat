var typed = new Typed(".text",{
    strings:["Frontend Developer", "Web Desiger", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})

const hamburger = document.querySelector(".ham-menu")
const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})

document.querySelectorAll(".navbar").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active")
        nav.classList.remove("active")
    })
)
 