<script setup>
import { ref, computed } from 'vue'

const experiences = ref([
  {
    title: 'ระบบร้านกาแฟ D-Coffee',
    period: '2022',
    importance: 'โปรเจคตอนเรียน',
    description: [

    ]
  },
  {
    title: 'EDA ข้อมูล Steam',
    period: '2023',
    importance: 'โปรเจคตอนเรียน',
    description: [

    ]
  },
  {
    title: 'แอพพลิเคชันการเรียนรู้สำหรับผู้สูงอายุ',
    period: '2023',
    importance: 'โปรเจคที่ทำงานให้กับอาจารย์และมหาลัย',
    description: [

    ]
  },
  {
    title: 'ระบบ POS ร้านกาแฟ & ร้านอาหาร ห้องสมุดมหาวิทยาลัยบูรพา',
    period: '2023',
    importance: 'โปรเจคที่ทำงานให้กับอาจารย์และมหาลัย',
    description: [

    ]
  },
  {
    title: 'Hackathon CDG 2024 ระบบวัดส่วนสูง ',
    period: '2024',
    importance: 'การแข่งขัน',
    description: [

    ]
  },
  {
    title: 'เว็บไซต์กองกฎหมายมหาวิทยาลัยบูรพา',
    period: '2024',
    importance: 'โปรเจคที่ทำงานให้กับอาจารย์และมหาลัย',
    description: [

    ]
  },
  {
    title: 'แอพพลิเคชันบันทึกสูตรการทำอาหาร',
    period: '2024',
    importance: 'โปรเจคตอนเรียน',
    description: [

    ]
  },
  {
    title: 'เว็บไซต์สำหรับเก็บข้อมูลเพื่อนำไปทำนายภาวะซึมเศร้าด้วยประมวลภาษา',
    period: '2023',
    importance: 'โปรเจคที่ทำงานให้กับอาจารย์และมหาลัย',
    description: [

    ]
  },
  {
    title: 'แอพพลิเคชันหาคู่ให้สัตว์เลี้ยง',
    period: '2024',
    importance: 'โปรเจคจบ',
    description: [

    ]
  }
  ,
  {
    title: 'chatbot ตอบคำถามคณะวิทยาการคอมพิวเตอร์',
    period: '2023',
    importance: 'โปรเจคตอนเรียน',
    description: [

    ]
  },
  {
    title: 'เว็บไซต์แสดงผลงานสถาปัตยกรรมการออกแบบ รับเหมาก่อสร้าง',
    period: 'Hobby',
    importance: 'อื่นๆ',
    description: [

    ]
  },
  {
    title: 'เว็บไซต์แสดงผลงานคอลเลคชั่นเกี่ยวกับเครื่องประดับ อัญมณี SOSARA GEM',
    period: 'Hobby',
    importance: 'อื่นๆ',
    description: [

    ]
  },
  {
    title: 'เว็บไซต์วารสารกำนันผู้ใหญ่บ้าน',
    period: '2025',
    importance: 'โปรเจคฝึกงาน',
    description: [

    ]
  }
])

// จัดกลุ่มประสบการณ์ตามปี
const groupedExperiences = computed(() => {
  const groups = {}
  experiences.value.forEach(exp => {
    const year = exp.period
    if (!groups[year]) {
      groups[year] = []
    }
    groups[year].push(exp)
  })
  return Object.entries(groups).sort(([a], [b]) => b - a) // เรียงจากปีใหม่ไปเก่า
})

// ฟังก์ชันสำหรับกำหนดสีตามความสำคัญ
const getImportanceColor = (importance) => {
  const colorMap = {
    'โปรเจคตอนเรียน': '#4CAF50',
    'โปรเจคจบ': '#FF9800',
    'โปรเจคที่ทำงานให้กับอาจารย์และมหาลัย': '#2196F3',
    'โปรเจคฝึกงาน': '#9C27B0',
    'การแข่งขัน': '#F44336',
    'อื่นๆ': '#ffffff'
  }
  return colorMap[importance] || '#757575'
}
</script>

<template>
  <v-container class="experience-section py-16" id="experience">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h2 class="text-h3 mb-6 text-center glass-text">MY EXPERIENCE</h2>
        <v-card class="experience-card pa-6" elevation="2">
          
          <div class="timeline-container">
            <div v-for="(yearGroup, yearIndex) in groupedExperiences" :key="yearGroup[0]" class="year-group mb-8">
              <!-- หัวข้อปีพร้อมจุด timeline -->
              <div class="year-header mb-4 d-flex align-center">
                <div class="timeline-dot"></div>
                <h3 class="text-h5 ml-4" style="color: #67127a; font-weight: 600; font-family: 'Kanit', sans-serif;">
                  {{ yearGroup[0] }}
                </h3>
              </div>
              
              <!-- ประสบการณ์ในปีเดียวกันแสดงในแถวเดียวกัน -->
              <v-row>
                <v-col 
                  v-for="(experience, index) in yearGroup[1]" 
                  :key="`${yearGroup[0]}-${index}`"
                  cols="12"
                  md="6"
                  class="mb-4"
                >
                  <div class="experience-item">
                    <div class="text-h6" style="color: #ffffff; font-weight: 600; font-family: 'Kanit', sans-serif;">
                      {{ experience.title }}
                    </div>
                    <v-chip
                      :color="getImportanceColor(experience.importance)"
                      size="small"
                      class="mb-2"
                      variant="outlined"
                    >
                      {{ experience.importance }}
                    </v-chip>
                    <p class="text-body-2" style="color: #ffffff;">
                      <span v-for="(item, itemIndex) in experience.description" :key="itemIndex">
                        • {{ item }}<br v-if="itemIndex < experience.description.length - 1">
                      </span>
                    </p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
          
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
  font-family: "Kanit", sans-serif;
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

/* Timeline styles */
.timeline-container {
  position: relative;
  padding-left: 30px;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #67127a, transparent);
}

.timeline-dot {
  width: 20px;
  height: 20px;
  background: #67127a;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 10px rgba(103, 18, 122, 0.5);
  animation: pulse 2s ease-in-out infinite;
}

.timeline-dot::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 50%;
  transform: scale(0.6);
  animation: inner-pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(103, 18, 122, 0.5);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(103, 18, 122, 0.8);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(103, 18, 122, 0.5);
  }
}

@keyframes inner-pulse {
  0% {
    transform: scale(0.6);
    opacity: 0.8;
  }
  50% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(0.6);
    opacity: 0.8;
  }
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

/* Timeline line styling */
:deep(.v-timeline-divider) {
  background: linear-gradient(180deg, #67127a, transparent) !important;
  width: 2px !important;
}
</style> 