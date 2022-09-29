<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import axios from 'axios'
import { useImage } from '@vueuse/core';

const banner = 'https://theme46.mywebzi.ir/uploads/1fcaf4d3bc444859b3ef22319d692161.w_1140,h_78,r_k.jpg'

const banners = ref([])
const { isLoading } = useImage({ src: banners })
const getBanners = () => {
   axios.get('https://api.npoint.io/a9c4af8bc27d841e1208/banner')
      .then(res => {
         banners.value = res.data
      }).catch(err => {
         console.log(err);
      })
}
getBanners()
</script>

<template>
   <main>
      <section layout p3>
         <div v-if="isLoading">loading</div>
         <img v-else :src="banner" alt="banner" wfull h8 rounded-xl object-cover>
         <div>
            <Carousel v-if="banners.length !== 0" :autoplay="2000" :wrap-around="true" dir="rtl" mt3>
               <Slide v-for="banner in banners" :key="banner">
                  <img :src="banner" alt="banner" wfull rounded-xl>
               </Slide>

               <template #addons>
                  <Pagination />
               </template>
            </Carousel>
         </div>
      </section>
   </main>
</template>

<style lang="scss" scoped>

</style>
