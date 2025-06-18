<script setup>
import Header from './Header.vue'
import Home from './Home.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'
import About from './About.vue'
import Experience from './Experience.vue'
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <Home />
      <v-container>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
.v-application {
  font-family: 'Tagesschrift', sans-serif;
  background-color: #000000 !important;
}

h2 {
  color: #67127a;
}
</style> 