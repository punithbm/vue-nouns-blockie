<template>
  <img :src="nounAvatarUrl" :alt="alt" :height="height" :width="width" :class="avatarShape" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import useNounsBlockie from './useNounsBlockie';
import { NounsBlockieProps } from './NounsBlockieProps';

const props = defineProps<NounsBlockieProps>();

const { nounAvatarUrl, avatarShape } = useNounsBlockie(props);
</script>

<style scoped>
.square {
  /* Square with sharp edges */
}

.rounded {
  border-radius: 10px; /* Adjust as needed for the desired rounded effect */
}

.circle {
  border-radius: 50%; /* Makes the avatar a complete circle */
}
</style>