<script setup lang="ts">
const navigation = reactive([]);
const images = reactive({
  head: {},
  eye: {},
  mouth: {},
  cloth: {},
  skin: {},
  back: {},
  background: {},
});

(async () => {
  const headFiles = await import.meta.glob("/public/traits/head/*.png");
  images.head = Object.fromEntries(
    Object.entries(headFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+)\.png$/)[1];
      const absolutePath = image.name.replace("public/", "");
      return [name, absolutePath];
    })
  );
  console.log(images.head);
  const eyeFiles = await import.meta.glob("../assets/traits/eye/*.png");
  images.eye = Object.fromEntries(
    Object.entries(eyeFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+)\.png$/)[1];
      return [name, image];
    })
  );

  const mouthFiles = await import.meta.glob("../assets/traits/mouth/*.png");
  images.mouth = Object.fromEntries(
    Object.entries(mouthFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+)\.png$/)[1];
      return [name, image];
    })
  );

  const clothFiles = await import.meta.glob("../assets/traits/cloth/*.png");
  images.cloth = Object.fromEntries(
    Object.entries(clothFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+)\.png$/)[1];
      return [name, image];
    })
  );
  const skinFiles = await import.meta.glob("../assets/traits/skin/*.png");
  images.skin = Object.fromEntries(
    Object.entries(skinFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+).png$/)[1];
      return [name, image];
    })
  );
  const backFiles = await import.meta.glob("../assets/traits/back/*.png");
  images.back = Object.fromEntries(
    Object.entries(backFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+).png$/)[1];
      return [name, image];
    })
  );

  const bgFiles = await import.meta.glob("../assets/traits/background/*.png");
  images.background = Object.fromEntries(
    Object.entries(bgFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+).png$/)[1];
      return [name, image];
    })
  );
})();

const layers = reactive({
  head: 1,
  eye: 2,
  mouth: 3,
  cloth: 3,
  skin: 2,
  back: 1,
  background: 2,
});
</script>
<template>
  <NuxtLayout>
    <template #content>
      {{ images.head }}
      <div class="w-full h-[85vh] flex justify-center items-center">
        <div class="flex md:flex-nowrap flex-wrap gap-4 w-full max-w-5xl">
          <div class="w-1/2 p-4">
            <div class="h-[450px] w-[450px] relative">
              <div v-for="image in images.head">
                <img :src="image" />
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
