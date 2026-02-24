<template>
  <div class="flex flex-col">
    <h2 class="text-3xl font-poppins text-[#4728b2] md:text-4xl font-bold mb-8 dark:text-white">
      Proyectos
    </h2>
    <article
      v-for="project in projects"
      :key="project.title"
      class="flex flex-col space-x-0 mb-10 group md:flex-row md:space-x-8 md:space-y-0"
    >
      <div class="w-full md:w-1/2">
        <div
          class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"
        >
          <img
            :alt="project.title"
            :src="project.image"
            class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <div class="w-full md:w-1/2 md:max-w-lg">
        <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 md:mt-0 mt-8">
          {{ project.title }}
        </h3>
        <div class="flex flex-wrap mt-2">
          <ul class="flex flex-row mb-2 gap-x-2">
            <li v-for="tag in project.tags" :key="tag.name">
              <span class="flex gap-x-2 rounded-full text-xs py-2 px-3" :class="tag.class">
                <component :is="tag.icon" class="size-4" />
                {{ tag.name }}
              </span>
            </li>
          </ul>
        </div>

        <div class="mt-2 text-gray-700 dark:text-gray-400">
          {{ project.description }}
        </div>
        <footer class="flex items-end justify-start mt-4 gap-x-4">
          <a
            v-if="project.github"
            :href="project.github"
            class="dark:text-white inline-flex items-center justify-center gap-2 px-3 py-2 text-white transition bg-[#4728b2] border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 focus-visible:ring-[#19cac5]/80 text-sm sm:text-base hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-[#4728b2] dark:hover:border-gray-300 dark:hover:text-white group focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
          >
            <Link class="size-6" />
            Code
          </a>
          <a
            v-if="project.link"
            :href="project.link"
            class="inline-flex items-center justify-center gap-2 px-3 py-2 text-white transition bg-[#4728b2] border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-[#19cac5]/80 text-sm sm:text-base hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-[#4728b2] dark:hover:border-gray-300 dark:hover:text-white group focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
          >
            <Link class="size-4" />
            Preview
          </a>
        </footer>
      </div>
    </article>
  </div>
</template>
<script setup lang="ts">
import FixopolisApi from '@/assets/fixopolis-api.webp'
import FixopolisFrontend from '@/assets/fixopolis-frontend.webp'
import JEaiProject from '@/assets/je.ai-proyect.webp'
import ShopNest from '@/assets/shop-nest.webp'
import VueIcon from '@/icons/skillsIcons/VueIcon.vue';
import NestIcon from '@/icons/skillsIcons/NestIcon.vue';
import TailwindIcon from '@/icons/skillsIcons/TailwindIcon.vue';
import HtmlIcon from '@/icons/skillsIcons/HtmlIcon.vue';
import NodeIcon from '@/icons/skillsIcons/NodeIcon.vue';
import MongoDBIcon from '@/icons/skillsIcons/MongoDBIcon.vue';
import PostgreSQLIcon from '@/icons/skillsIcons/PostgreSQLIcon.vue';
import CSharpIcon from '@/icons/skillsIcons/CSharpIcon.vue';
import ReactIcon from '@/icons/skillsIcons/ReactIcon.vue';


const TAGS = {
  NEST: {
    name: 'NestJS',
    class: 'bg-[#b00808]  text-white',
    icon: NestIcon
  },
  CSHARP: {
    name: 'C#',
    class: 'bg-[#68217a]  text-white',
    icon: CSharpIcon
  },
  VUE: {
    name: 'Vuejs',
    class: 'bg-[#317356]  text-white',
    icon: VueIcon
  },
  REACT: {
    name: 'React',
    class: 'bg-[#347482] text-white',
    icon: ReactIcon
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-[#003159] text-white',
    icon: TailwindIcon
  },
  HTML: {
    name: 'HTML',
    class: 'bg-[#a04b00] text-white',
    icon: HtmlIcon
  },
  NODE: {
    name: 'Node',
    class: 'bg-[#146f02] text-white',
    icon: NodeIcon
  },
  MONGODB: {
    name: 'MongoDB',
    class: 'bg-[#007a34] text-white',
    icon: MongoDBIcon
  },
  POSTGRESQL: {
    name: 'PostgreSQL',
    class: 'bg-[#024e6f] text-white',
    icon: PostgreSQLIcon
  }
}

const projects = [
  {
    title: 'Fixopolis - WebApi',
    description:
      'WebApi hecha con .NET, Entity Framework y PostgresSQL para aplicar lo aprendido, esta Api trata sobre una ferreteria y cuenta con Endpoints de Products, Category, Orders, etc.',
    link: 'https://fixopolis-api.onrender.com/swagger',
    github: 'https://github.com/JoseEsmil04/fixopolis-api.git',
    image: FixopolisApi,
    tags: [TAGS.CSHARP, TAGS.POSTGRESQL]
  },
  {
    title: 'Fixopolis - Frontend',
    description:
      'Frontend moderno desarrollado con React y Tailwind CSS para una plataforma e-commerce del sector ferretero. Implementa arquitectura basada en componentes, consumo eficiente de API REST en .NET y diseño responsive optimizado para experiencia de usuario.',
    link: 'https://fixopolis.vercel.app',
    github: 'https://github.com/JoseEsmil04/fixopolis-frontend.git',
    image: FixopolisFrontend,
    tags: [TAGS.HTML, TAGS.REACT, TAGS.TAILWIND]
  },
  {
    title: 'JE.ai - AI Chat',
    description: 'Aplicación de chat que simula una inteligencia artificial similar a ChatGPT o Gemini. Este proyecto utiliza la API de IA de Gemini para ofrecer respuestas inteligentes en una interfaz moderna.',
    link: 'https://je-ai.netlify.app/',
    github: 'https://github.com/JoseEsmil04/esmil-ia-chat',
    image: JEaiProject,
    tags: [TAGS.VUE, TAGS.HTML, TAGS.TAILWIND]
  },
  {
    title: 'Shop - RestApi',
    description:
      'API modular desarrollada con NestJS, PostgreSQL y WebSockets. Incluye autenticación JWT, gestión de productos de ropa, seed de datos y manejo de archivos, siguiendo la arquitectura modular nativa de NestJS para lograr escalabilidad y mantenibilidad.',
    github: 'https://github.com/JoseEsmil04/shop-nest',
    image: ShopNest,
    tags: [TAGS.NEST, TAGS.POSTGRESQL]
  }
]
</script>
