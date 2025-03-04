<template>
  <q-page padding>
    <h2>Standard</h2>

    <div v-if="isLoading">
      Loading...
    </div>

    <div v-else-if="error">
      Oops, an error happened...
    </div>

    <pre v-else>{{ data }}</pre>

    <q-btn @click="fetchTodos">Action</q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

const data = ref([])
const isLoading = ref<boolean>(false)
const error = ref<boolean>(false)

async function fetchTodos() {
  try {
    isLoading.value = true
    data.value = await fetch('http://localhost:3000/todos').then(res => res.json())
  } catch {
    error.value = true
  } finally {
    isLoading.value = false
  }
}

onBeforeMount(async () => {
  await fetchTodos()
})
</script>
