<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "font-sans antialiased relative",
  },
  htmlAttrs: {
    class: "h-full bg-[#121212] overflow-x-hidden scroll-smooth",
  },
});
</script>
<template>
  <div class="w-full">
    <!--  navigation -->
    <slot name="navigation" />
    <!--  content -->
    <slot name="content" />
  </div>
</template>
