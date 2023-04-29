<script setup lang="ts">
let layers = reactive({});
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
  const eyeFiles = await import.meta.glob("/public/traits/eye/*.png");
  images.eye = Object.fromEntries(
    Object.entries(eyeFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+)\.png$/)[1];
      const absolutePath = image.name.replace("public/", "");
      return [name, absolutePath];
    })
  );

  const mouthFiles = await import.meta.glob("/public/traits/mouth/*.png");
  images.mouth = Object.fromEntries(
    Object.entries(mouthFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+)\.png$/)[1];
      const absolutePath = image.name.replace("public/", "");
      return [name, absolutePath];
    })
  );

  const clothFiles = await import.meta.glob("/public/traits/cloth/*.png");
  images.cloth = Object.fromEntries(
    Object.entries(clothFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+)\.png$/)[1];
      const absolutePath = image.name.replace("public/", "");
      return [name, absolutePath];
    })
  );
  const skinFiles = await import.meta.glob("/public/traits/skin/*.png");
  images.skin = Object.fromEntries(
    Object.entries(skinFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+).png$/)[1];
      const absolutePath = image.name.replace("public/", "");
      return [name, absolutePath];
    })
  );
  const backFiles = await import.meta.glob("/public/traits/back/*.png");
  images.back = Object.fromEntries(
    Object.entries(backFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+).png$/)[1];
      const absolutePath = image.name.replace("public/", "");
      return [name, absolutePath];
    })
  );

  const bgFiles = await import.meta.glob("/public/traits/background/*.png");
  images.background = Object.fromEntries(
    Object.entries(bgFiles).map(([path, image]) => {
      const name = path.match(/\/([^/]+).png$/)[1];
      const absolutePath = image.name.replace("public/", "");
      return [name, absolutePath];
    })
  );

  layers = {
    head: images.head.h1,
    eye: images.eye.e1,
    mouth: images.mouth.m1,
    cloth: images.cloth.c1,
    skin: images.skin.s1,
    back: images.back.b1,
    background: images.background.bg1,
  };
})();
</script>
<template>
  <NuxtLayout>
    <template #content>
      <div class="w-full h-[85vh] flex justify-center items-center">
        <div class="flex md:flex-nowrap flex-wrap gap-4 w-full max-w-5xl">
          <div class="w-1/2 p-4">
            <div class="max-w-[450px] h-[450px] w-full bg-white relative">
              <img
                class="object-cover absolute inset-0 z-[7]"
                :src="layers.head"
                alt="selected head trait"
              />
              <img
                class="object-cover absolute inset-0 z-[6]"
                :src="layers.eye"
                alt="selected eye trait"
              />
              <img
                class="object-cover absolute inset-0 z-[5]"
                :src="layers.mouth"
                alt="selected mouth trait"
              />
              <img
                class="object-cover absolute inset-0 z-[4]"
                :src="layers.cloth"
                alt="selected cloth trait"
              />
              <img
                class="object-cover absolute inset-0 z-[3]"
                :src="layers.skin"
                alt="selected skin trait"
              />
              <img
                class="object-cover absolute inset-0 z-[2]"
                :src="layers.back"
                alt="selected back trait"
              />
              <img
                class="object-cover absolute inset-0 z-[1]"
                :src="layers.background"
                alt="selected background trait"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center gap-4 items-center w-1/3">
            <SlideOver content="Head">
              <div class="grid grid-cols-3 gap-x-6 gap-y-4">
                <div
                  v-for="(image, key) in images.head"
                  class="col-span-1 transition-all ease-in-out h-[100px] flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
                >
                  <img
                    class="object-cover max-w-full block pb-4"
                    :alt="key"
                    :src="image"
                  />
                </div>
              </div>
            </SlideOver>
            <SlideOver content="Eye">
              <div class="grid grid-cols-3 gap-x-6 gap-y-4">
                <div
                  v-for="(image, key) in images.eye"
                  class="col-span-1 transition-all ease-in-out h-[100px] flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
                >
                  <img
                    class="object-cover max-w-full block pb-4"
                    :alt="key"
                    :src="image"
                  />
                </div>
              </div>
            </SlideOver>
            <SlideOver content="Mouth">
              <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                <div
                  v-for="(image, key) in images.mouth"
                  class="col-span-1 transition-all ease-in-out scale-110 flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
                >
                  <img
                    class="object-cover max-w-full block pb-4"
                    :alt="key"
                    :src="image"
                  />
                </div>
              </div>
            </SlideOver>
            <SlideOver content="Cloth">
              <div class="grid grid-cols-3 gap-x-6 gap-y-4">
                <div
                  v-for="(image, key) in images.cloth"
                  class="col-span-1 transition-all ease-in-out flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
                >
                  <img
                    class="object-cover max-w-full block pb-4"
                    :alt="key"
                    :src="image"
                  />
                </div>
              </div>
            </SlideOver>
            <SlideOver content="Skin">
              <div class="grid grid-cols-3 gap-x-6 gap-y-4">
                <div
                  v-for="(image, key) in images.skin"
                  class="col-span-1 transition-all ease-in-out flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
                >
                  <img
                    class="object-cover max-w-full block pb-4"
                    :alt="key"
                    :src="image"
                  />
                </div>
              </div>
            </SlideOver>
            <SlideOver content="Back">
              <div class="grid grid-cols-3 gap-x-6 gap-y-4">
                <div
                  v-for="(image, key) in images.back"
                  class="col-span-1 transition-all ease-in-out flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
                >
                  <img
                    class="object-cover max-w-full block pb-4"
                    :alt="key"
                    :src="image"
                  />
                </div>
              </div>
            </SlideOver>
            <SlideOver content="Background">
              <div class="grid grid-cols-3 gap-x-6 gap-y-4">
                <div
                  v-for="(image, key) in images.background"
                  class="col-span-1 transition-all ease-in-out flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
                >
                  <img
                    class="object-cover max-w-full block pb-4"
                    :alt="key"
                    :src="image"
                  />
                </div>
              </div>
            </SlideOver>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
