<script setup>
// ไม่มี props หรือ logic ที่ซับซ้อน
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <v-row justify="center" no-gutters>
        <v-col class="text-center" cols="12">
          <div class="footer-text">
            {{ new Date().getFullYear() }} — <strong>Kulisara Thongnamkhum</strong>
          </div>
          <div class="social-links">
            <a href="https://github.com/yourusername" target="_blank" class="social-link">
              <v-icon>mdi-github</v-icon>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link">
              <v-icon>mdi-linkedin</v-icon>
            </a>
            <a href="mailto:mailmint085@gmail.com" class="social-link">
              <v-icon>mdi-email</v-icon>
            </a>
          </div>
        </v-col>
      </v-row>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(45deg, #000000, #1e1e1e);
  padding: 2rem 0;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(103, 18, 122, 0.5) 50%, 
    transparent 100%
  );
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.social-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(103, 18, 122, 0.1);
  backdrop-filter: blur(5px);
}

.social-link:hover {
  color: #ffffff;
  background: rgba(103, 18, 122, 0.3);
  transform: translateY(-3px);
}

.social-link .v-icon {
  font-size: 1.5rem;
}

@media (max-width: 600px) {
  .footer {
    padding: 1.5rem 0;
    margin-top: 2rem;
  }
  
  .social-links {
    gap: 1rem;
  }
  
  .social-link {
    width: 35px;
    height: 35px;
  }
}
</style> 