<script setup lang="ts">
const navigation = reactive([]);
const layers = reactive({
  head: 1,
  eye: 2,
  mouth: 3,
  cloth: 3,
  skin: 2,
  back: 1,
  background: 2,
});

const images = reactive({
  head: {},
  eye: {},
  mouth: {},
  cloth: {},
  skin: {},
  back: {},
  background: {},
});
</script>
<template>
  <NuxtLayout>
    <template #navigation>
      <Navigation :navigation="navigation" />
    </template>
    <template #content>
      <div class="w-full h-[85vh] flex justify-center items-center">
        <div class="flex md:flex-nowrap flex-wrap gap-4 w-full max-w-5xl">
          <div class="w-1/2 p-4">
            <div class="h-[450px] w-[450px] relative">
              <div
                class="absolute w-full h-full"
                v-for="(layer, key) in layers"
                :key="key"
              >
                <img :src="layer" :alt="'layer ' + key" />
              </div>
            </div>
          </div>
          <div class="w-1/2 bg-white p-4">
            <div class="grid w-full">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
