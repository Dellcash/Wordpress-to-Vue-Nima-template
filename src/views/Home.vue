<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import axios from 'axios'

const banners = ref([])
const loading = ref(false)
const getData = () => {
   loading.value = true
   axios.get('https://api.npoint.io/a9c4af8bc27d841e1208')
      .then(res => {
         loading.value = false
         banners.value = res.data.banner
      }).catch(err => {
         console.log(err);
      })
}
getData()
</script>

<template>
   <main>
      <section layout p3>
         <img src="../assets/images/banner_1.jpg" alt="banner" wfull h8 sm:h11 md:h13 xl:h20 rounded-xl object-cover>
         <div wfull mt3>
            <div i-carbon-circle-dash animate-spin text-4xl m-auto h-30 v-if="loading" />
            <div v-else xl:grid grid-cols-12 gap-3>
               <div col-span-8>
                  <Carousel v-if="banners.length !== 0" :autoplay="2000" :wrap-around="true" dir="rtl">
                     <Slide v-for="banner in banners.slice(0, 4)" :key="banner">
                        <img :src="banner" alt="banner" class="wfull rounded-xl xl:h24.2rem">
                     </Slide>

                     <template #addons>
                        <Pagination />
                     </template>
                  </Carousel>
               </div>

               <div col-span-4>
                  <div v-for="gif in banners.slice(4,6)" :key="gif" hidden xl:flex flex-col first:mb3>
                     <img :src="gif" alt="banner" wfull rounded-xl>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </main>
</template>

<style lang="scss" scoped>

</style>
