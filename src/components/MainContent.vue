<template>
  <section
    id="hero"
    class="mx-auto min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
  >
    <div class="max-w-3xl">
      <h1
        class="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#4728b2] to-[#19cac5] inline-block text-transparent bg-clip-text mb-6 sm:mb-8"
      >
        {{ hero.title }}
      </h1>
      <p class="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-600 dark:text-gray-300">
        {{ hero.subtitle }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          v-for="(button, index) in buttons"
          :key="index"
          :href="button.href"
          class="inline-flex items-center justify-center gap-2 px-4 py-2 text-white transition bg-[#4728b2] border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-[#19cac5]/80 text-sm sm:text-base hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-[#4728b2] dark:hover:border-gray-300 dark:hover:text-white group focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
        >
          <component :is="button.icon" class="w-5 h-5" />
          {{ button.text }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GithubLogo from '@/components/icons/GithubLogo.vue'
import { FileIcon, LinkedinIcon } from 'lucide-vue-next'

defineProps<{
  isDarkMode: boolean
}>()

interface HeroProps {
  title: string
  subtitle: string
}

const hero = ref<HeroProps>({
  title: 'Hey, soy José Esmil',
  subtitle:
    'Desarrollador FullStack e Ingeniero en Sistemas de Santo Domingo, República Dominicana. Especializado en crear experiencias web únicas y personalizadas.'
})

const buttons = ref([
  { href: '/src/assets/cv.pdf', icon: FileIcon, text: 'Download CV' },
  { href: 'https://www.linkedin.com/in/joseecampusano', icon: LinkedinIcon, text: 'LinkedIn' },
  { href: 'https://github.com/JoseEsmil04', icon: GithubLogo, text: 'GitHub' }
])
</script>

<style scoped>
@media (max-width: 640px) {
  .text-transparent {
    -webkit-background-clip: text;
    background-clip: text;
  }
}
</style>
