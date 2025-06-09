document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const navbar = document.querySelector(".navbar")
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")
  const faqItems = document.querySelectorAll(".faq-item")
  const partnerCards = document.querySelectorAll(".partner-card")
  const modalOverlay = document.querySelector(".modal-overlay")
  const closeModal = document.querySelector(".close-modal")
  const filterButtons = document.querySelectorAll(".filter-button")
  let lastScrollTop = 0

  
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


  // Event Listeners
  window.addEventListener("scroll", handleScroll)
  hamburger.addEventListener("click", toggleMenu)

  // Initialize FAQ accordions
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      item.classList.toggle("active")
    })
  })




  
  // Contact Form Submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Simulate form submission
      const submitButton = this.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent

      submitButton.disabled = true
      submitButton.textContent = "Enviando..."

      // Simulate API call
      setTimeout(() => {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
        contactForm.reset()
        submitButton.disabled = false
        submitButton.textContent = originalText
      }, 1500)
    })
  }

  // Functions
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // Navbar hide/show on scroll
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.classList.add("hidden")
    } else {
      navbar.classList.remove("hidden")
    }

    lastScrollTop = scrollTop

    // Animate elements on scroll

  }

  function toggleMenu() {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
    document.body.classList.toggle("no-scroll")
  }

  
  // Hero Logo Animation
  const heroLogo = document.querySelector(".hero-logo")
  if (heroLogo) {
    heroLogo.addEventListener("mouseover", () => {
      heroLogo.style.filter = "drop-shadow(0 0 15px var(--primary-color))"
    })

    heroLogo.addEventListener("mouseout", () => {
      heroLogo.style.filter = ""
    })
  }

  const heroMainContent = document.getElementById("heroMainContent");
  const heroAdContent = document.getElementById("heroAdContent");
  const heroSlider = document.getElementById("heroSlider");
  
  // Efeito de entrada
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      heroMainContent.classList.add("mosaic-in");
    }, 100);
  });
  
  let showingMain = true;
  function toggleHeroContent() {
    if (heroMainContent && heroAdContent && heroSlider) {
      heroSlider.classList.add("slide-left");
      setTimeout(() => {
        if (showingMain) {
          heroMainContent.style.display = "none";
          heroAdContent.style.display = "flex";
          heroAdContent.classList.add("mosaic-in");
          heroMainContent.classList.remove("mosaic-in");
        } else {
          heroAdContent.style.display = "none";
          heroMainContent.style.display = "flex";
          heroMainContent.classList.add("mosaic-in");
          heroAdContent.classList.remove("mosaic-in");
        }
        heroSlider.classList.remove("slide-left");
        showingMain = !showingMain;
      }, 900); // tempo igual ao transition da .hero-slider
    }
  }
  
  setInterval(toggleHeroContent, 10000);

  

  // Video Card Hover Effects
  const videoCards = document.querySelectorAll(".video-card")
  videoCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      const playButton = card.querySelector(".play-button")
      if (playButton) {
        playButton.style.opacity = "1"
      }
    })

    card.addEventListener("mouseout", () => {
      const playButton = card.querySelector(".play-button")
      if (playButton) {
        playButton.style.opacity = "0"
      }
    })
  })
})


  // Partenrs Carroussel close to Footer
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const container = document.querySelector(".carousel-container");
  let slides = Array.from(track.children);
  const pauseTime = 2000;
  const slideTime = 3000;
  let paused = false;
  let timeout;

  function animateBrightness(img, from, to, duration = 1500) {
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const brightness = from + (to - from) * progress;
      img.style.filter = `brightness(${brightness.toFixed(2)})`;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  function activateZoom() {
    slides.forEach(s => {
      const img = s.querySelector("img");
      s.classList.remove("active");
      img.style.transform = "scale(1)";
      img.style.filter = "brightness(1)";
    });

    const activeSlide = slides[0];
    const activeImg = activeSlide.querySelector("img");
    activeSlide.classList.add("active");
    activeImg.style.transform = "scale(1.45)";
    animateBrightness(activeImg, 1, 1.5, 1500);
  }

  function next() {
    if (paused) return;
    track.style.transition = `transform ${slideTime}ms cubic-bezier(0.77, 0, 0.175, 1)`;
    track.style.transform = `translateX(-100%)`;
    track.addEventListener("transitionend", onTransitionEnd, { once: true });
  }

  function onTransitionEnd() {
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    const first = slides.shift();
    track.appendChild(first);
    slides.push(first);
    activateZoom();
    timeout = setTimeout(next, pauseTime);
  }

  slides.forEach(slide => {
    slide.querySelector("img").addEventListener("click", e => {
      const link = e.currentTarget.dataset.link;
      if (link) window.open(link, "_blank");
    });
  });

  container.addEventListener("mouseenter", () => {
    paused = true;
    clearTimeout(timeout);
    track.style.transition = '';
  });

  container.addEventListener("mouseleave", () => {
    paused = false;
    setTimeout(next, 300);
  });

  activateZoom();
  timeout = setTimeout(next, pauseTime);
});








// new partners live tab 
document.addEventListener("DOMContentLoaded", () => {
  const shineTrack = document.querySelector(".shine-carousel-track");
  const shineContainer = document.querySelector(".shine-carousel-container");
  let shineSlides = Array.from(shineTrack.children);
  const pauseTime = 2800;
  const slideTime = 2000;
  let shinePaused = false;
  let shineTimeout;

  function activateShine() {
    shineSlides.forEach(s => s.classList.remove("active"));
    shineSlides[0].classList.add("active");
  }

  function nextShine() {
    if (shinePaused) return;
    shineTrack.style.transition = `transform ${slideTime}ms ease-in-out`;
    shineTrack.style.transform = `translateX(-100%)`;
    shineTrack.addEventListener("transitionend", onShineTransitionEnd, { once: true });
  }

  function onShineTransitionEnd() {
    shineTrack.style.transition = 'none';
    shineTrack.style.transform = 'translateX(0)';
    const first = shineSlides.shift();
    shineTrack.appendChild(first);
    shineSlides.push(first);
    activateShine();
    shineTimeout = setTimeout(nextShine, pauseTime);
  }

  shineSlides.forEach(slide => {
    slide.querySelector("img").addEventListener("click", e => {
      const link = e.currentTarget.dataset.link;
      if (link) window.open(link, "_blank");
    });
  });

  shineContainer.addEventListener("mouseenter", () => {
    shinePaused = true;
    clearTimeout(shineTimeout);
    shineTrack.style.transition = '';
  });

  shineContainer.addEventListener("mouseleave", () => {
    shinePaused = false;
    setTimeout(nextShine, 300);
  });

  activateShine();
  shineTimeout = setTimeout(nextShine, pauseTime);
});
  
  
  
  
  
      

  const canvas = document.getElementById('universe');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  
  const mouse = { x: w/2, y: h/2, prevX: w/2, prevY: h/2 };
  let time = 0;
  let mouseVelocity = { x: 0, y: 0 };
  let backgroundRotation = 0;
  
  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    initAll();
  });
  
  canvas.addEventListener("mousemove", e => {
    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    mouseVelocity.x = mouse.x - mouse.prevX;
    mouseVelocity.y = mouse.y - mouse.prevY;
  });
  
  // === SISTEMA DE ELEMENTOS ===
  let stars = [];
  let cosmicDust = [];
  let meteors = [];
  let comets = [];
  let explosions = [];
  let supernovaTimer = 0;
  let supernovas = [];
  let nebulae = [];
  let spacecrafts = [];
  let iss = null;
  
  function initAll() {
    initStarField();
    initCosmicDust();
    initNebulae();
    supernovaTimer = Math.random() * 1000 + 500;
  }
  
  // === CAMPO DE ESTRELAS DISTRIBUÍDO ===
  function initStarField() {
    stars = [];
    
    for (let layer = 1; layer <= 5; layer++) {
      const count = Math.floor(3000 / layer); // Aumentado para mais estrelas
      for (let i = 0; i < count; i++) {
        // Distribuição uniforme por toda a tela
        const x = Math.random() * w;
        const y = Math.random() * h;
        
        stars.push({
          x: x,
          y: y,
          originalX: x,
          originalY: y,
          size: (Math.random() * 1.2 + 0.3) * (layer * 0.2),
          brightness: Math.random() * 0.8 + 0.2,
          color: getStarColor(),
          layer: layer,
          speed: layer * 0.05,
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.01 + 0.002,
          temperature: Math.random() * 10000 + 3000,
          destroyed: false,
          // Movimento orbital sutil ao redor de pontos locais
          localCenterX: x + (Math.random() - 0.5) * 100,
          localCenterY: y + (Math.random() - 0.5) * 100,
          orbitRadius: Math.random() * 20 + 5,
          orbitAngle: Math.random() * Math.PI * 2,
          orbitSpeed: (Math.random() * 0.0005 + 0.0001) * (6 - layer)
        });
      }
    }
  }
  
  function getStarColor() {
    const temp = Math.random() * 10000 + 3000;
    if (temp < 3700) return { r: 255, g: 180, b: 120, temp };
    if (temp < 5200) return { r: 255, g: 220, b: 180, temp };
    if (temp < 6000) return { r: 255, g: 255, b: 220, temp };
    if (temp < 7500) return { r: 255, g: 255, b: 255, temp };
    return { r: 180, g: 200, b: 255, temp };
  }
  
  // === POEIRA CÓSMICA MAIS DINÂMICA ===
  function initCosmicDust() {
    cosmicDust = [];
    for (let i = 0; i < 400; i++) {
      cosmicDust.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.2 + 0.05,
        velocity: {
          x: (Math.random() - 0.5) * 0.4,
          y: (Math.random() - 0.5) * 0.3
        },
        color: { r: 200, g: 180, b: 255 },
        life: Math.random() * 1000 + 500,
        maxLife: 0,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.001
      });
    }
    cosmicDust.forEach(dust => dust.maxLife = dust.life);
  }
  
  // === NEBULOSAS DINÂMICAS ===
  function initNebulae() {
    nebulae = [];
    const nebulaCount = 4;
    
    for (let i = 0; i < nebulaCount; i++) {
      nebulae.push({
        x: w * (0.2 + Math.random() * 0.6),
        y: h * (0.2 + Math.random() * 0.6),
        radius: Math.random() * 300 + 200,
        hue: Math.random() * 360,
        opacity: Math.random() * 0.03 + 0.01,
        speed: {
          x: (Math.random() - 0.5) * 0.2,
          y: (Math.random() - 0.5) * 0.2
        },
        pulseSpeed: Math.random() * 0.001 + 0.0005,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
  }
  
  // === ESPAÇONAVES SUTIS ===
  function createSpacecraft() {
    // Chance muito baixa de criar espaçonave
    if (Math.random() < 0.003) {
      const side = Math.floor(Math.random() * 4);
      let startX, startY, targetX, targetY;
      
      switch(side) {
        case 0: // top -> bottom
          startX = Math.random() * w;
          startY = -30;
          targetX = Math.random() * w;
          targetY = h + 30;
          break;
        case 1: // right -> left
          startX = w + 30;
          startY = Math.random() * h;
          targetX = -30;
          targetY = Math.random() * h;
          break;
        case 2: // bottom -> top
          startX = Math.random() * w;
          startY = h + 30;
          targetX = Math.random() * w;
          targetY = -30;
          break;
        case 3: // left -> right
          startX = -30;
          startY = Math.random() * h;
          targetX = w + 30;
          targetY = Math.random() * h;
          break;
      }
      
      const dx = targetX - startX;
      const dy = targetY - startY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = Math.random() * 0.8 + 0.3; // Velocidade bem lenta
      
      const spacecraftTypes = ['fighter', 'cargo', 'probe'];
      const type = spacecraftTypes[Math.floor(Math.random() * spacecraftTypes.length)];
      
      spacecrafts.push({
        x: startX,
        y: startY,
        velocity: {
          x: (dx / distance) * speed,
          y: (dy / distance) * speed
        },
        type: type,
        size: Math.random() * 12 + 8, // Bem pequeno
        angle: Math.atan2(dy, dx),
        lights: [
          { offset: { x: 0, y: 0 }, color: 'red', phase: Math.random() * Math.PI * 2 },
          { offset: { x: 2, y: 1 }, color: 'green', phase: Math.random() * Math.PI * 2 },
          { offset: { x: 2, y: -1 }, color: 'blue', phase: Math.random() * Math.PI * 2 }
        ],
        opacity: 0,
        fadePhase: 'fadein',
        fadeTimer: 0,
        fadeDuration: 120, // Fade longo
        life: Math.random() * 1200 + 800
      });
    }
  }
  
  // === ISS (ESTAÇÃO ESPACIAL INTERNACIONAL) ===
  function createISS() {
    // Chance muito rara de criar a ISS
    if (Math.random() < 0.008 && !iss) {
      const side = Math.floor(Math.random() * 4);
      let startX, startY, targetX, targetY;
      
      switch(side) {
        case 0: // top -> bottom
          startX = Math.random() * w;
          startY = -40;
          targetX = Math.random() * w;
          targetY = h + 40;
          break;
        case 1: // right -> left
          startX = w + 40;
          startY = Math.random() * h;
          targetX = -40;
          targetY = Math.random() * h;
          break;
        case 2: // bottom -> top
          startX = Math.random() * w;
          startY = h + 40;
          targetX = Math.random() * w;
          targetY = -40;
          break;
        case 3: // left -> right
          startX = -40;
          startY = Math.random() * h;
          targetX = w + 40;
          targetY = Math.random() * h;
          break;
      }
      
      const dx = targetX - startX;
      const dy = targetY - startY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = 0.4; // Velocidade constante e lenta
      
      iss = {
        x: startX,
        y: startY,
        velocity: {
          x: (dx / distance) * speed,
          y: (dy / distance) * speed
        },
        size: 20, // Maior que espaçonaves normais
        angle: Math.atan2(dy, dx),
        rotation: 0,
        lights: [
          { offset: { x: -3, y: 0 }, color: 'white', phase: 0 },
          { offset: { x: 3, y: 0 }, color: 'white', phase: Math.PI },
          { offset: { x: 0, y: -2 }, color: 'red', phase: Math.PI/2 },
          { offset: { x: 0, y: 2 }, color: 'green', phase: Math.PI * 1.5 }
        ],
        opacity: 0,
        fadePhase: 'fadein',
        fadeTimer: 0,
        fadeDuration: 800, // Fade muito longo
        life: Math.random() * 1800 + 1200 // Vida muito longa
      };
    }
  }
  
  // === METEOROS E COMETAS ATRAVESSANDO A TELA ===
  function createMeteor() {
    if (Math.random() < 0.001) {
      const side = Math.floor(Math.random() * 4);
      let startX, startY, targetX, targetY;
      
      switch(side) {
        case 0: // top -> bottom
          startX = Math.random() * w;
          startY = -50;
          targetX = Math.random() * w;
          targetY = h + 50;
          break;
        case 1: // right -> left
          startX = w + 50;
          startY = Math.random() * h;
          targetX = -50;
          targetY = Math.random() * h;
          break;
        case 2: // bottom -> top
          startX = Math.random() * w;
          startY = h + 50;
          targetX = Math.random() * w;
          targetY = -50;
          break;
        case 3: // left -> right
          startX = -50;
          startY = Math.random() * h;
          targetX = w + 50;
          targetY = Math.random() * h;
          break;
      }
      
      const dx = targetX - startX;
      const dy = targetY - startY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = Math.random() * 1.2 + 0.8;
      
      meteors.push({
        x: startX,
        y: startY,
        velocity: {
          x: (dx / distance) * speed,
          y: (dy / distance) * speed
        },
        size: Math.random() * 1 + 1,
        trail: [],
        color: {
          r: 255,
          g: Math.floor(Math.random() * 100) + 155,
          b: Math.floor(Math.random() * 50) + 100
        },
        life: Math.random() * 800 + 600,
        maxLife: 0,
        fadePhase: 'fadein',
        fadeTimer: 0,
        fadeDuration: 60,
        opacity: 0,
        destroyed: false,
        crossingScreen: true
      });
      
      meteors[meteors.length - 1].maxLife = meteors[meteors.length - 1].life;
    }
  }
  
  function createComet() {
    if (Math.random() < 0.0008) {
      const side = Math.floor(Math.random() * 4);
      let startX, startY, targetX, targetY;
      
      switch(side) {
        case 0: // top -> bottom
          startX = Math.random() * w;
          startY = -80;
          targetX = Math.random() * w;
          targetY = h + 80;
          break;
        case 1: // right -> left
          startX = w + 80;
          startY = Math.random() * h;
          targetX = -80;
          targetY = Math.random() * h;
          break;
        case 2: // bottom -> top
          startX = Math.random() * w;
          startY = h + 80;
          targetX = Math.random() * w;
          targetY = -80;
          break;
        case 3: // left -> right
          startX = -80;
          startY = Math.random() * h;
          targetX = w + 80;
          targetY = Math.random() * h;
          break;
      }
      
      const dx = targetX - startX;
      const dy = targetY - startY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = Math.random() * 1.0 + 0.5;
      
      comets.push({
        x: startX,
        y: startY,
        velocity: {
          x: (dx / distance) * speed,
          y: (dy / distance) * speed
        },
        size: Math.random() * 1 + 2,
        trail: [],
        trailLength: Math.floor(Math.random() * 60) + 70,
        color: {
          r: Math.floor(Math.random() * 55) + 200,
          g: Math.floor(Math.random() * 55) + 200,
          b: Math.floor(Math.random() * 100) + 155
        },
        life: Math.random() * 1000 + 800,
        maxLife: 0,
        fadePhase: 'fadein',
        fadeTimer: 0,
        fadeDuration: 80,
        opacity: 0,
        destroyed: false,
        crossingScreen: true
      });
      
      comets[comets.length - 1].maxLife = comets[comets.length - 1].life;
    }
  }
  
  // === SISTEMA DE EXPLOSÕES SUTIS ===
  function createSubtleExplosion(x, y, size, color) {
    explosions.push({
      x: x,
      y: y,
      particles: [],
      life: 40,
      maxLife: 40
    });
    
    const explosion = explosions[explosions.length - 1];
    const particleCount = Math.floor(size) + 4;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.3;
      const speed = Math.random() * 2 + 1;
      
      explosion.particles.push({
        x: x,
        y: y,
        velocity: {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed
        },
        size: Math.random() * 2 + 0.5,
        color: {
          r: Math.min(255, color.r + (Math.random() - 0.5) * 50),
          g: Math.min(255, color.g + (Math.random() - 0.5) * 50),
          b: Math.min(255, color.b + (Math.random() - 0.5) * 50)
        },
        life: Math.random() * 20 + 15,
        maxLife: 0
      });
      
      explosion.particles[i].maxLife = explosion.particles[i].life;
    }
  }
  
  // === SISTEMA DE COLISÕES REDUZIDO ===
  function checkCollisions() {
    // Verificar colisões apenas para cometas (com chance muito reduzida)
    for (let i = comets.length - 1; i >= 0; i--) {
      const comet = comets[i];
      if (comet.destroyed || comet.fadePhase === 'fadein') continue;
      
      if (Math.random() > 0.5) continue; // Apenas 5% de chance
      
      for (let j = stars.length - 1; j >= 0; j--) {
        const star = stars[j];
        if (star.destroyed) continue;
        
        const dx = comet.x - star.x;
        const dy = comet.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const collisionDistance = comet.size + star.size + 3;
        
        if (distance < collisionDistance) {
          const explosionX = (comet.x + star.x) / 2;
          const explosionY = (comet.y + star.y) / 2;
          
          createSubtleExplosion(explosionX, explosionY, (comet.size + star.size) / 2, {
            r: (comet.color.r + star.color.r) / 2,
            g: (comet.color.g + star.color.g) / 2,
            b: (comet.color.b + star.color.b) / 2
          });
          
          star.destroyed = true;
          
          setTimeout(() => {
            if (j < stars.length) {
              const newX = Math.random() * w;
              const newY = Math.random() * h;
              stars[j] = {
                x: newX,
                y: newY,
                originalX: newX,
                originalY: newY,
                size: (Math.random() * 1.2 + 0.3) * (star.layer * 0.2),
                brightness: Math.random() * 0.8 + 0.2,
                color: getStarColor(),
                layer: star.layer,
                speed: star.layer * 0.05,
                twinkle: Math.random() * Math.PI * 2,
                twinkleSpeed: Math.random() * 0.01 + 0.002,
                temperature: Math.random() * 10000 + 3000,
                destroyed: false,
                localCenterX: newX + (Math.random() - 0.5) * 100,
                localCenterY: newY + (Math.random() - 0.5) * 100,
                orbitRadius: Math.random() * 20 + 5,
                orbitAngle: Math.random() * Math.PI * 2,
                orbitSpeed: (Math.random() * 0.0005 + 0.0001) * (6 - star.layer)
              };
            }
          }, Math.random() * 3000 + 2000);
          
          break;
        }
      }
    }
  }
  
  // === SUPERNOVAS RARAS ===
  function checkSupernova() {
    supernovaTimer--;
    
    if (supernovaTimer <= 0) {
      supernovas.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: 0,
        maxRadius: Math.random() * 50 + 25,
        expandSpeed: 0.5,
        contractSpeed: 0.2,
        phase: 'expand',
        peakDuration: 30,
        peakTimer: 0,
        opacity: 0,
        maxOpacity: Math.random() * 0.4 + 0.2,
        color: {
          r: 255,
          g: Math.floor(Math.random() * 100) + 150,
          b: Math.floor(Math.random() * 50)
        }
      });
      
      supernovaTimer = Math.random() * 2000 + 1000;
    }
  }
  
  // === EFEITOS SUTIS DE MOUSE ===
  function applySubtleMouseEffects(object) {
    if (object.destroyed) return;
    
    // Atualizar órbita local
    object.orbitAngle += object.orbitSpeed;
    
    // Calcular nova posição orbital
    const orbitX = Math.cos(object.orbitAngle) * object.orbitRadius;
    const orbitY = Math.sin(object.orbitAngle) * object.orbitRadius;
    
    object.originalX = object.localCenterX + orbitX;
    object.originalY = object.localCenterY + orbitY;
    
    // Manter dentro dos limites da tela
    if (object.originalX < 0) object.localCenterX += w;
    if (object.originalX > w) object.localCenterX -= w;
    if (object.originalY < 0) object.localCenterY += h;
    if (object.originalY > h) object.localCenterY -= h;
    
    const dx = object.x - mouse.x;
    const dy = object.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 200;
    
    if (distance < maxDistance && distance > 0) {
      const force = (maxDistance - distance) / maxDistance;
      const effectStrength = force * force * 20;
      
      const angle = Math.atan2(dy, dx);
      object.x = object.originalX + Math.cos(angle) * effectStrength;
      object.y = object.originalY + Math.sin(angle) * effectStrength;
    } else {
      object.x += (object.originalX - object.x) * 0.02;
      object.y += (object.originalY - object.y) * 0.02;
    }
  }
  
  // === RENDERIZAÇÃO ===
  function drawBackground() {
    backgroundRotation += 0.0001;
    
    const bgGradient = ctx.createRadialGradient(
      w/2, h/2, 0,
      w/2, h/2, Math.max(w, h)
    );
    bgGradient.addColorStop(0, 'rgba(10, 5, 20, 1)');
    bgGradient.addColorStop(0.5, 'rgba(5, 2, 12, 1)');
    bgGradient.addColorStop(1, 'rgba(0, 0, 3, 1)');
    
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, w, h);
  }
  
  function drawNebulae() {
    for (let i = 0; i < nebulae.length; i++) {
      const nebula = nebulae[i];
      
      nebula.x += nebula.speed.x;
      nebula.y += nebula.speed.y;
      
      if (nebula.x < -nebula.radius || nebula.x > w + nebula.radius) {
        nebula.speed.x *= -1;
      }
      if (nebula.y < -nebula.radius || nebula.y > h + nebula.radius) {
        nebula.speed.y *= -1;
      }
      
      const pulseScale = Math.sin(time * nebula.pulseSpeed + nebula.pulsePhase) * 0.2 + 1;
      const currentRadius = nebula.radius * pulseScale;
      
      const nebulaGradient = ctx.createRadialGradient(
        nebula.x, nebula.y, 0,
        nebula.x, nebula.y, currentRadius
      );
      
      const hueShift = Math.sin(time * 0.0005) * 20;
      const currentHue = (nebula.hue + hueShift) % 360;
      
      nebulaGradient.addColorStop(0, `hsla(${currentHue}, 70%, 40%, ${nebula.opacity * 1.5})`);
      nebulaGradient.addColorStop(0.5, `hsla(${currentHue + 30}, 60%, 30%, ${nebula.opacity})`);
      nebulaGradient.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = nebulaGradient;
      ctx.beginPath();
      ctx.arc(nebula.x, nebula.y, currentRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  function drawStars() {
    for (let star of stars) {
      if (star.destroyed) continue;
      
      applySubtleMouseEffects(star);
      
      star.twinkle += star.twinkleSpeed;
      
      const twinkle = Math.sin(star.twinkle) * 0.3 + 0.7;
      const brightness = star.brightness * twinkle;
      
      const parallaxX = mouseVelocity.x * star.layer * 0.02;
      const parallaxY = mouseVelocity.y * star.layer * 0.02;
      
      if (star.size > 1) {
        ctx.shadowColor = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0.5)`;
        ctx.shadowBlur = star.size * 2;
      }
      
      ctx.beginPath();
      ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${brightness})`;
      ctx.arc(star.x + parallaxX, star.y + parallaxY, star.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowBlur = 0;
    }
  }
  
  function drawCosmicDust() {
    for (let i = cosmicDust.length - 1; i >= 0; i--) {
      const dust = cosmicDust[i];
      
      dust.angle += dust.rotationSpeed;
      
      const circularX = Math.cos(dust.angle) * 0.2;
      const circularY = Math.sin(dust.angle) * 0.2;
      
      dust.x += dust.velocity.x + circularX;
      dust.y += dust.velocity.y + circularY;
      dust.life--;
      
      const dx = dust.x - mouse.x;
      const dy = dust.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        dust.velocity.x += (dx / distance) * force * 0.05;
        dust.velocity.y += (dy / distance) * force * 0.05;
      }
      
      const lifeRatio = dust.life / dust.maxLife;
      const opacity = dust.opacity * lifeRatio;
      
      ctx.beginPath();
      ctx.fillStyle = `rgba(${dust.color.r}, ${dust.color.g}, ${dust.color.b}, ${opacity})`;
      ctx.arc(dust.x, dust.y, dust.size, 0, Math.PI * 2);
      ctx.fill();
      
      if (dust.life <= 0 || dust.x < -50 || dust.x > w + 50 || dust.y < -50 || dust.y > h + 50) {
        cosmicDust.splice(i, 1);
        cosmicDust.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.2 + 0.05,
          velocity: {
            x: (Math.random() - 0.5) * 0.4,
            y: (Math.random() - 0.5) * 0.3
          },
          color: { r: 200, g: 180, b: 255 },
          life: Math.random() * 1000 + 500,
          maxLife: 0,
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.001
        });
        cosmicDust[cosmicDust.length - 1].maxLife = cosmicDust[cosmicDust.length - 1].life;
      }
    }
  }
  
  function drawSpacecrafts() {
    createSpacecraft();
    
    for (let i = spacecrafts.length - 1; i >= 0; i--) {
      const craft = spacecrafts[i];
      
      // Gerenciar fases de fade
      craft.fadeTimer++;
      
      switch(craft.fadePhase) {
        case 'fadein':
          craft.opacity = Math.min(0.7, craft.fadeTimer / craft.fadeDuration); // Opacidade máxima reduzida
          if (craft.fadeTimer >= craft.fadeDuration) {
            craft.fadePhase = 'active';
            craft.fadeTimer = 0;
          }
          break;
          
        case 'active':
          craft.opacity = 0.7;
          craft.life--;
          
          if (craft.life < 100 || 
              craft.x < -100 || craft.x > w + 100 || 
              craft.y < -100 || craft.y > h + 100) {
            craft.fadePhase = 'fadeout';
            craft.fadeTimer = 0;
          }
          break;
          
        case 'fadeout':
          craft.opacity = Math.max(0, 0.7 - (craft.fadeTimer / craft.fadeDuration));
          if (craft.opacity <= 0) {
            spacecrafts.splice(i, 1);
            continue;
          }
          break;
      }
      
      craft.x += craft.velocity.x;
      craft.y += craft.velocity.y;
      
      // Desenhar corpo da espaçonave (muito sutil)
      ctx.save();
      ctx.translate(craft.x, craft.y);
      ctx.rotate(craft.angle);
      
      ctx.fillStyle = `rgba(60, 60, 80, ${craft.opacity * 0.6})`;
      
      switch(craft.type) {
        case 'fighter':
          // Triângulo pequeno
          ctx.beginPath();
          ctx.moveTo(craft.size, 0);
          ctx.lineTo(-craft.size/2, -craft.size/3);
          ctx.lineTo(-craft.size/2, craft.size/3);
          ctx.closePath();
          ctx.fill();
          break;
          
        case 'cargo':
          // Retângulo pequeno
          ctx.fillRect(-craft.size/2, -craft.size/4, craft.size, craft.size/2);
          break;
          
        case 'probe':
          // Círculo pequeno
          ctx.beginPath();
          ctx.arc(0, 0, craft.size/2, 0, Math.PI * 2);
          ctx.fill();
          break;
      }
      
      // Desenhar luzes piscando
      for (let light of craft.lights) {
        const lightOpacity = (Math.sin(time * 0.05 + light.phase) + 1) * 0.5;
        const lightX = light.offset.x;
        const lightY = light.offset.y;
        
        ctx.fillStyle = `rgba(${light.color === 'red' ? '255,100,100' : 
                                light.color === 'green' ? '100,255,100' : 
                                light.color === 'blue' ? '100,100,255' : '255,255,255'}, ${lightOpacity * craft.opacity * 0.8})`;
        
        ctx.beginPath();
        ctx.arc(lightX, lightY, 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    }
  }
  
  function drawISS() {
    createISS();
    
    if (iss) {
      // Gerenciar fases de fade
      iss.fadeTimer++;
      
      switch(iss.fadePhase) {
        case 'fadein':
          iss.opacity = Math.min(0.8, iss.fadeTimer / iss.fadeDuration);
          if (iss.fadeTimer >= iss.fadeDuration) {
            iss.fadePhase = 'active';
            iss.fadeTimer = 0;
          }
          break;
          
        case 'active':
          iss.opacity = 0.8;
          iss.life--;
          
          if (iss.life < 150 || 
              iss.x < -150 || iss.x > w + 150 || 
              iss.y < -150 || iss.y > h + 150) {
            iss.fadePhase = 'fadeout';
            iss.fadeTimer = 0;
          }
          break;
          
        case 'fadeout':
          iss.opacity = Math.max(0, 0.8 - (iss.fadeTimer / iss.fadeDuration));
          if (iss.opacity <= 0) {
            iss = null;
            return;
          }
          break;
      }
      
      iss.x += iss.velocity.x;
      iss.y += iss.velocity.y;
      iss.rotation += 0.002; // Rotação lenta
      
      // Desenhar ISS (estrutura mais complexa)
      ctx.save();
      ctx.translate(iss.x, iss.y);
      ctx.rotate(iss.rotation);
      
      // Corpo principal
      ctx.fillStyle = `rgba(180, 180, 200, ${iss.opacity * 0.7})`;
      ctx.fillRect(-iss.size/2, -iss.size/6, iss.size, iss.size/3);
      
      // Painéis solares
      ctx.fillStyle = `rgba(100, 100, 150, ${iss.opacity * 0.5})`;
      ctx.fillRect(-iss.size, -iss.size/8, iss.size/3, iss.size/4);
      ctx.fillRect(iss.size * 2/3, -iss.size/8, iss.size/3, iss.size/4);
      
      // Módulos
      ctx.fillStyle = `rgba(160, 160, 180, ${iss.opacity * 0.6})`;
      ctx.fillRect(-iss.size/4, -iss.size/4, iss.size/2, iss.size/8);
      
      // Luzes da ISS
      for (let light of iss.lights) {
        const lightOpacity = (Math.sin(time * 0.03 + light.phase) + 1) * 0.5;
        const lightX = light.offset.x;
        const lightY = light.offset.y;
        
        ctx.fillStyle = `rgba(${light.color === 'red' ? '255,150,150' : 
                                light.color === 'green' ? '150,255,150' : '255,255,255'}, ${lightOpacity * iss.opacity})`;
        
        ctx.beginPath();
        ctx.arc(lightX, lightY, 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    }
  }
  
  function drawMeteors() {
    createMeteor();
    
    for (let i = meteors.length - 1; i >= 0; i--) {
      const meteor = meteors[i];
      
      if (meteor.destroyed) {
        meteors.splice(i, 1);
        continue;
      }
      
      meteor.fadeTimer++;
      
      switch(meteor.fadePhase) {
        case 'fadein':
          meteor.opacity = Math.min(1, meteor.fadeTimer / meteor.fadeDuration);
          if (meteor.fadeTimer >= meteor.fadeDuration) {
            meteor.fadePhase = 'active';
            meteor.fadeTimer = 0;
          }
          break;
          
        case 'active':
          meteor.opacity = 1;
          meteor.life--;
          
          let shouldFadeOut = meteor.life < 100 || 
                             meteor.x < -200 || meteor.x > w + 200 || 
                             meteor.y < -200 || meteor.y > h + 200;
          
          if (shouldFadeOut) {
            meteor.fadePhase = 'fadeout';
            meteor.fadeTimer = 0;
          }
          break;
          
        case 'fadeout':
          meteor.opacity = Math.max(0, 1 - (meteor.fadeTimer / meteor.fadeDuration));
          if (meteor.opacity <= 0) {
            if (Math.random() < 0.1) {
              createSubtleExplosion(meteor.x, meteor.y, meteor.size * 0.5, meteor.color);
            }
            meteors.splice(i, 1);
            continue;
          }
          break;
      }
      
      meteor.trail.push({ x: meteor.x, y: meteor.y, opacity: meteor.opacity });
      if (meteor.trail.length > 30) meteor.trail.shift();
      
      meteor.x += meteor.velocity.x;
      meteor.y += meteor.velocity.y;
      
      for (let j = 0; j < meteor.trail.length - 1; j++) {
        const trailPoint = meteor.trail[j];
        const alpha = (j / meteor.trail.length) * 0.6 * trailPoint.opacity;
        const width = meteor.size * (j / meteor.trail.length) * 0.8;
        
        ctx.strokeStyle = `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${alpha})`;
        ctx.lineWidth = Math.max(0.5, width);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(meteor.trail[j].x, meteor.trail[j].y);
        ctx.lineTo(meteor.trail[j + 1].x, meteor.trail[j + 1].y);
        ctx.stroke();
      }
      
      ctx.shadowColor = `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${meteor.opacity})`;
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${meteor.opacity})`;
      ctx.arc(meteor.x, meteor.y, meteor.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity * 0.6})`;
      ctx.arc(meteor.x, meteor.y, meteor.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  function drawComets() {
    createComet();
    
    for (let i = comets.length - 1; i >= 0; i--) {
      const comet = comets[i];
      
      if (comet.destroyed) {
        comets.splice(i, 1);
        continue;
      }
      
      comet.fadeTimer++;
      
      switch(comet.fadePhase) {
        case 'fadein':
          comet.opacity = Math.min(1, comet.fadeTimer / comet.fadeDuration);
          if (comet.fadeTimer >= comet.fadeDuration) {
            comet.fadePhase = 'active';
            comet.fadeTimer = 0;
          }
          break;
          
        case 'active':
          comet.opacity = 1;
          comet.life--;
          
          let shouldFadeOut = comet.life < 120 || 
                             comet.x < -200 || comet.x > w + 200 || 
                             comet.y < -200 || comet.y > h + 200;
          
          if (shouldFadeOut) {
            comet.fadePhase = 'fadeout';
            comet.fadeTimer = 0;
          }
          break;
          
        case 'fadeout':
          comet.opacity = Math.max(0, 1 - (comet.fadeTimer / comet.fadeDuration));
          if (comet.opacity <= 0) {
            if (Math.random() < 0.15) {
              createSubtleExplosion(comet.x, comet.y, comet.size * 0.6, comet.color);
            }
            comets.splice(i, 1);
            continue;
          }
          break;
      }
      
      comet.trail.push({ x: comet.x, y: comet.y, opacity: comet.opacity });
      if (comet.trail.length > comet.trailLength) comet.trail.shift();
      
      comet.x += comet.velocity.x;
      comet.y += comet.velocity.y;
      
      for (let j = 0; j < comet.trail.length - 1; j++) {
        const trailPoint = comet.trail[j];
        const alpha = (j / comet.trail.length) * 0.4 * trailPoint.opacity;
        const width = comet.size * (j / comet.trail.length) * 0.6;
        
        ctx.strokeStyle = `rgba(${comet.color.r}, ${comet.color.g}, ${comet.color.b}, ${alpha})`;
        ctx.lineWidth = Math.max(0.5, width);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(comet.trail[j].x, comet.trail[j].y);
        ctx.lineTo(comet.trail[j + 1].x, comet.trail[j + 1].y);
        ctx.stroke();
      }
      
      ctx.shadowColor = `rgba(${comet.color.r}, ${comet.color.g}, ${comet.color.b}, ${comet.opacity})`;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${comet.color.r}, ${comet.color.g}, ${comet.color.b}, ${comet.opacity})`;
      ctx.arc(comet.x, comet.y, comet.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${comet.opacity * 0.5})`;
      ctx.arc(comet.x, comet.y, comet.size * 0.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  function drawExplosions() {
    for (let i = explosions.length - 1; i >= 0; i--) {
      const explosion = explosions[i];
      
      explosion.life--;
      
      for (let j = explosion.particles.length - 1; j >= 0; j--) {
        const particle = explosion.particles[j];
        
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        particle.velocity.x *= 0.95;
        particle.velocity.y *= 0.95;
        particle.life--;
        
        const lifeRatio = particle.life / particle.maxLife;
        const opacity = lifeRatio * 0.6;
        const size = particle.size * lifeRatio;
        
        if (particle.life > 0) {
          ctx.shadowColor = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`;
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          explosion.particles.splice(j, 1);
        }
      }
      
      if (explosion.life <= 0 || explosion.particles.length === 0) {
        explosions.splice(i, 1);
      }
    }
  }
  
  function drawSupernovas() {
    checkSupernova();
    
    for (let i = supernovas.length - 1; i >= 0; i--) {
      const supernova = supernovas[i];
      
      switch(supernova.phase) {
        case 'expand':
          supernova.radius += supernova.expandSpeed;
          supernova.opacity = Math.min(supernova.maxOpacity, supernova.radius / 25);
          
          if (supernova.radius >= supernova.maxRadius) {
            supernova.phase = 'peak';
          }
          break;
          
        case 'peak':
          supernova.peakTimer++;
          
          if (supernova.peakTimer >= supernova.peakDuration) {
            supernova.phase = 'contract';
          }
          break;
          
        case 'contract':
          supernova.radius -= supernova.contractSpeed;
          supernova.opacity = Math.max(0, supernova.opacity - 0.005);
          
          if (supernova.radius <= 0 || supernova.opacity <= 0) {
            supernovas.splice(i, 1);
            continue;
          }
          break;
      }
      
      const gradient = ctx.createRadialGradient(
        supernova.x, supernova.y, 0,
        supernova.x, supernova.y, supernova.radius
      );
      
      gradient.addColorStop(0, `rgba(255, 255, 255, ${supernova.opacity})`);
      gradient.addColorStop(0.2, `rgba(${supernova.color.r}, ${supernova.color.g}, ${supernova.color.b}, ${supernova.opacity * 0.8})`);
      gradient.addColorStop(0.7, `rgba(${supernova.color.r}, ${supernova.color.g}, ${supernova.color.b}, ${supernova.opacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(supernova.x, supernova.y, supernova.radius, 0, Math.PI * 2);
      ctx.fill();
      
      if (supernova.phase !== 'contract' || supernova.opacity > 0.1) {
        ctx.shadowColor = `rgba(255, 255, 255, ${supernova.opacity})`;
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${supernova.opacity})`;
        ctx.arc(supernova.x, supernova.y, supernova.radius * 0.1, 0, Math.PI * 4);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
  }
  
  // === LOOP PRINCIPAL ===
  function animate() {
    time++;
    
    drawBackground();
    drawNebulae();
    drawStars();
    drawCosmicDust();
    drawSpacecrafts();
    drawISS();
    drawMeteors();
    drawComets();
    drawExplosions();
    drawSupernovas();
    
    checkCollisions();
    
    requestAnimationFrame(animate);
  }
  
  // === INICIALIZAÇÃO ===
  initAll();
  animate();

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const codeLines = [
    "const terminalEl = document.getElementById('terminal-content')",
    "const terminalBox = document.getElementById('terminal-box')",
    "const heroContent = document.getElementById('hero-content')",
    "const heroTitle = document.getElementById('hero-title')"    
  ];
  
  let terminalIndex = 0;
  const terminalEl = document.getElementById("terminal-content");
  const terminalBox = document.getElementById("terminal-box");
  const heroContent = document.getElementById("hero-content");
  const heroTitle = document.getElementById("hero-title");
  
  function typeTerminal() {
    if (terminalIndex < codeLines.length) {
      terminalEl.innerHTML += codeLines[terminalIndex] + "\n";
      terminalEl.scrollTop = terminalEl.scrollHeight;
      terminalIndex++;
      setTimeout(typeTerminal, 400);
    } else {
      setTimeout(() => {
        terminalBox.style.transition = "opacity 1s ease, transform 1s ease";
        terminalBox.style.opacity = 0;
        terminalBox.style.transform = "scale(0.9)";
        setTimeout(() => {
          terminalBox.style.display = "none";
          showHeroContent();
        }, 1000);
      }, 1000);
    }
  }
  
  function showHeroContent() {
    heroContent.style.display = "block";
    heroTitle.style.opacity = "0";
    setTimeout(() => {
      heroTitle.style.opacity = "1";
    }, 100);
  
    startTypingCycle();
  }
  
  const phrases = [
    "Web Designer / Front-End Developer",
    "Dê vida a sua criatividade.",
    "Eleve seu projeto ao proximo nível."
  ];
  
  let currentPhrase = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingText = document.getElementById("typing-text");
  
  function startTypingCycle() {
    const current = phrases[currentPhrase];
    typingText.textContent = current.substring(0, charIndex);
  
    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(startTypingCycle, 60);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(startTypingCycle, 30);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(startTypingCycle, 1000);
      } else {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(startTypingCycle, 300);
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    typeTerminal();
  });

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



  