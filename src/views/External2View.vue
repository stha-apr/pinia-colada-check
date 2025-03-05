<template>
  <q-page padding>
    <h2>Pinia Colada - External 2 🍍</h2>

    <DemoDrawer
      v-if="isShowing"
    />

    <q-btn @click="isShowing = !isShowing">Show Drawer</q-btn>
  </q-page>
</template>

<script setup lang="ts">
import DemoDrawer from '@/components/DemoDrawer.vue'
import { ref } from 'vue'

const isShowing = ref(false)

</script>
