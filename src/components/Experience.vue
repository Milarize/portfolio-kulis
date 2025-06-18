<script setup>
// Component logic can be added here
</script>

<template>
  <v-container class="experience-section py-16" id="experience">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h2 class="text-h3 mb-6 text-center glass-text">MY EXPERIENCE</h2>
        <v-card class="experience-card pa-6" elevation="2">
          <v-timeline density="compact" align="start">
           
            <v-timeline-item
              dot-color="primary"
              size="small"
              class="sims-dot"
            >
              <div class="mb-4 experience-item">
                <div class="text-h6 " style="color: #ffffff;">Application Developer</div>
                <div class="text-subtitle-2 text-primary mb-2" style="color: #ffffff;">First Company</div>
                <div class="text-caption mb-2" style="color: #ffffff;">2025 - current</div>
                <p class="text-body-2" style="color: #ffffff;">
                  • Built and maintained client websites<br>
                  • Implemented front-end features using HTML, CSS, and JavaScript<br>
                  • Participated in agile development processes
                </p>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.experience-section {
  position: relative;
  overflow: hidden;
}

.experience-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.experience-card {
  background: rgb(0, 0, 0) !important;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.glass-text {
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(103, 18, 122, 0.5);
}
.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.45);
}

.experience-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 16px;
  transition: all 0.3s ease;
}

.experience-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

h2 {
  color: #67127a;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.text-primary {
  color: #67127a !important;
}

/* Sims-like symbol styles */
.sims-dot :deep(.v-timeline-item__dot) {
  background: transparent !important;
  box-shadow: none !important;
  width: 40px !important;
  height: 40px !important;
}

.sims-dot :deep(.v-timeline-item__dot::before) {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #67127a;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: float 3s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sims-dot :deep(.v-timeline-item__dot::after) {
  content: '';
  position: absolute;
  width: 70%;
  height: 70%;
  background: #ffffff;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(180deg);
  }
  100% {
    transform: translateY(0px) rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
}

/* Timeline line styling */
:deep(.v-timeline-divider) {
  background: linear-gradient(180deg, #67127a, transparent) !important;
  width: 2px !important;
}
</style> 