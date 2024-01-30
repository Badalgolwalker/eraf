gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none none reverse"
})


gsap.to('.img-container', {
  scale: 52,
  ease: "ease",
  scrollTrigger: {
    trigger: '.video-section',
    scrub: 3,
    start: "top top",
    end: "bottom",
    pin: true
  }
})


gsap.to('.right', {
  autoAlpha: 0,
  x: 500,
  duration: 1.5,
  scrollTrigger: {
    start: 1
  }
})
gsap.to('.left', {
  autoAlpha: 0,
  x: -500,
  duration: 1.5,
  scrollTrigger: {
    start: 1
  }
})


gsap.to('.txt-bottom', {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 2,
  scrollTrigger: {
    start: 2
  }
})


const tl = gsap.timeline();

tl.from('.left-side div', {
  y: 150,
  opacity: 0,
  stagger: {
    amount: .4
  },
  delay: .5
}).from('.right-side', { opacity: 0, duration: 2 }, .5)
  .to('.wrapper', { x: -window.innerWidth })



ScrollTrigger.create({
  animation: tl,
  trigger: '.wrapper',
  start: "top top",
  end: "+=600",
  scrub: 3,
  pin: true,
  ease: "ease"
})



gsap.utils.toArray('.col-1').forEach(image => {
  gsap.fromTo(image, {
    opacity: 0,
    x: 60,
    duration: 1.5
  }, {
    opacity: 1,
    x: -60,
    scrollTrigger: {
      trigger: image,
      scrub: 3,
      start: "30%",
      stagger: {
        amount: .4
      }
    }
  })
})


gsap.utils.toArray('.col-3').forEach(image => {
  gsap.fromTo(image, {
    opacity: 0,
    y: 60,
    duration: 1.5
  }, {
    opacity: 1,
    y: -60,
    scrollTrigger: {
      trigger: image,
      scrub: 3,
      start: "30%",
      stagger: {
        amount: .4
      }
    }
  })
})

gsap.utils.toArray('.col-2').forEach(text => {
  gsap.fromTo(text, {
    opacity: 0,
    duration: 1.5
  }, {
    opacity: 1,
    scrollTrigger: {
      trigger: text,
      // scrub: 3,
      start: "30%",
      stagger: {
        amount: .4
      }
    }
  })
})




const timeline = gsap.timeline();

timeline.from('.title span', {
  y: 150,
  skewY: 7,
  duration: 3
}).from('.txt-bottom', {
  letterSpacing: -10,
  opacity: 0,
  duration: 3
})






gsap.from(".navbar .logo", {
  opacity: 0,
  stagger: 0.25,
  y: -60,
  duration: 1
})

gsap.from(" .menu a, .btn", {
  opacity: 0,
  stagger: 0.5,
  y: -60,
  duration: 1
})


gsap.from('.img1',{
  opacity:0,
  stagger:0.3,
  duration:1,
  y:-60,
  delay:9
})

gsap.from('.img2',{
  opacity:0,
  stagger:0.3,
  duration:1,
  x:60,
  delay:10
})

gsap.from('.col-2 h1,.col-2 span,.col-2 .line, .col-2 p',{
  opacity:0,
  stagger:0.3,
  duration:0.8,
  delay:11
})

