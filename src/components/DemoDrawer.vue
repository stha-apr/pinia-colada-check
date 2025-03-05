<template>
  <q-drawer
    :model-value="true"
    side="right"
    :width="300"
    elevated
  >
    <pre>{{ data }}</pre>
  </q-drawer>
</template>

<script setup lang="ts">
import { useTodos } from '@/queries/todos.ts'

const { data } = useTodos()
</script>

