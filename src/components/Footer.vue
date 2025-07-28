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
            <a href="https://github.com/Milarize" target="_blank" class="social-link" title="GitHub">
              <v-icon>mdi-github</v-icon>
            </a>

            <a href="mailto:mailmint085@gmail.com" class="social-link" title="Email">
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
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  padding: 3rem 0 2rem;
  margin-top: 4rem;
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3);
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(103, 18, 122, 0.8) 25%, 
    rgba(255, 255, 255, 0.8) 50%, 
    rgba(103, 18, 122, 0.8) 75%, 
    transparent 100%
  );
  animation: shimmer 3s ease-in-out infinite;
}

.footer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(103, 18, 122, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

@keyframes shimmer {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.footer-content {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.footer-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.footer-text strong {
  background: linear-gradient(45deg, #671272, #9c27b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.footer-quote {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 1.5rem;
  font-weight: 300;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.social-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.social-link:hover::before {
  left: 100%;
}

.social-link:hover {
  color: #ffffff;
  background: rgba(103, 18, 122, 0.3);
  transform: translateY(-5px) scale(1.1);
  border-color: rgba(103, 18, 122, 0.5);
  box-shadow: 0 10px 25px rgba(103, 18, 122, 0.3);
}

.social-link .v-icon {
  font-size: 1.6rem;
  position: relative;
  z-index: 1;
}

@media (max-width: 600px) {
  .footer {
    padding: 2rem 0 1.5rem;
    margin-top: 2rem;
  }
  
  .footer-content {
    padding: 0 1rem;
  }
  
  .social-links {
    gap: 1rem;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
  }
  
  .social-link .v-icon {
    font-size: 1.4rem;
  }
  
  .footer-text {
    font-size: 1rem;
  }
  
  .footer-quote {
    font-size: 0.8rem;
  }
}
</style> 