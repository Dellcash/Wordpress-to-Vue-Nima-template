import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    hamburger: false,
    sideCard: false
  }),
  getters: {
  },
  actions: {
  }
})

