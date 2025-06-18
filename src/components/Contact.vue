<script setup>
import { ref } from 'vue'

const contactInfo = ref({
  email: 'mailmint085@gmail.com',
  github: 'github.com/yourusername',
  linkedin: 'linkedin.com/in/yourusername'
})

const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)

const submitForm = async () => {
  loading.value = true
  // Here you would typically handle the form submission
  // For now, we'll just simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  loading.value = false
  success.value = true
  form.value = { name: '', email: '', message: '' }
  setTimeout(() => {
    success.value = false
  }, 3000)
}
</script>

<template>
  <section id="contact" class="py-8 contact-section">
    <h2 class="text-h3 mb-6 text-center">Contact Me</h2>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="glass-card animate-card">
          <v-card-text class="text-center">
            <v-icon size="large" color="primary" class="mb-2">mdi-email</v-icon>
            <div>
              <a :href="'mailto:' + contactInfo.email" class="text-decoration-none">
                {{ contactInfo.email }}
              </a>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="glass-card animate-card">
          <v-card-text class="text-center">
            <v-icon size="large" color="primary" class="mb-2">mdi-github</v-icon>
            <div>
              <a :href="'https://' + contactInfo.github" target="_blank" class="text-decoration-none">
                GitHub
              </a>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="glass-card animate-card">
          <v-card-text class="text-center">
            <v-icon size="large" color="primary" class="mb-2">mdi-linkedin</v-icon>
            <div>
              <a :href="'https://' + contactInfo.linkedin" target="_blank" class="text-decoration-none">
                LinkedIn
              </a>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12" md="8" class="mx-auto">
        <v-card class="glass-card animate-card">
          <v-card-title class="text-center">Send me a message</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="form.name"
                label="Your Name"
                required
                variant="outlined"
                class="mb-3"
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                label="Your Email"
                type="email"
                required
                variant="outlined"
                class="mb-3"
              ></v-text-field>
              <v-textarea
                v-model="form.message"
                label="Your Message"
                required
                variant="outlined"
                rows="4"
                class="mb-3"
              ></v-textarea>
              <div class="text-center">
                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  :loading="loading"
                  class="submit-btn"
                >
                  Send Message
                </v-btn>
              </div>
            </v-form>
            <v-alert
              v-if="success"
              type="success"
              class="mt-3"
              transition="scale-transition"
            >
              Message sent successfully!
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #1e3a6d 0%, #67127a 100%);
  min-height: 100vh;
  padding: 2rem;
}

/* Dialog Scrollbar Styles */
:deep(.v-overlay__content) {
  scrollbar-width: thin;
  scrollbar-color: #67127a rgba(255, 255, 255, 0.1);
}

:deep(.v-overlay__content::-webkit-scrollbar) {
  width: 8px;
  height: 8px;
}

:deep(.v-overlay__content::-webkit-scrollbar-track) {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

:deep(.v-overlay__content::-webkit-scrollbar-thumb) {
  background: linear-gradient(45deg, #67127a, #1e3a6d);
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

:deep(.v-overlay__content::-webkit-scrollbar-thumb:hover) {
  background: linear-gradient(45deg, #8a2be2, #1e3a6d);
  cursor: pointer;
}

/* Dialog Content Styles */
:deep(.v-card) {
  max-height: 90vh;
  overflow-y: auto;
}

:deep(.v-card::-webkit-scrollbar) {
  width: 8px;
  height: 8px;
}

:deep(.v-card::-webkit-scrollbar-track) {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

:deep(.v-card::-webkit-scrollbar-thumb) {
  background: linear-gradient(45deg, #67127a, #1e3a6d);
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

:deep(.v-card::-webkit-scrollbar-thumb:hover) {
  background: linear-gradient(45deg, #8a2be2, #1e3a6d);
  cursor: pointer;
}

/* Custom Scrollbar Styles */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #67127a, #1e3a6d);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #8a2be2, #1e3a6d);
  cursor: pointer;
}

/* Firefox Scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: #67127a rgba(255, 255, 255, 0.1);
}

.glass-card {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.animate-card {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.v-icon {
  color: #ffffff !important;
}

a {
  color: #ffffff;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

a:hover {
  color: #8a2be2;
}

.submit-btn {
  background: linear-gradient(45deg, #67127a, #1e3a6d) !important;
  color: white !important;
  transition: transform 0.3s ease !important;
}

.submit-btn:hover {
  transform: scale(1.05);
}

:deep(.v-field) {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(5px);
}

:deep(.v-field__input) {
  color: white !important;
}

:deep(.v-label) {
  color: rgba(255, 255, 255, 0.7) !important;
}
</style> 