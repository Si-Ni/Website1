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
  if (wS + 100 > hT + hH - wH || wS - 100 > hT + hH - wH) {
    tl.to(".whoami-headline", { y: "0%", duration: 1 });
    tl.to(".whoami-text", { y: "0%", duration: 1 });
  }
  let hT2 = $("#qualifications").offset().top,
    hH2 = $("#qualifications").outerHeight(),
    wH2 = $(window).height(),
    wS2 = $(this).scrollTop();
  if (wS2 + 100 > hT2 + hH2 - wH2 || wS2 - 100 > hT2 + hH2 - wH2) {
    t2.to(".headline-q", { y: "0%", duration: 1 });
    t2.to(".text-q", { y: "0%", duration: 1 });
  }
  let hT3 = $("#freetime").offset().top,
    hH3 = $("#freetime").outerHeight(),
    wH3 = $(window).height(),
    wS3 = $(this).scrollTop();
  if (wS3 + 100 > hT3 + hH3 - wH3 || wS3 - 100 > hT3 + hH3 - wH3) {
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
