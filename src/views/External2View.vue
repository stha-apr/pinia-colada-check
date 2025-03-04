<template>
  <q-page padding>
    <h2>Pinia Colada - External 2 🍍</h2>

    <div v-if="isLoading">
      Loading...
    </div>

    <div v-else-if="error">
      Oops, an error happened...
    </div>

<!--    <pre >{{ data }}</pre>-->
    <pre >{{ fancyData }}</pre>

    <q-btn @click="refresh">Action</q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { useTodos } from '@/queries/todos.ts'

const { isLoading, error, refresh, fancyData, data } = useTodos()
</script>
