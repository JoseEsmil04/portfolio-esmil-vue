<template>
  <article
    class="flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-gradient-to-br from-[#4728b2]/10 to-[#19cac5]/10 rounded-xl backdrop-blur-sm"
  >
    <div class="order-2 md:order-1 max-w-2xl">
      <h2
        class="text-3xl md:text-4xl font-poppins font-bold mb-6 bg-gradient-to-r from-[#4728b2] to-[#19cac5] text-transparent bg-clip-text dark:text-white"
      >
        Sobre mí
      </h2>
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-lg"> <p class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b from-[#4728b2] to-[#19cac5]" > Soy José Esmi, desarrollador Fullstack con más de dos años de experiencia en el mundo del desarrollo de software. Mi enfoque principal ha sido la creación de soluciones robustas utilizando tecnologías como Node.js, NestJS y .NET en el backend, y actualmente también trabajo con Vue.js para el desarrollo frontend. <span class="font-semibold text-[#19cac5]"> A lo largo de mi trayectoria, me he especializado en la construcción de APIs REST, microservicios y sistemas escalables, y disfruto combinar el poder del backend con la experiencia de usuario en el frontend. </span> </p> <p class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b from-[#4728b2] to-[#19cac5]" > Actualmente estoy en proceso de obtener mi título en Ingeniería en Sistemas, y siempre he mantenido un enfoque centrado en el aprendizaje continuo y la mejora constante de mis habilidades técnicas y profesionales. <span class="font-semibold text-[#4728b2]"> Fuera del ámbito profesional, me apasionan los deportes como el béisbol, el baloncesto, también me gusta mucho la música y disfruto de pasar tiempo al aire libre, especialmente en el campo.</span> </p> </div>
    </div>
    <div class="order-1 md:order-2 relative">
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#4728b2] to-[#19cac5] rounded-full blur-xl opacity-30 animate-pulse"
      ></div>
      <img
        width="256"
        height="256"
        :src="MyImage"
        alt="Jose Esmil"
        class="relative z-10 w-64 h-64 object-cover rounded-xl border-4 border-[#19cac5] dark:border-[#4728b2] shadow-lg transform hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
  </article>
</template>
<script setup lang="ts">
import MyImage from '@/assets/JoseEsmi.webp'
</script>
<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
