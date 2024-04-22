gsap.registerPlugin(ScrollTrigger);
const p1 = document.querySelectorAll(".p1");
const p2 = document.querySelectorAll(".p2");

var tl = gsap.timeline();

var image = document.getElementsByClassName("h-img");
new simpleParallax(image, {
  scale: 1.5,
});

document.addEventListener("mousemove", function (details) {
  document.querySelectorAll(".glass-elem").forEach((elem) => {
    const position = elem.getAttribute("value");
    console.log(position);
    var x = (window.innerWidth - details.clientX) / 50;
    var y = (window.innerHeight - details.clientY) / 50;

    elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

tl.to(
  ".p1",
  {
    y: 60,
    scrollTrigger: {
      trigger: "#hero",
      scroller: "body",
      start: "top -40%",
      end: "top -60%",
      scrub: 2,
    },
  },
  "a"
);
tl.to(
  ".p2",
  {
    y: -70,
    scrollTrigger: {
      trigger: "#hero",
      scroller: "body",
      start: "top -40%",
      end: "top -60%",
      scrub: 2,
    },
  },
  "a"
);
tl.to(
  ".paradise-btm",
  {
    x: 70,
    scrollTrigger: {
      trigger: "#hero",
      scroller: "body",
      start: "top -40%",
      end: "top -60%",
      scrub: 2,
    },
  },
  "a"
);
tl.to(
  ".sec-1-top",
  {
    x: 70,
    scrollTrigger: {
      trigger: "#hero",
      scroller: "body",
      start: "top -40%",
      end: "top -60%",
      scrub: 2,
    },
  },
  "a"
);
tl.to(
  ".sec-1-btn",
  {
    x: -70,
    scrollTrigger: {
      trigger: "#hero",
      scroller: "body",
      start: "top -40%",
      end: "top -60%",
      scrub: 2,
    },
  },
  "a"
);

gsap.to(".white-box", {
  y: 40,
  scrollTrigger: {
    trigger: "#rah",
    scroller: "body",
	// markers: tru,
    start: "top 60%",
    end: "top 52%",
    scrub: 1,
  },
});
