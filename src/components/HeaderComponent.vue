<template>
  <header
    class="flex px-3 fixed top-0 z-10 items-center w-full mx-auto justify-center bg-transparent dark:bg-transparent backdrop-blur-sm transition-colors duration-700"
  >
    <nav
      class="container mx-auto px-2 py-2 flex justify-center items-center flex-row text-sm font-medium rounded-full relative"
    >
      <a href="#">
        <EsmilLogo :is-dark="isDark" height="75" width="75" />
      </a>
      <div class="hidden md:flex gap-5 items-center space-x-4">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.url"
          class="text-gray-600 font-bold hover:text-[#4728b2] dark:text-gray-300 dark:hover:text-[#4728b2] hover:underline transition-colors duration-200"
        >
          {{ item.title }}
        </a>
        <button
          @click="emitDarkModeToggle"
          class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 cursor-pointer bg-transparent dark:bg-transparent"
        >
          <SunIcon
            v-if="!isDark"
            class="w-6 h-6 text-[#19cac5] hover:scale-125 transition duration-200"
          />
          <MoonIcon v-else class="w-6 h-6 text-[#19cac5] hover:scale-125 transition duration-200" />
        </button>
      </div>
      <div class="md:hidden absolute right-2">
        <button
          @click="toggleMenu"
          class="text-gray-600 dark:text-gray-300 hover:text-[#4728b2] dark:hover:text-[#4728b2] focus:outline-none"
        >
          <MenuIcon v-if="!isMenuOpen" class="w-6 h-6" />
          <XIcon v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>
    <Transition name="menu-fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-800 shadow-lg rounded-b-lg"
      >
        <div class="flex flex-col items-center p-4 space-y-4">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.url"
            @click="closeMenu"
            class="text-gray-600 font-bold hover:text-[#4728b2] dark:text-gray-300 dark:hover:text-[#4728b2] hover:underline transition-colors duration-200"
          >
            {{ item.title }}
          </a>
          <button
            @click="emitDarkModeToggle"
            class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 cursor-pointer"
          >
            <SunIcon
              v-if="!isDark"
              class="w-6 h-4 text-[#19cac5] hover:scale-125 transition duration-200"
            />
            <MoonIcon
              v-else
              class="w-6 h-4 text-[#19cac5] hover:scale-125 transition duration-200"
            />
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import EsmilLogo from './icons/EsmilLogo.vue'

const isDark = ref(false)
const isMenuOpen = ref(false)

interface navItemProp {
  title: string
  label: string
  url: string
}

interface Props {
  navItems: navItemProp[]
}
defineProps<Props>()

const emits = defineEmits<{
  darkModeToggle: [dark: boolean]
}>()

const emitDarkModeToggle = () => {
  isDark.value = !isDark.value
  emits('darkModeToggle', isDark.value)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-fade-enter-to,
.menu-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
