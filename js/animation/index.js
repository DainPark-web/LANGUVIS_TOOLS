
let tl = gsap.timeline();

tl.from(".an-home-title", {y: 1000, duration: 1.5, ease: "Power3.easeOut"}, 0.1)
tl.from(".an-home-sub", {y: 1000, duration: 1.5, ease: "Power3.easeOut"}, 0.2)
tl.from(".an-home-a", {
    opacity: 0, 
    duration: 1.5, 
    ease: "Power3.easeOut",
    stagger: {
        amount: 0.5,
        ease: "power3.inOut"
    }
}, 1.3)
tl.from(".home-nav-a", {opacity: 0, duraition: 1.5,ease: "Power3.easeOut" }, 1.8)



const a1 = document.querySelector(".home-a-event")
const a2 = document.querySelector(".home-a-event2")
const a3 = document.querySelector(".home-a-event3")

const cFn = (url) => {
    tl.reverse(2.5)
    setTimeout(() => {
        window.location.href=url;
      
    }, 3000)
}
a1.addEventListener("click", () => {
   
    cFn("./pages/tools/01.html")
})
a2.addEventListener("click", () => {
    cFn("./pages/tools/02.html")
})
a3.addEventListener("click", () => {
    cFn("./pages/tools/03.html")
})