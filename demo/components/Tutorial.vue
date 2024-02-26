<script setup lang="ts">
import { NounsBlockie } from 'vue-nouns-blockie'
</script>

<template>
  <div class="container">
    <!-- <input v-model="inputText" placeholder="Enter text or web3 address" class="input-field" @input="updateAvatar" /> -->
    <div>
      <NounsBlockie input="My Demo Text" ></NounsBlockie>
    </div>
  </div>
</template>


<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.input-field {
  margin-bottom: 20px;
  padding: 8px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
