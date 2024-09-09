<template>
  <img
    src="/src/assets/beta-wordart.png"
    height="268"
    class="throb"
  >
</template>

<style>
.throb {
  animation: pulse 1s infinite;
  margin-top: -84px;
  margin-bottom: -184px;
}

@keyframes pulse {
	0% {
		transform: scale(0.9);
	}
	65% {
		transform: scale(1);
	}
	100% {
		transform: scale(0.9);
	}
}
</style>
