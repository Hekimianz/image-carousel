export const carousel = function () {
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const dots = document.querySelectorAll(".dot");
  const image = document.querySelector(".carousel--img");
  const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
  let activeImg = "pic1.jpg";
  image.style.backgroundImage = `url(./assets/${activeImg})`;

  function render() {
    image.style.backgroundImage = `url(./assets/${activeImg})`;
    dots.forEach((dot) => {
      dot.classList.remove("active");
      if (dot.dataset.img === activeImg) {
        dot.classList.add("active");
      }
    });
  }

  arrowLeft.addEventListener("click", () => {
    if (activeImg === "pic1.jpg") {
      activeImg = "pic5.jpg";
    } else {
      activeImg = images[images.indexOf(activeImg) - 1];
    }
    render();
  });

  arrowRight.addEventListener("click", () => {
    if (activeImg === "pic5.jpg") {
      activeImg = "pic1.jpg";
    } else {
      activeImg = images[images.indexOf(activeImg) + 1];
    }
    render();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      activeImg = dot.dataset.img;
      render();
    });
  });
};
