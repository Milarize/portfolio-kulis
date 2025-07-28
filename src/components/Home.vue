<script setup>
import { ref, onMounted } from 'vue'

const personalInfo = ref({
  name: 'Kulisara',
  roles: [
    'Full Stack Developer'
  ],
  description: 'Informatics Computer Science Graduate 2024',
  skills: ['Web Application Development', 'Mobile Application Development', 'Machine Learning', 'Natural Language Processing','Deep Learning']
})

const displayText = ref('')
let currentRoleIndex = 0

const isExpanded = ref(false)

onMounted(() => {
  startTypewriterLoop()
  initLiquidEffect()
})

const startTypewriterLoop = () => {
  const typeName = () => {
    displayText.value = ''
    typeWriter(personalInfo.value.name, displayText, 100, () => {
      setTimeout(() => {
        typeRole()
      }, 1000)
    })
  }

  const typeRole = () => {
    displayText.value = ''
    typeWriter(personalInfo.value.roles[currentRoleIndex], displayText, 50, () => {
      setTimeout(() => {
        currentRoleIndex = (currentRoleIndex + 1) % personalInfo.value.roles.length
        startTypewriterLoop()
      }, 2000)
    })
  }

  typeName()
}

const typeWriter = (text, target, speed, onComplete) => {
  let i = 0
  const timer = setInterval(() => {
    if (i < text.length) {
      target.value += text.charAt(i)
      i++
    } else {
      clearInterval(timer)
      if (onComplete) onComplete()
    }
  }, speed)
}

const initLiquidEffect = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const container = document.querySelector('.home-section')
  
  if (!container) {
    console.error('Container not found')
    return
  }
  
  canvas.style.position = 'absolute'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.style.zIndex = '0'
  canvas.style.opacity = '0.5'
  canvas.style.pointerEvents = 'none'
  
  container.appendChild(canvas)
  
  const resizeCanvas = () => {
    const rect = container.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height
  }
  
  resizeCanvas()
  
  const particles = []
  const particleCount = 100
  
  class Particle {
    constructor() {
      this.reset()
    }
    
    reset() {
      const rect = container.getBoundingClientRect()
      this.x = Math.random() * rect.width
      this.y = Math.random() * rect.height
      this.vx = (Math.random() - 0.5) * 1.5
      this.vy = (Math.random() - 0.5) * 1.5
      this.radius = Math.random() * 2 + 1
      const colors = [
        'rgba(103, 18, 122, 0.3)',  
        'rgba(138, 43, 226, 0.3)',  
        'rgba(255, 255, 255, 0.2)', 
        'rgba(30, 58, 109, 0.3)'   
      ]
      this.color = colors[Math.floor(Math.random() * colors.length)]
    }
    
    update() {
      const rect = container.getBoundingClientRect()
      this.x += this.vx
      this.y += this.vy
      
      if (this.x < 0 || this.x > rect.width) this.vx *= -1
      if (this.y < 0 || this.y > rect.height) this.vy *= -1
    }
    
    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
    }
  }
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach(particle => {
      particle.update()
      particle.draw()
    })
    
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          ctx.beginPath()
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
          gradient.addColorStop(0, 'rgba(103, 18, 122, 0.15)')
          gradient.addColorStop(0.5, 'rgba(138, 43, 226, 0.15)')
          gradient.addColorStop(1, 'rgba(30, 58, 109, 0.15)')
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 0.5
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      })
    })
    
    requestAnimationFrame(animate)
  }
  
  animate()
  
  window.addEventListener('resize', () => {
    resizeCanvas()
    particles.forEach(particle => particle.reset())
  })
}

const toggleContact = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <section id="home" class="home-section">
    <div class="content-wrapper">
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="12" md="6" class="text-center text-md-left px-4 px-md-8">
          <div class="hero-content">
            <h1 class="text-h2 font-weight-bold mb-4">
              <span class="gradient-text hover-scale">Hello, I'm</span>
              <br>
              <span class="gradient-text typewriter hover-scale">{{ displayText }}<span class="cursor">|</span></span>
            </h1>
            <h2 class="text-h4 mb-6 glass-text" style="color: #ffffff; font-weight: bold;"><> Informatics Computer Science Graduate 2024</h2>

            <div class="skills-container mb-8">
              <v-chip
                v-for="skill in personalInfo.skills"
                :key="skill"
                class="ma-2 glass-effect hover-lift"
                color="primary"
                variant="outlined"
              >
                {{ skill }}
              </v-chip>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="text-center px-4 px-md-8">
          <div class="profile-image-container">
            <v-img
              src="/portfolio-kulis/image/profile.png"
              alt="Profile Image"
              class="profile-image hover-scale"
              cover
              style="object-position: center 30%;"
            ></v-img>
            <div class="floating-card glass-effect">
              <v-icon size="large" color="primary">mdi-code-braces</v-icon>
              <span>1+ Years Experience</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    
    <!-- Floating Contact Button -->
    <div class="floating-contact" :class="{ 'expanded': isExpanded }">
      <div class="contact-button" @click="toggleContact">
        <v-icon size="large" color="white">{{ isExpanded ? 'mdi-close' : 'mdi-email' }}</v-icon>
      </div>
      <div class="contact-content">
        <h3>Contact Me</h3>
        <div class="contact-info">
          <div class="contact-item">
            <v-icon>mdi-email</v-icon>
            <a href="mailto:mailmint085@gmail.com">mailmint085@gmail.com</a>
          </div>
          <div class="contact-item">
            <v-icon>mdi-github</v-icon>
            <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          </div>
          <div class="contact-item">
            <v-icon>mdi-linkedin</v-icon>
            <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-section {
  position: relative;
  width: 100%;
  background: #000000;
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  position: relative;
  z-index: 1;
}

.home-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(103, 18, 122, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.gradient-text {
  background: linear-gradient(45deg, #ffffff, #8a2be2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: #dbd3e1;
  margin-left: 2px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.profile-image-container {
  position: relative;
  display: inline-block;
}

.profile-image {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 4px solid #67127a;
  box-shadow: 
    20px 20px 60px rgba(0, 0, 0, 0.5),
    -20px -20px 60px rgba(103, 18, 122, 0.2),
    inset 5px 5px 10px rgba(255, 255, 255, 0.1),
    inset -5px -5px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  object-fit: cover;
  object-position: center 30%;
}

.profile-image:hover {
  transform: scale(1.02);
  box-shadow: 
    25px 25px 75px rgba(0, 0, 0, 0.6),
    -25px -25px 75px rgba(103, 18, 122, 0.3),
    inset 8px 8px 15px rgba(255, 255, 255, 0.15),
    inset -8px -8px 15px rgba(0, 0, 0, 0.4);
}

.floating-card {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(103, 18, 122, 0.9);
  padding: 15px 25px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.3),
    -8px -8px 16px rgba(103, 18, 122, 0.2),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    inset -2px -2px 4px rgba(0, 0, 0, 0.2);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
    box-shadow: 
      8px 8px 16px rgba(0, 0, 0, 0.3),
      -8px -8px 16px rgba(103, 18, 122, 0.2),
      inset 2px 2px 4px rgba(255, 255, 255, 0.1),
      inset -2px -2px 4px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: translateY(-10px);
    box-shadow: 
      12px 12px 24px rgba(0, 0, 0, 0.4),
      -12px -12px 24px rgba(103, 18, 122, 0.3),
      inset 3px 3px 6px rgba(255, 255, 255, 0.15),
      inset -3px -3px 6px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: translateY(0px);
    box-shadow: 
      8px 8px 16px rgba(0, 0, 0, 0.3),
      -8px -8px 16px rgba(103, 18, 122, 0.2),
      inset 2px 2px 4px rgba(255, 255, 255, 0.1),
      inset -2px -2px 4px rgba(0, 0, 0, 0.2);
  }
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.v-chip {
  transition: all 0.3s ease !important;
  box-shadow: 
    5px 5px 10px rgba(0, 0, 0, 0.2),
    -5px -5px 10px rgba(103, 18, 122, 0.1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    inset -2px -2px 4px rgba(0, 0, 0, 0.1) !important;
}

.v-chip:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.3),
    -8px -8px 16px rgba(103, 18, 122, 0.2),
    inset 3px 3px 6px rgba(255, 255, 255, 0.15),
    inset -3px -3px 6px rgba(0, 0, 0, 0.2) !important;
}

.glass-text {
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.3),
    -2px -2px 4px rgba(103, 18, 122, 0.2);
}

@media (max-width: 960px) {
  .profile-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    object-position: center 30%;
  }
  
  .floating-card {
    bottom: 10px;
    right: 10px;
    padding: 10px 15px;
  }
}

.floating-contact {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  gap: 20px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #67127a, #8a2be2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 
    0 4px 15px rgba(103, 18, 122, 0.3),
    0 8px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.contact-button:hover {
  transform: scale(1.1);
  box-shadow: 
    0 6px 20px rgba(103, 18, 122, 0.4),
    0 10px 30px rgba(0, 0, 0, 0.3);
}

.contact-content {
  background: rgba(103, 18, 122, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
  width: 0;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  white-space: nowrap;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    0 8px 25px rgba(103, 18, 122, 0.2);
}

.floating-contact.expanded .contact-content {
  width: 300px;
  opacity: 1;
  transform: translateX(0);
}

.contact-content h3 {
  color: white;
  margin: 0 0 15px 0;
  font-size: 1.2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
}

.contact-item a {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-item a:hover {
  color: #8a2be2;
  transform: translateX(5px);
}

@media (max-width: 600px) {
  .floating-contact {
    bottom: 20px;
    right: 20px;
  }
  
  .contact-button {
    width: 50px;
    height: 50px;
  }
  
  .floating-contact.expanded .contact-content {
    width: 250px;
  }
}
</style> 