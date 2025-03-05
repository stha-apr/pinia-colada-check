<template>
  <q-page padding>
    <h2>Pinia Colada - External 1 🍍</h2>

    <div v-if="isLoading">
      Loading...
    </div>

    <div v-else-if="error">
      Oops, an error happened...
    </div>

    <pre v-else>{{ data }}</pre>

    <q-btn @click="">Action</q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { useTodos } from '@/queries/todos.ts'

const { data, isLoading, error } = useTodos()
</script>
