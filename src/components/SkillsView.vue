<template>
  <section id="habilidades" class="py-20">
    <h2
      class="font-poppins text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white bg-gradient-to-r from-[#4728b2] to-[#19cac5] text-transparent bg-clip-text"
    >
      Habilidades
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#4728b2] to-[#19cac5] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        ></div>
        <component
          :is="skillIcons(skill.name)"
          class="w-16 h-16 mb-6 transition-transform duration-300 group-hover:scale-110"
          :style="{ color: skill.color }"
        />
        <span
          class="text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2"
          >{{ skill.name }}</span
        >
        <div
          class="absolute inset-0 border-2 border-transparent group-hover:border-current transition-all duration-300 rounded-lg"
          :style="{ borderColor: skill.color }"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import NestIcon from '@/components/icons/skillsIcons/NestIcon.vue'
import NodeIcon from '@/components/icons/skillsIcons/NodeIcon.vue'
import GitIcon from '@/components/icons/skillsIcons/GitIcon.vue'
import VueIcon from '@/components/icons/skillsIcons/VueIcon.vue'
import JavascriptIcon from '@/components/icons/skillsIcons/JavascriptIcon.vue'
import PostgreSQLIcon from '@/components/icons/skillsIcons/PostgreSQLIcon.vue'
import TypeScriptIcon from '@/components/icons/skillsIcons/TypeScriptIcon.vue'
import CSharpIcon from '@/components/icons/skillsIcons/CSharpIcon.vue'

const skills = [
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'TypeScript', color: '#007acc' },
  { name: 'C#', color: '#68217a' },
  { name: 'Node.js', color: '#339933' },
  { name: 'NestJS', color: '#e0234e' },
  { name: 'Git', color: '#f05032' },
  { name: 'Vue', color: '#4fc08d' },
  { name: 'PostgreSQL', color: '#336791' }
]

const skillIcons = (skill: string) => {
  switch (skill) {
    case 'JavaScript':
      return JavascriptIcon
    case 'TypeScript':
      return TypeScriptIcon
    case 'C#':
      return CSharpIcon
    case 'NestJS':
      return NestIcon
    case 'Node.js':
      return NodeIcon
    case 'Git':
      return GitIcon
    case 'Vue':
      return VueIcon
    case 'PostgreSQL':
      return PostgreSQLIcon
    default:
      return ''
  }
}
</script>

<style scoped>
@keyframes pulse-border {
  0%,
  100% {
    box-shadow: 0 0 0 0 currentColor;
  }
  50% {
    box-shadow: 0 0 0 4px currentColor;
  }
}

.group:hover .border-current {
  animation: pulse-border 1.5s infinite;
}
</style>
