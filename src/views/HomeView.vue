<template>
  <div :class="{ dark: isDarkMode }" class="min-h-screen font-epilogue antialiased">
    <div :class="isDarkMode ? 'bg-slate-950' : 'bg-white'" class="relative h-full w-full">
      <div
        :class="[
          'absolute bottom-0 left-0 right-0 top-0',
          'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]',
          'bg-[size:14px_24px]',
          '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]',
          isDarkMode ? 'bg-slate-950' : 'bg-white'
        ]"
      ></div>
      <div class="relative h-full w-full transition-colors duration-300">
        <HeaderComponent :nav-items="navItems" v-on:dark-mode-toggle="toggleDarkMode" />
        <main class="mx-auto max-w-screen-lg px-4 lg:px-8">
          <MainContent :is-dark-mode="isDarkMode" />
          <section id="sobre-mi" class="py-20">
            <AboutMe />
          </section>
          <section id="proyectos">
            <ProjectsView />
          </section>
          <section id="habilidades">
            <SkillsView />
          </section>
          <section id="contacto" class="">
            <ContactComponent />
          </section>
        </main>
        <FooterComponent :nav-items="navItems" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Supports weights 100-900

import { ref } from 'vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import MainContent from '@/components/MainContent.vue'
import ProjectsView from '@/components/ProjectsView.vue'
import AboutMe from '@/components/AboutMe.vue'
import SkillsView from '@/components/SkillsView.vue'
import ContactComponent from '@/components/ContactComponent.vue'

const navItems = [
  {
    title: 'Tecnologias',
    label: 'habilidades',
    url: '/#habilidades'
  },
  {
    title: 'Proyectos',
    label: 'proyectos',
    url: '/#proyectos'
  },
  {
    title: 'Sobre mí',
    label: 'sobre-mi',
    url: '/#sobre-mi'
  },
  {
    title: 'Contacto',
    label: 'contacto',
    url: 'mailto:josecampusano0427@gmail.com'
  }
]

const isDarkMode = ref(true)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>
<style>
@keyframes iconGlow {
  0% {
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3)) brightness(1);
  }
  50% {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) brightness(1.5);
  }
  100% {
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3)) brightness(1);
  }
}

.icon-style {
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  transition: filter 0.3s ease-in-out;
}

.icon-style:hover {
  animation: iconGlow 1s ease-in-out infinite;
}
</style>
