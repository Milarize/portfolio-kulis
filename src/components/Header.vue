<script setup>

</script>

<template>
  <v-app-bar color="primary" height="100" class="glass-nav">
    <v-app-bar-title >
      <span class="logo-text-regular">m</span>
      <span class="logo-text">i</span>
      <span class="logo-text-regular">nt</span>

    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn variant="text" href="#home" class="nav-btn">Home</v-btn>
    <v-btn variant="text" href="#about" class="nav-btn">About</v-btn>
    <v-btn variant="text" href="#experience" class="nav-btn">Experience</v-btn>
    <v-btn variant="text" href="#projects" class="nav-btn">Projects</v-btn>
    <v-btn variant="text" href="#contact" class="nav-btn">Contact</v-btn>
  </v-app-bar>
</template>

<style scoped>
.glass-nav {
  background: rgba(0, 0, 0, 0.7) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(103, 18, 122, 0.2);
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.37),
    inset 0 0 20px rgba(103, 18, 122, 0.1) !important;
  transition: all 0.3s ease;
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
    rgba(103, 18, 122, 0.1),
    rgba(138, 43, 226, 0.1)
  );
  z-index: -1;
}

.logo-container {
  padding: 12px 24px;
  border-radius: 16px;
  background: rgba(103, 18, 122, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(103, 18, 122, 0.2);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.2),
    inset 0 0 10px rgba(103, 18, 122, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin-left: 20px;
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
    rgba(103, 18, 122, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

.logo-container:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.3),
    inset 0 0 15px rgba(103, 18, 122, 0.2);
  border-color: rgba(103, 18, 122, 0.3);
}

.logo-text {
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 42px;
  font-weight: bold;
  color: #67127a;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  margin-right: 4px;
}

.logo-text-regular {
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 36px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  letter-spacing: 2px;
}

.nav-btn {
  position: relative;
  margin: 0 12px;
  padding: 12px 24px;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(103, 18, 122, 0.1) !important;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(103, 18, 122, 0.2);
  overflow: hidden;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
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
    rgba(103, 18, 122, 0.2),
    transparent
  );
  transition: 0.5s;
}

.nav-btn:hover {
  transform: translateY(-2px);
  background: rgba(103, 18, 122, 0.2) !important;
  border-color: rgba(103, 18, 122, 0.3);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.3),
    inset 0 0 15px rgba(103, 18, 122, 0.2);
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
  box-shadow: 0 0 10px rgba(103, 18, 122, 0.5);
}

.nav-btn:hover::after {
  width: 80%;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  20%, 100% {
    transform: translateX(100%) rotate(45deg);
  }
}

/* Add responsive styles */
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
  
  .nav-btn {
    margin: 0 4px;
    padding: 6px 12px;
    font-size: 14px;
  }
}
</style> 