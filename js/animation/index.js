
let tl = gsap.timeline();
tl.from(".an-nav-wrapper", {y: -200, duration: 2, opacity: 0, ease: Power3.
easeOut},0)
tl.from(".an-nav-logo", { duration: 2, opacity: 0, ease: Power3.
easeOut},0.4)
tl.from(".an-home-title1", {y: 200, duration: 2, opacity: 0, ease: Power3.
easeOut},0)
tl.from(".an-home-title2", {y: 200, duration: 2, opacity:0, ease: Power3.
easeOut},0.2)
tl.from(".an-home-text1", {y: 300, duration: 2, opacity:0, ease: Power3.
easeOut},0.4)