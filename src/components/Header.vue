<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Reactive state
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')

// Navigation items
const navItems = ref([
  { id: 'home', label: 'หน้าแรก', href: '#home' },
  { id: 'about', label: 'เกี่ยวกับฉัน', href: '#about' },
  { id: 'experience', label: 'ประสบการณ์', href: '#experience' },
  { id: 'projects', label: 'โครงงาน', href: '#projects' },
  { id: 'contact', label: 'ติดต่อ', href: '#contact' }
])

// Computed properties
const menuIcon = computed(() => isMenuOpen.value ? 'mdi-close' : 'mdi-menu')
const navBarClass = computed(() => ({
  'scrolled': isScrolled.value,
  'menu-open': isMenuOpen.value
}))

// Methods
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id
    }
  })
}

const scrollToSection = (href) => {
  closeMenu()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Intersection Observer for active section
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
    rootMargin: '-20% 0px -20% 0px'
  })
  
  navItems.value.forEach(item => {
    const element = document.querySelector(item.href)
    if (element) {
      observer.observe(element)
    }
  })
  
  // Cleanup observer on unmount
  onUnmounted(() => {
    observer.disconnect()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <v-app-bar 
    color="primary" 
    height="100" 
    class="glass-nav"
    :class="navBarClass"
  >
    <v-app-bar-title class="logo-container" @click="scrollToSection('#home')">
      <span class="logo-text-regular">m</span>
      <span class="logo-text">i</span>
      <span class="logo-text-regular">nt</span>
    </v-app-bar-title>
    
    <v-spacer></v-spacer>
    
    <!-- Desktop Navigation -->
    <div class="desktop-nav">
      <v-btn 
        v-for="item in navItems" 
        :key="item.id"
        variant="text" 
        :href="item.href" 
        class="nav-btn"
        :class="{ 'active': activeSection === item.id }"
        @click="scrollToSection(item.href)"
      >
        {{ item.label }}
      </v-btn>
    </div>
    
    <!-- Mobile Menu Button -->
    <v-btn
      icon
      @click="toggleMenu"
      class="mobile-menu-btn"
      variant="text"
      :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
    >
      <v-icon>{{ menuIcon }}</v-icon>
    </v-btn>
  </v-app-bar>
  
  <!-- Mobile Navigation Menu -->
  <v-navigation-drawer
    v-model="isMenuOpen"
    temporary
    location="top"
    class="mobile-nav-drawer"
    :overlay="true"
  >
    <v-list class="mobile-nav-list">
      <v-list-item 
        v-for="item in navItems" 
        :key="item.id"
        :href="item.href" 
        @click="scrollToSection(item.href)" 
        class="mobile-nav-item"
        :class="{ 'active': activeSection === item.id }"
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.glass-nav {
  background: rgba(0, 0, 0, 0.8) !important;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(103, 18, 122, 0.3);
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.4),
    inset 0 0 20px rgba(103, 18, 122, 0.15) !important;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.glass-nav.scrolled {
  background: rgba(0, 0, 0, 0.9) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(103, 18, 122, 0.4);
  box-shadow: 
    0 12px 40px 0 rgba(31, 38, 135, 0.5),
    inset 0 0 25px rgba(103, 18, 122, 0.2) !important;
}

.glass-nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(103, 18, 122, 0.15),
    rgba(138, 43, 226, 0.15)
  );
  z-index: -1;
}

.logo-container {
  padding: 12px 24px;
  border-radius: 16px;
  background: rgba(103, 18, 122, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(103, 18, 122, 0.3);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.3),
    inset 0 0 10px rgba(103, 18, 122, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin-left: 20px;
  cursor: pointer;
}

.logo-container::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(103, 18, 122, 0.2),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 4s infinite;
}

.logo-container:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.4),
    inset 0 0 15px rgba(103, 18, 122, 0.3);
  border-color: rgba(103, 18, 122, 0.4);
}

.logo-text {
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 42px;
  font-weight: bold;
  color: #67127a;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  margin-right: 4px;
  transition: all 0.3s ease;
}

.logo-text-regular {
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 36px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}

.logo-container:hover .logo-text {
  color: #8a2be2;
  text-shadow: 2px 2px 8px rgba(138, 43, 226, 0.5);
}

.logo-container:hover .logo-text-regular {
  color: #f0f0f0;
  text-shadow: 1px 1px 4px rgba(255, 255, 255, 0.3);
}

.desktop-nav {
  display: flex;
  align-items: center;
}

.nav-btn {
  position: relative;
  margin: 0 12px;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(103, 18, 122, 0.15) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(103, 18, 122, 0.3);
  overflow: hidden;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #ffffff !important;
  font-family: "Kanit", sans-serif;
}

.nav-btn.active {
  background: rgba(103, 18, 122, 0.3) !important;
  border-color: rgba(103, 18, 122, 0.5);
  color: #8a2be2 !important;
  transform: translateY(-2px);
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(103, 18, 122, 0.3),
    transparent
  );
  transition: 0.5s;
}

.nav-btn:hover {
  transform: translateY(-3px) scale(1.05);
  background: rgba(103, 18, 122, 0.25) !important;
  border-color: rgba(103, 18, 122, 0.4);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.4),
    inset 0 0 15px rgba(103, 18, 122, 0.3);
  color: #8a2be2 !important;
}

.nav-btn:hover::before {
  left: 100%;
}

.nav-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #67127a, #8a2be2);
  transition: all 0.3s ease;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(103, 18, 122, 0.6);
}

.nav-btn:hover::after,
.nav-btn.active::after {
  width: 80%;
}

.mobile-menu-btn {
  display: none !important;
  color: #ffffff !important;
  background: rgba(103, 18, 122, 0.2) !important;
  border-radius: 8px;
  margin-right: 16px;
}

.mobile-menu-btn:hover {
  background: rgba(103, 18, 122, 0.3) !important;
  transform: scale(1.1);
}

.mobile-nav-drawer {
  background: rgba(0, 0, 0, 0.9) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid rgba(103, 18, 122, 0.3);
}

.mobile-nav-list {
  background: transparent !important;
  padding-top: 100px;
}

.mobile-nav-item {
  margin: 8px 16px;
  border-radius: 12px;
  background: rgba(103, 18, 122, 0.15) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(103, 18, 122, 0.3);
  transition: all 0.3s ease;
}

.mobile-nav-item.active {
  background: rgba(103, 18, 122, 0.3) !important;
  border-color: rgba(103, 18, 122, 0.5);
}

.mobile-nav-item:hover {
  background: rgba(103, 18, 122, 0.25) !important;
  transform: translateX(10px);
  border-color: rgba(103, 18, 122, 0.4);
}

.mobile-nav-item :deep(.v-list-item-title) {
  color: #ffffff !important;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
}

.mobile-nav-item.active :deep(.v-list-item-title) {
  color: #8a2be2 !important;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  20%, 100% {
    transform: translateX(100%) rotate(45deg);
  }
}

/* Responsive Design */
@media (max-width: 960px) {
  .glass-nav {
    height: 80px !important;
  }
  
  .logo-text {
    font-size: 32px;
  }
  
  .logo-text-regular {
    font-size: 28px;
  }
  
  .nav-btn {
    margin: 0 8px;
    padding: 8px 16px;
    font-size: 16px;
  }
  
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex !important;
  }
}

@media (max-width: 600px) {
  .glass-nav {
    height: 70px !important;
  }
  
  .logo-text {
    font-size: 28px;
  }
  
  .logo-text-regular {
    font-size: 24px;
  }
  
  .logo-container {
    padding: 8px 16px;
    margin-left: 12px;
  }
  
  .mobile-menu-btn {
    margin-right: 12px;
  }
}

/* Animation for mobile menu */
.v-navigation-drawer--temporary {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}
</style> 