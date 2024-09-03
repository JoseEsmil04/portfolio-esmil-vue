<template>
  <img
    v-if="isDark"
    src="../../assets/joseecampusanologo.png"
    alt="JoseEsmil logo"
    :height="height"
    :width="width"
  />
  <img
    v-else
    src="../../assets/joseecampusanologowhite.png"
    alt="JoseEsmil logo White"
    :height="height"
    :width="width"
  />
</template>
<script lang="ts" setup>
defineProps<{
  isDark: Boolean
  height: string
  width: string
}>()
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
