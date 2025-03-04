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
        @click="mutate"
        :disable="asyncStatus === 'loading'"
        :loading="asyncStatus === 'loading'"
        label="Add"
      />
    </div>
    Status: {{ status }}
    asyncStatus: {{ asyncStatus }}
  </q-page>
</template>

<script setup lang="ts">
import { useTodos } from '@/queries/todos.ts'
import { ref } from 'vue'
import { useMutation, useQueryCache } from '@pinia/colada'
const queryCache = useQueryCache()
const { data, isLoading, error, refetch } = useTodos()

const todoText = ref<string>('')

const { mutate, status, asyncStatus } = useMutation({
  mutation: () =>
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify({ content: todoText.value })
    }),
  onSettled: () => {
    // refetch()
    queryCache.invalidateQueries({ key: ['todos'] })
    todoText.value = ''
  }
})
</script>
