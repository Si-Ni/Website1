const t4 = gsap.timeline({ defaults: { ease: "power1.out" } });
let check = false;

//t4.to(".slider", { y: "-100%", duration: 1.5, delay: 5.5 });
//t4.to(".intro", { y: "-100%", duration: 1 }, "-=1");
t4.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1, delay: 6.5 });
t4.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
t4.fromTo(
  ".learn-more-btn",
  { opacity: 0 },
  { opacity: 1, duration: 1, onComplete: () => (check = true) },
  "-=1"
);

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
const t2 = gsap.timeline({ defaults: { ease: "power1.out" } });
const t3 = gsap.timeline({ defaults: { ease: "power1.out" } });

function scrollWhoami() {
  let element = document.getElementById("whoami");
  element.scrollIntoView({ block: "end", behavior: "smooth" });
  tl.to(".whoami-headline", { y: "0%", duration: 1, delay: 0.5 });
  tl.to(".whoami-text", { y: "0%", duration: 1 });
}

$(window).scroll(function () {
  let hT = $("#whoami").offset().top,
    hH = $("#whoami").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if ((wS + 300 > hT + hH - wH || wS - 300 > hT + hH - wH) && check) {
    tl.to(".whoami-headline", { y: "0%", duration: 1 });
    tl.to(".whoami-text", { y: "0%", duration: 1 });
  }
  let hT2 = $("#qualifications").offset().top,
    hH2 = $("#qualifications").outerHeight(),
    wH2 = $(window).height(),
    wS2 = $(this).scrollTop();
  if ((wS2 + 300 > hT2 + hH2 - wH2 || wS2 - 300 > hT2 + hH2 - wH2) && check) {
    t2.to(".headline-q", { y: "0%", duration: 1 });
    t2.to(".text-q", { y: "0%", duration: 1 });
  }
  let hT3 = $("#freetime").offset().top,
    hH3 = $("#freetime").outerHeight(),
    wH3 = $(window).height(),
    wS3 = $(this).scrollTop();
  if ((wS3 + 300 > hT3 + hH3 - wH3 || wS3 - 300 > hT3 + hH3 - wH3) && check) {
    t3.to(".freetime-headline", { y: "0%", duration: 1 });
    t3.to(".freetime-text", { y: "0%", duration: 1 });
  }
});

function scrollQualifications() {
  let element = document.getElementById("qualifications");
  element.scrollIntoView({ block: "end", behavior: "smooth" });
  t2.to(".headline-q", { y: "0%", duration: 1, delay: 0.5 });
  t2.to(".text-q", { y: "0%", duration: 1 });
}

function scrollFreetime() {
  let element = document.getElementById("freetime");
  element.scrollIntoView({ block: "end", behavior: "smooth" });
  t3.to(".freetime-headline", { y: "0%", duration: 1, delay: 0.5 });
  t3.to(".freetime-text", { y: "0%", duration: 1 });
}
