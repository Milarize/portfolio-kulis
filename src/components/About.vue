<script setup>
import { ref } from 'vue'

const technicalSkills = ref({
  architecture: {
    title: 'Architecture & Patterns',
    skills: [
      'Microservices Architecture',
      'Domain-Driven Design (DDD)',
      'Event-Driven Architecture',
      'RESTful APIs',
      'GraphQL APIs',
      'Message Queuing (RabbitMQ)',
      'Web Socket'
    ]
  },
  systemDesign: {
    title: 'System Design & UML',
    skills: [
      'Use Case Diagrams',
      'Sequence Diagrams',
      'Class Diagrams',
      'Activity Diagrams',
      'System Architecture Design',
      'Database Schema Design'
    ]
  },
  methodologies: {
    title: 'Development Methodologies',
    skills: [
      'Agile / Scrum',
      'Waterfall',
      'Test-Driven Development (TDD)'
    ]
  },
  ai: {
    title: 'AI & Machine Learning',
    skills: [
      'Deep Learning',
      'Natural Language Processing',
      'TensorFlow / PyTorch',
      'Scikit-learn',
      'Data Analysis & Visualization'
    ]
  },
})
</script>

<template>
  <v-container class="about-section py-16" id="about">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h2 class="text-h3 mb-6 text-center flip-title">TECHNICAL EXPERTISE</h2>
        <v-card class="flip-card pa-6 mb-8" elevation="2">
          <v-row>
            <v-col cols="12" md="4">
              <div class="profile-section mb-6">
                <h3 class="text-h4 mb-4 flip-text">Kulisara Thongnamkhum</h3>
                <p class="text-body-1 mb-4 flip-text" style="color: white;">
                  Full-Stack Developer & AI Enthusiast
                </p>
                <p class="text-body-1 mb-4 flip-text" style="color: white;">
                  มีประสบการณ์ในการพัฒนาแอปพลิเคชันจากมหาลัย ตั้งแต่การออกแบบระบบและฐานข้อมูล การพัฒนา Frontend และ Backend จนถึงการ Deploy และดูแลระบบในสภาพแวดล้อมจริง
                </p>
                <p class="text-body-1 mb-4 flip-text" style="color: white;">
                  มีประสบการณ์ในการเป็นผู้นำทีม รับผิดชอบการออกแบบระบบ logic การวิเคราะห์ปัญหา และวางแผนงานให้กับสมาชิกในทีม รวมถึงการประสานงานระหว่างทีมและผู้ว่าจ้าง
                </p>
                <p class="text-body-1 mb-4 flip-text" style="color: white;">
                  เรียนรู้และทดลองใช้เทคโนโลยีใหม่ๆ อยู่เสมอ โดยเฉพาะในด้าน AI และ Machine Learning เพื่อนำมาประยุกต์ใช้ในการพัฒนาแอปพลิเคชัน
                </p>
                <div class="location-info">
                  <v-icon color="#67127a" class="mr-2">mdi-map-marker</v-icon>
                  <span style="color: white;">Rayong, Thailand</span>
                </div>
              </div>
            </v-col>
            
            <v-col cols="12" md="8">
              <v-row>
                <v-col 
                  v-for="(category, key) in technicalSkills" 
                  :key="key"
                  cols="12" 
                  sm="6" 
                  class="mb-4"
                >
                  <div class="skill-category">
                    <h4 class="text-h6 mb-3 flip-text" style="color: #67127a; font-weight: 600;">
                      {{ category.title }}
                    </h4>
                    <div class="skills-list">
                      <div 
                        v-for="skill in category.skills" 
                        :key="skill"
                        class="skill-item"
                      >
                        <v-icon size="small" color="#67127a" class="mr-2">mdi-check-circle</v-icon>
                        <span style="color: white; font-size: 0.9rem;">{{ skill }}</span>
                      </div>
                    </div>
                  </div>
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

.flip-text {
  animation: flipIn 1.2s ease-out;
  transform-origin: center;
}

.profile-section {
  padding: 20px;
  background: rgba(103, 18, 122, 0.1);
  border-radius: 12px;
  border-left: 4px solid #67127a;
}

.location-info {
  display: flex;
  align-items: center;
  margin-top: 16px;
}

.skill-category {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 16px;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid rgba(103, 18, 122, 0.2);
}

.skill-category:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(103, 18, 122, 0.2);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skill-item {
  display: flex;
  align-items: center;
  padding: 4px 0;
  transition: all 0.2s ease;
}

.skill-item:hover {
  transform: translateX(5px);
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
  font-family: 'Kanit', sans-serif;
}

h3 {
  color: #ffffff;
  font-family: 'Kanit', sans-serif;
}

h4 {
  color: #ffffff;
  font-family: 'Kanit', sans-serif;
}

.about-section {
  font-family: 'Kanit', sans-serif;
}

.flip-title {
  font-family: 'Kanit', sans-serif;
}

.flip-text {
  font-family: 'Kanit', sans-serif;
}
</style> 