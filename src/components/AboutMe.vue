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
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
        <p
          class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b from-[#4728b2] to-[#19cac5]"
        >
          Soy José Esmi, desarrollador comprometido con más de dos años de experiencia en
          programación, especializado en tecnologías como Node.js, Nest y .NET.
          <span class="font-semibold text-[#19cac5]">
            Mi trayectoria se ha centrado en el desarrollo de backends, APIs REST y microservicios,
            y actualmente estoy expandiendo mis habilidades hacia el frontend con Vue.js, con el
            objetivo de convertirme en un desarrollador Fullstack.
          </span>
        </p>
        <p
          class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b from-[#4728b2] to-[#19cac5]"
        >
          Estoy próximo a obtener mi título en Ingeniería en Sistemas, y mi enfoque ha sido siempre
          el aprendizaje continuo y el perfeccionamiento de mis habilidades técnicas.
          <span class="font-semibold text-[#4728b2]">
            Fuera del ámbito profesional, disfruto de deportes como el béisbol y el baloncesto, así
            como actividades al aire libre, especialmente ir al campo y conectar con la naturaleza.
          </span>
        </p>
      </div>
    </div>
    <div class="order-1 md:order-2 relative">
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#4728b2] to-[#19cac5] rounded-full blur-xl opacity-30 animate-pulse"
      ></div>
      <img
        width="256"
        height="256"
        src="/src/assets/JoseEsmil.png"
        :alt="personalImageAlt"
        class="relative z-10 w-64 h-64 object-cover rounded-3xl border-4 border-[#19cac5] dark:border-[#4728b2] shadow-lg transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
const personalImageAlt = 'Jose Esmil'
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
