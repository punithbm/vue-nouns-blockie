<template>
  <img :src="nounAvatarUrl" :alt="altText" :height="height" :width="width" :class="avatarShape" />
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { getNounAvatar } from './nouns';

const props = defineProps<{
  address: string;
  height?: string;
  width?: string;
  altText?: string;
  shape?: 'square' | 'rounded' | 'circle';
}>();

const nounAvatarUrl = computed(() => getNounAvatar(props.address));
const avatarShape = computed(() => {
  switch (props.shape) {
    case 'rounded':
      return 'rounded';
    case 'circle':
      return 'circle';
    default:
      return 'square';
  }
});
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