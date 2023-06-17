<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div :key="item.name" class="screen">
    <div
      class="screen-image"
      :style="{ backgroundImage: `url(${item.bg_image})` }"
    ></div>
    <div class="screen-overlay"></div>
    <div
      class="screen-content relative z-[2] flex flex-col flex-1 justify-end items-center p-5"
    >
      <img
        class="h-56 w-56 rounded-full opacity-80"
        :src="item.imageUrl"
        :alt="item.name"
      />
      <div class="text-center mt-12">
        <h3
          class="text-xl tracking-widest font-semibold leading-7 tracking-relaxed text-white"
        >
          {{ item.name }}
        </h3>
        <p class="text-sm italic font-bold leading-6 text-white">
          {{ item.role }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.screen {
  width: 350px;
  display: flex;
  border: 2px solid #9fe870;
  aspect-ratio: 10 / 14;
  border-radius: 1rem;
  background-color: #2f5c11;
  overflow: hidden;
  position: relative;
  z-index: 10;
}

.screen:after,
.screen:before {
  content: "";
  height: 5px;
  position: absolute;
  z-index: 4;
  left: 50%;
  translate: -50% 0%;
  background-color: white;
}

.screen:before {
  width: 15%;
  top: 0rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.screen:after {
  width: 25%;
  bottom: 0rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

@keyframes pan-overlay {
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: 0% -100%;
  }
}

.screen-overlay {
  background: linear-gradient(
    rgb(33 150 243 / 0.15),
    rgb(33 150 243 / 0.15) 3px,
    transparent 3px,
    transparent 9px
  );
  background-size: 100% 9px;
  height: 100%;
  width: 100%;
  animation: pan-overlay 22s infinite linear;
  position: absolute;
  z-index: 2;
  left: 0px;
  top: 0px;
}

@keyframes pan-image {
  0% {
    background-position: 36% 42%;
    background-size: 200%;
  }

  20% {
    background-position: 30% 35%;
    background-size: 200%;
  }

  20.0001% {
    /* -- View 2 -- */
    background-position: 60% 85%;
    background-size: 500%;
  }

  40% {
    background-position: 49% 81%;
    background-size: 500%;
  }

  40.0001% {
    /* -- View 3 -- */
    background-position: 80% 42%;
    background-size: 300%;
  }

  60% {
    background-position: 84% 33%;
    background-size: 300%;
  }

  60.0001% {
    /* -- View 4 -- */
    background-position: 0% 0%;
    background-size: 300%;
  }

  80% {
    background-position: 15% 4%;
    background-size: 300%;
  }

  80.0001% {
    /* -- View 5 -- */
    background-position: 80% 10%;
    background-size: 300%;
  }

  100% {
    background-position: 72% 14%;
    background-size: 300%;
  }
}

.screen > .screen-image {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 0px;
  background-size: 300%;
  background-position: 0% 0%;
  filter: sepia(100%) hue-rotate(120deg);
  opacity: 0.75;
  animation: pan-image 15s linear infinite;
}
</style>
