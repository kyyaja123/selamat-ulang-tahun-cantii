/* ===== NAVIGASI ===== */

function showPage(id) {
    document.querySelectorAll(".page").forEach(p =>
      p.classList.remove("active")
    );
    document.getElementById(id).classList.add("active");
  }
  
  /* ===== SLIDER LOOP HALUS ===== */
  
  let index = 0;
  
  function startSlider() {
    const slides = document.getElementById("slides");
    if (!slides) return;
  
    const total = slides.children.length;
  
    setInterval(() => {
      index++;
      slides.style.transition = "transform 0.8s ease";
      slides.style.transform = `translateX(-${index * 300}px)`;
  
      if (index === total - 1) {
        setTimeout(() => {
          slides.style.transition = "none";
          index = 0;
          slides.style.transform = `translateX(0px)`;
        }, 800);
      }
  
    }, 5000);
  }
  
  startSlider();
  
  /* ===== CONFETTI ===== */
  
  function confettiBurst() {
    for (let i = 0; i < 120; i++) {
      let c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random()*window.innerWidth + "px";
      c.style.top = "-10px";
      c.style.background = blueTone();
      c.style.animationDuration = (Math.random()*2+2)+"s";
      document.body.appendChild(c);
      setTimeout(()=>c.remove(),4000);
    }
  }
  
  function blueTone() {
    const colors = ["#66ccff","#3399ff","#99ddff","#cceeff","#4db8ff"];
    return colors[Math.floor(Math.random()*colors.length)];
  }
  