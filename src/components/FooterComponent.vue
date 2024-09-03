<template>
  <footer class="shadow bg-transparent py-4 transition-colors duration-300">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between justify-center"
    >
      <span class="text-sm text-gray-500 md:text-center dark:text-gray-400 flex"
        >&copy; {{ new Date().getFullYear() }} {{ 'Jose Esmi Campusano' }}
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm sm:mt-0 justify-center">
        <li>
          <a
            v-for="item in navItems"
            :key="item.title"
            :href="item.url"
            class="text-gray-600 font-semibold hover:text-[#4728b2] dark:text-gray-300 dark:hover:text-[#4728b2] hover:underline transition-colors duration-200 me-4 md:me-6"
            >{{ item.title }}</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface NavItemsInterface {
  title: string
  label: string
  url: string
}
interface Props {
  navItems: NavItemsInterface[]
}
defineProps<Props>()
</script>

<style scoped></style>
