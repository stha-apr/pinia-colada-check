<template>
  <q-page padding>
    <h2>Pinia Colada 🍍</h2>

    <div v-if="isLoading">
      Loading...
    </div>

    <div v-else-if="error">
      Oops, an error happened...
    </div>

    <pre >{{ data }}</pre>

    <q-btn @click="">Action</q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { useQuery } from '@pinia/colada'

const { data, isLoading, error } = useQuery({
  key: ['my-query'],
  query: () => fetch('http://localhost:3000/todos').then(res => res.json()),
})

</script>
