<template>
  <div ref="contactSection" class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4728b2] to-[#19cac5] mb-12 transform transition-all duration-1000"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
      >
        ¿Necesitas ayuda para llevar tu proyecto al siguiente nivel?
      </h1>
      <a
        href="mailto:josecampusano0427@gmail.com"
        class="inline-block px-8 py-4 text-lg font-semibold text-white border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-[#19cac5]/80 sm:text-base hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-[#4728b2] dark:hover:border-gray-300 dark:hover:text-white bg-[#4728b2] rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
      >
        Contactame
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const contactSection = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const checkVisibility = () => {
  if (contactSection.value) {
    const rect = contactSection.value.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    isVisible.value = rect.top <= windowHeight * 0.75
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkVisibility)
  checkVisibility() // Check initial visibility
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility)
})
</script>
