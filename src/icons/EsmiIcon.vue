<template>
  <img
    v-if="isDark"
    src="../assets/joseecampusanologo.webp"
    alt="JoseEsmil logo"
    :height="height"
    :width="width"
    loading="lazy"
  />
  <img
    v-else
    src="../assets/joseecampusanologowhite.webp"
    alt="JoseEsmil logo White"
    :height="height"
    :width="width"
    loading="lazy"
  />
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

defineProps<{
  isDark: Boolean
}>()

const { height, width } = reactive({ height: 75, width: 75 })
</script>
<style scoped>
img {
  -webkit-user-drag: none; /* Safari y Chrome */
  -moz-user-drag: none; /* Firefox */
  -ms-user-drag: none; /* Edge */
  -user-drag: none; /* Standard */
  pointer-events: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
