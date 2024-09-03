<template>
  <div class="flex flex-col gap-y-16">
    <h2 class="text-3xl font-poppins text-[#4728b2] md:text-4xl font-bold mb-8 dark:text-white">
      Proyectos
    </h2>
    <article
      v-for="project in projects"
      :key="project.title"
      class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
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
        <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
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
import NestIcon from './icons/skillsIcons/NestIcon.vue'
import FerreNestApi from '@/assets/ferre-nest-api.png'
import FerreteriaProjectImg from '@/assets/ferreteria-proyect.png'
import F1NodeProjectImg from '@/assets/f1-node-project.png'
import TailwindIcon from './icons/skillsIcons/TailwindIcon.vue'
import HtmlIcon from './icons/skillsIcons/HtmlIcon.vue'
import NodeIcon from './icons/skillsIcons/NodeIcon.vue'
import PostgreSQLIcon from './icons/skillsIcons/PostgreSQLIcon.vue'
import MongoDBIcon from './icons/skillsIcons/MongoDBIcon.vue'

const TAGS = {
  NEST: {
    name: 'Nest.js',
    class: 'bg-[#b00808]  text-white',
    icon: NestIcon
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
    title: 'Ferreteria Nest - Rest Api',
    description:
      'Api RestFul hecha con Nest y MongoDB, para aplicar lo aprendido de un curso, esta Api cuenta Endpoints de Customer, Category, Orders, etc.',
    github: 'https://github.com/JoseEsmil04/ferreteria-esmil-nest.git',
    image: FerreNestApi,
    tags: [TAGS.NEST, TAGS.MONGODB]
  },
  {
    title: 'JEC Ferreteros - Landing Page',
    description: 'Mi primera landing page implementando lo aprendido de Tailwind CSS',
    link: 'https://trabajo-tsi-joseesmi.netlify.app/',
    github: 'https://github.com/JoseEsmil04/jec-ferreteros',
    image: FerreteriaProjectImg,
    tags: [TAGS.HTML, TAGS.TAILWIND]
  },
  {
    title: 'F1Rest - Rest Api',
    description:
      'Api RestFul hecha con Node, Prisma y PostgreSQL. En esta api se implementa el concepto de Clean Architecture para tener una mejor estructura del proyectos para que sea mas facil de escalar y mantener.',
    github: 'https://github.com/JoseEsmil04/f1-restserver',
    image: F1NodeProjectImg,
    tags: [TAGS.NODE, TAGS.POSTGRESQL]
  }
]
</script>
