const elements = document.querySelectorAll(".reveal");

function reveal() {
  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal(); // Ativa o efeito assim que o site abre