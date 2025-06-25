let tl = gsap.timeline();

tl.to(".preloader", {
    y: "-100%",
    borderRadius: "10% 10% 36% 39% / 10% 10% 55% 56%",
    duration: 1,
    ease: "power2.out"
})
.add(() => {
    document.querySelector(".preloader").style.display = "none";
})
.from(".header-inner", {
    duration: 1,
    y: "-100%"
});

// text animation

let heading = document.querySelectorAll("h1");

tl.to(heading, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    onStart: function (){
        heading.forEach((htag) => (htag.style.transform = "translateY(100%)"));
    },
})

const expandDiv = document.getElementById("expand");
const video = document.getElementById("myVideo");
const videoSection = document.getElementById("videoSection");
const speed = 10;

function isInViewport(elem) {
  const rect = elem.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
}

function expanding() {
  if (isInViewport(videoSection)) {
    const sectionTop = videoSection.getBoundingClientRect().top;
    const scrollFraction = 1 - sectionTop / window.innerHeight;

    const newWidth = Math.min(Math.max(scrollFraction * 100, 10), 90);
    expandDiv.style.width = newWidth + "%";

    // Play the video when section comes into view
    if (video.paused) {
      video.play();
    }
  }
}

window.addEventListener("scroll", () => {
  requestAnimationFrame(expanding);
});


// enquiry form load

  window.addEventListener("load", () => {
    // Show modal after 5 seconds (5000 ms)
    setTimeout(() => {
      document.getElementById("enquiryModal").style.display = "block";
    }, 5000);

    // Close modal when X is clicked
    document.getElementById("closeModal").addEventListener("click", () => {
      document.getElementById("enquiryModal").style.display = "none";
    });

    // Optional: Close modal if user clicks outside the form
    window.addEventListener("click", (e) => {
      if (e.target.id === "enquiryModal") {
        document.getElementById("enquiryModal").style.display = "none";
      }
    });
  });

