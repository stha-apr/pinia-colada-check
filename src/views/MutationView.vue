<template>
  <q-page padding>
    <h2>Pinia Colada - Mutation 🍍</h2>

    <div v-if="isLoading">
      Loading...
      <q-spinner></q-spinner>
    </div>

    <div v-if="error">
      Oops, an error happened...
    </div>
    <ul>
      <li
        v-for="todo in data" :key="todo.id">
        {{ todo.content }}
      </li>
    </ul>

    <div class="row q-gutter">
      <q-input
        label="Enter a todo"
        filled
        v-model="todoText"
        style="max-width: 300px;"
      />
      <q-btn
        @click="mutate()"
        :disable="isSaving"
        :loading="isSaving"
        label="Add"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useTodos } from '@/queries/todos.ts'
import { ref } from 'vue'
const { data, isLoading, error } = useTodos()

import { useMutation, useQueryCache } from '@pinia/colada'
const queryCache = useQueryCache()

const todoText = ref<string>('')

const { mutate, isLoading: isSaving } = useMutation({
  mutation: () =>
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify({ content: todoText.value })
    }),
  onSettled: () => {
    queryCache.invalidateQueries({ key: ['todos'] })
    todoText.value = ''
  }


})
</script>
