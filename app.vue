<script setup lang="ts">
const blob = ref(null);
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

const handlePointerMove = (event: { pageX: number; pageY: number }) => {
  mouseX = event.pageX;
  mouseY = event.pageY;
};

const updateBlobPosition = () => {
  const distX = mouseX - currentX;
  const distY = mouseY - currentY;

  currentX += distX / 24;
  currentY += distY / 24;

  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;

  blob.value.style.left = `${currentX - scrollX}px`;
  blob.value.style.top = `${currentY - scrollY}px`;

  requestAnimationFrame(updateBlobPosition);
};

onMounted(() => {
  window.addEventListener("pointermove", handlePointerMove);
  requestAnimationFrame(updateBlobPosition);
});
</script>
<template>
  <NuxtLoadingIndicator />
  <div id="blob" ref="blob"></div>
  <div id="blur"></div>
  <NuxtPage class="relative z-10" />
</template>
<style>
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  50% {
    scale: 1 1.5;
  }

  to {
    rotate: 360deg;
  }
}

#blob {
  height: 28vmax;
  aspect-ratio: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: repeating-linear-gradient(
    to right,
    rgb(0, 220, 130) 0%,
    rgb(52, 205, 254) 50%,
    rgb(0, 71, 225) 100%
  );
  animation: rotate 20s infinite;
  opacity: 0.8;
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
  backdrop-filter: blur(12vmax);
}
</style>
