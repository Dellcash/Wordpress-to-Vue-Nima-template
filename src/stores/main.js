import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    hamburger: false,
    sideCard: false,
    mainLoading: false,
    banners: [],
    products: [],
    services: []
  }),
  getters: {
  },
  actions: {
    getData() {
      this.mainLoading = true
      axios.get('https://api.npoint.io/a9c4af8bc27d841e1208')
        .then(res => {
          this.mainLoading = false
          this.banners = res.data.banner
          this.products = res.data.products
          this.services = res.data.services
        }).catch(err => {
          console.log(err);
        })
    }
  }
})

