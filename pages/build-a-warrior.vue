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
import SlideOver from "~/components/global/SlideOver.vue";
import GradientText from "~/components/global/GradientText.vue";
import Navigation from "~/components/global/Navigation.vue";

let layers = reactive<any>({});
const headKey = ref(0);
const eyeKey = ref(0);
const mouthKey = ref(0);
const clothKey = ref(0);
const skinKey = ref(0);
const backKey = ref(0);
const backgroundKey = ref(0);

const successfulMessage = ref(false);
const navigation = reactive([
  {
    name: "Home",
    href: "/",
  },
  {
    name: "White Paper",
    href: "https://docs.galacticore-nft.com/",
  },
]);
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
    <template #navigation>
      <Navigation home-page="/" :navigation="navigation" />
    </template>
    <template #content>
      <div
        class="w-full flex flex-col justify-between items-start h-[87vh] md:h-[85vh] mx-auto max-w-6xl mt-10"
      >
        <div class="w-full">
          <GradientText
            class="text-3xl md:text-[60px] !tracking-widest text-center mb-10 lg:mb-20 font-bold uppercase"
          >
            Build-a-warrior
          </GradientText>
        </div>
        <div
          class="flex w-full md:flex-nowrap justify-center items-start flex-wrap gap-4 mb-10 lg:mb-0"
        >
          <div class="w-full px-8 lg:w-1/2 lg:p-4 pt-0 flex justify-center">
            <div
              id="layer-container"
              class="max-w-[500px] w-full bg-white relative"
            >
              <img
                class="object-cover opacity-0 invisible"
                :key="headKey"
                :src="layers.head"
                alt="selected head trait"
              />
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
          <div
            class="w-full px-8 lg:w-1/2 lg:p-4 grid grid-cols-2 justify-center gap-4 gap-y-6 items-center"
          >
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
            <SlideOver content="Background" custom-class="col-span-2">
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
              class="p-6 col-span-2 cursor-pointer text-white rounded mt-5 border border-[#f7f7f7] text-center uppercase relative overflow-hidden transition-all hover:text-black after:content-[''] after:absolute after:w-0 after:bottom-0 after:-left-[10%] after:h-[120%] after:skew-x-[15deg] after:-z-[1] hover:after:-left-[10%] after:transition-all after:ease-in-out after:duration-700 hover:after:w-[120%] after:bg-[#f7f7f7]"
            >
              Download
            </button>
          </div>
        </div>
        <div
          class="relative z-10 w-full mt-auto text-black flex justify-center mb-3 md:mb-16"
        >
          <div class="relative">
            <img
              src="/img/galacticore-logo.png"
              alt="galacticore logo"
              class="w-full h-20 object-contain"
            />
            <img
              src="/img/twitter-logo.svg"
              class="absolute cursor-pointer -top-2 left-1/2 ml-5 w-6 h-6 z-10 hover:-translate-y-2 hover:scale-110 transition-all ease-in-out"
            />
            <img
              src="/img/discord-logo.svg"
              class="absolute cursor-pointer -top-2 right-1/2 w-6 h-6 z-10 hover:-translate-y-2 hover:scale-110 transition-all ease-in-out"
            />
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
