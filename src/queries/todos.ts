import { defineQuery } from '@pinia/colada'

export const useTodos = defineQuery({
  key: ['todos'],
  // query: () => [
  //   { "id": "1", "content": "a placeholder todo" },
  //   { "id": "2", "content": "another placeholder todo" }
  // ],
  query: () => fetch('http://localhost:3000/todos').then((res) => res.json()),
  staleTime: 2 * 1000,

})




































