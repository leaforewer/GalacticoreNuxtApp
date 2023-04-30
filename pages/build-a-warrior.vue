<script setup lang="ts">
import html2canvas from "html2canvas";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/24/outline";

let layers = reactive<any>({});
const headKey = ref(0);
const eyeKey = ref(0);
const mouthKey = ref(0);
const clothKey = ref(0);
const skinKey = ref(0);
const backKey = ref(0);
const backgroundKey = ref(0);

const successfulMessage = ref(false);
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

const handleHead = (head: any) => {
  layers.head = head;
  headKey.value += 1;
};

const handleEye = (eye: any) => {
  layers.eye = eye;
  eyeKey.value += 1;
};
const handleMouth = (mouth: any) => {
  layers.mouth = mouth;
  mouthKey.value += 1;
};
const handleCloth = (cloth: any) => {
  layers.cloth = cloth;
  clothKey.value += 1;
};
const handleSkin = (skin: any) => {
  layers.skin = skin;
  skinKey.value += 1;
};
const handleBack = (back: any) => {
  layers.back = back;
  backKey.value += 1;
};

const handleBackground = (background: any) => {
  layers.background = background;
  backgroundKey.value += 1;
};

function downloadImage() {
  const container = document.querySelector("#layer-container");
  html2canvas(container).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "your-galactic-warrior.png");
    downloadLink.setAttribute("href", imgData);
    downloadLink.click();
    successfulMessage.value = true;
  });
}
</script>
<template>
  <NuxtLayout>
    <template #content>
      <div class="w-full h-[85vh] flex justify-center items-center">
        <div class="flex md:flex-nowrap flex-wrap gap-4 w-full max-w-5xl">
          <div class="w-1/2 p-4">
            <div
              id="layer-container"
              class="max-w-[450px] h-[450px] w-full bg-white relative"
            >
              <img
                class="object-cover absolute inset-0 z-[7]"
                :key="headKey"
                :src="layers.head"
                alt="selected head trait"
              />
              <img
                class="object-cover absolute inset-0 z-[6]"
                :key="eyeKey"
                :src="layers.eye"
                alt="selected eye trait"
              />
              <img
                class="object-cover absolute inset-0 z-[5]"
                :key="mouthKey"
                :src="layers.mouth"
                alt="selected mouth trait"
              />
              <img
                class="object-cover absolute inset-0 z-[4]"
                :key="clothKey"
                :src="layers.cloth"
                alt="selected cloth trait"
              />
              <img
                class="object-cover absolute inset-0 z-[3]"
                :key="skinKey"
                :src="layers.skin"
                alt="selected skin trait"
              />
              <img
                class="object-cover absolute inset-0 z-[2]"
                :key="backKey"
                :src="layers.back"
                alt="selected back trait"
              />
              <img
                class="object-cover absolute inset-0 z-[1]"
                :key="backgroundKey"
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
                  @click="handleHead(image)"
                  class="col-span-1 transition-all ease-in-out cursor-pointer h-[100px] flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
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
                  @click="handleEye(image)"
                  class="col-span-1 transition-all ease-in-out cursor-pointer h-[100px] flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
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
                  @click="handleMouth(image)"
                  class="col-span-1 transition-all ease-in-out cursor-pointer scale-110 flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
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
                  @click="handleCloth(image)"
                  class="col-span-1 transition-all ease-in-out cursor-pointer flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
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
                  @click="handleSkin(image)"
                  class="col-span-1 transition-all ease-in-out cursor-pointer flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
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
                  @click="handleBack(image)"
                  class="col-span-1 transition-all ease-in-out cursor-pointer flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
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
                  @click="handleBackground(image)"
                  class="col-span-1 transition-all ease-in-out cursor-pointer flex items-baseline overflow-hidden rounded hover:-translate-y-5 hover:scale-110 hover:bg-gray-300 hover:shadow-xl"
                >
                  <img
                    class="object-cover max-w-full block pb-4"
                    :alt="key"
                    :src="image"
                  />
                </div>
              </div>
            </SlideOver>
            <button
              @click="downloadImage"
              class="p-6 w-full bg-gray-800 text-white rounded mt-10"
            >
              Download
            </button>
          </div>
        </div>
      </div>
      <!--   Modal Start  -->
      <TransitionRoot as="template" :show="successfulMessage">
        <Dialog
          as="div"
          class="relative z-10"
          @close="successfulMessage = false"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>
          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div
              class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
            >
              <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 translate-y-0 sm:scale-100"
                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel
                  class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
                >
                  <div>
                    <div
                      class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
                    >
                      <CheckIcon
                        class="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="mt-3 text-center sm:mt-5">
                      <DialogTitle
                        as="h3"
                        class="text-base font-semibold leading-6 text-gray-900"
                        >Downloaded Successfully
                      </DialogTitle>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500 leading-8">
                          Don't forget to share your Warrior with
                          <b class="tracking-wide"
                            >#Galacticore on
                            <a
                              target="_blank"
                              href="https://twitter.com/intent/tweet?text=Check%20out%20my%20awesome%20warrior!&via=GalacticoreNFT
"
                              class="text-sky-400"
                              >Twitter</a
                            ></b
                          ><br />or share it on our
                          <a
                            target="_blank"
                            href="https://discord.gg/AdbmF9pwgZ"
                            class="text-blue-600 font-bold"
                            >Discord</a
                          >
                          server!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 sm:mt-6">
                    <button
                      type="button"
                      class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      @click="successfulMessage = false"
                    >
                      Got it!
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
      <!--   Modal End   -->
    </template>
  </NuxtLayout>
</template>
