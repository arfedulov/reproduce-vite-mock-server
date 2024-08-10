<script setup>
import { onMounted, ref } from 'vue';

const messages = ref([])
onMounted(() => {
  fetch('/api/messages').then(resp => resp.json()).then(respData => {
    messages.value = respData.data
  })
})
</script>

<template>
  <div>
    <h2>messages</h2>
    <pre v-if="messages">{{ JSON.stringify(messages, null, 2) }}</pre>
    <div v-else>no data</div>
  </div>
</template>
