import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVWallStore = defineStore('VWall', () => {
  const lcds = ref([
    {
      id: 1,
      on: false,
      input: '4',
    },
    {
      id: 2,
      on: true,
      input: '1',
    },
    {
      id: 3,
      on: true,
      input: 1,
    },
    {
      id: 4,
      on: false,
      input: '3',
    },
    {
      id: 5,
      on: true,
      input: '1',
    },
    {
      id: 6,
      on: true,
      input: '1',
    },
  ])

  return{lcds}
})
