const bar = document.querySelector(".bars")
const close = document.querySelector(".close")
const menu = document.querySelector(".menu")

bar.addEventListener("click", () => {
    menu.classList.add("active")

    gsap.from(".menu", {
        opacity: 0,
        duration:.3
    
    })
    gsap.from(".menu ul", {
        opacity: 0,
        x:-300,
    })
})

close.addEventListener("click", () => {
    menu.classList.remove("active")
})

function animateContent(selector){
    selector.forEach(selector => {
        gsap.from(selector, {
            opacity: 0,
            y:100,
            duration:.5,
            delay:0.2,
            stagger:0.2
        })
    });
}

function scrollAnimation(triggerSelector, boxSelector){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: triggerSelector,
            scrub: 1,
            start: "top 70%",
            end: "bottom 80%",
        }
    })
    boxSelector.forEach(box => {
        tl.from(box, {
            y: 100,
            opacity: 0,
            duration: 1
        })
    });
}

function swipeAnimation(triggerSelector, boxSelector){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: triggerSelector,
            scrub: 1,
            start: "top 50%",
            end: "top 100%",
        }
    })
    boxSelector.forEach(box => {
        tl.to(box, {
            x: 0,
            opacity: 1,
            duration: 1,
        })
    });
}

function galleryAnimation(triggerSelector, boxSelector){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: triggerSelector,
            scrub: 1,
            start: "top 100%",
            end: "bottom 100%",
        }
    })
    boxSelector.forEach(box => {
        tl.from(box, {
            y: 100,
            opacity: 0,
            duration: 1,
        })
    });
}


animateContent([".content", ".search"])

scrollAnimation(".travel .container", [".travel .container .box1", ".travel .container .box2", ".travel .container .box3"])

swipeAnimation("#destinations", ["#destinations .heading", "#destinations .content"])

galleryAnimation("#destinations .gallery", ["#destinations .gallery .box1", "#destinations .gallery .box2", "#destinations .gallery .box3", "#destinations .gallery .box4", "#destinations .gallery .box5"])

galleryAnimation("#packages .gallery", ["#packages .gallery .box1", "#packages .gallery .box2", "#packages .gallery .box3", "#packages .gallery .box4", "#packages .gallery .box5"])

scrollAnimation("#testimonial .container", ["#testimonial .container .label", "#testimonial .container .heading", "#testimonial .container .paragraph"])

galleryAnimation("#testimonial .voices", ["#testimonial .voices .box1", "#testimonial .voices .box2", "#testimonial .voices .box3", "#testimonial .voices .box4", "#testimonial .voices .box5", "#testimonial .voices .box6"])

swipeAnimation("#article", ["#article .latest-article", "#article .box1", "#article .box2", "#article .box3", "#article .box4"])
