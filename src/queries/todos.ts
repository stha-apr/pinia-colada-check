import { defineQuery, useQuery } from '@pinia/colada'
import { computed } from 'vue'
import { fromDTO } from '@/queries/todoMapper.ts'
// export const useTodos = defineQuery({
//   key: ['todos'],
//   query: () => fetch('http://localhost:3000/todos').then((res) => res.json())
// })


export const useTodos = defineQuery(() => {
  const { state, data, ...rest } = useQuery({
    key: ['todos'],
    query: () => fetch('http://localhost:3000/todos').then((res) => res.json())
  })

  const fancyData = computed(() => {
    if (!data.value) return null
    return data.value.map(el => fromDTO(el))
  })

  return {
    ...rest,
    data,
    fancyData,
    // we can rename properties for convenience too
    todoList: state
  }
})


// query: () => [
//   { "id": "1", "content": "a placeholder todo" },
//   { "id": "2", "content": "another placeholder todo" }
// ],
