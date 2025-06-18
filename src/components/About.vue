<script setup>
// Component logic can be added here
</script>

<template>
  <v-container class="about-section py-16" id="about">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h2 class="text-h3 mb-6 text-center flip-title">ABOUT ME</h2>
        <v-card class="flip-card pa-6 mb-8" elevation="2">
          <v-row>
            <v-col cols="12" md="4" class="text-center">
              <v-avatar size="200" class="mb-4 flip-avatar">
                <v-img src="/path-to-your-image.jpg" alt="Profile Picture"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" md="8">
              <p>Welceome to my World</p>
              <h3 class="text-h4 mb-4 flip-text">Kulisara Thongnamkhum</h3>
              <p class="text-body-1 mb-4 flip-text" style="color: white;">
               Based in Bangkok, Thailand. or Rayong, Thailand.
              </p>
              <p class="text-body-1 mb-4 flip-text" style="color: white;">
            
              </p>
              <v-row class="mt-4">
                <v-col cols="12" sm="6">
                  <h4 class="text-h6 mb-2 flip-text">Main Skills</h4>
              
                </v-col>
                <v-col cols="12" sm="6">
                  <h4 class="text-h6 mb-2 flip-text">Awards</h4>
              
                </v-col>
                <v-col cols="12" sm="6">
                  <h4 class="text-h6 mb-2 flip-text">Education & Certificate</h4>
              
                </v-col>

              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-section {
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #67127a33, #00000033);
  z-index: -1;
}

.flip-card {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.flip-title {
  color: #ffffff;
  animation: flipIn 1s ease-out;
  transform-origin: center;
  text-align: center;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(103, 18, 122, 0.5);
}

.flip-avatar {
  animation: flipIn 1.2s ease-out;
  transform-origin: center;
  border: 3px solid rgba(103, 18, 122, 0.3);
  box-shadow: 0 8px 32px rgba(103, 18, 122, 0.2);
  transition: all 0.3s ease;
}

.flip-avatar:hover {
  transform: scale(1.05);
  border-color: rgba(103, 18, 122, 0.5);
  box-shadow: 0 12px 40px rgba(103, 18, 122, 0.3);
}

@keyframes flipIn {
  from {
    opacity: 0;
    transform: rotateY(90deg);
  }
  to {
    opacity: 1;
    transform: rotateY(0deg);
  }
}

h2 {
  color: #67127a;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

h3 {
  color: #ffffff;
}

h4 {
  color: #ffffff;
}


</style> 