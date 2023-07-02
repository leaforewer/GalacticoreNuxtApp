<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-[#121212] scroll-smooth font-sans overflow-x-hidden antialiased",
  },
  htmlAttrs: {
    lang: "en",
    class: "overflow-x-hidden",
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
