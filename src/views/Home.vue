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
      <!-- <section class="d8cizg">
         <img src="../assets/images/banner_1.jpg" alt="banner" class="mg168v">
         <div>
            <div i-carbon-circle-dash class="mplxao" v-if="loading" />
            <div v-else class="o0mvcf">
               <div>
                  <Carousel v-if="banners.length !== 0" :autoplay="2000" :wrap-around="true" dir="rtl">
                     <Slide v-for="banner in banners.slice(0, 4)" :key="banner">
                        <img :src="banner" alt="banner">
                     </Slide>

                     <template #addons>
                        <Pagination />
                     </template>
                  </Carousel>
               </div>

               <div class="tq394d">
                  <div v-for="gif in banners.slice(4,6)" :key="gif">
                     <img :src="gif" alt="banner">
                  </div>
               </div>
            </div>
         </div>
      </section> -->
   </main>
</template>

<style lang="scss" scoped>
.d8cizg {
   margin-left: auto;
   margin-right: auto;
   max-width: 420px;
   padding: 0.75rem;

   @screen md {
      max-width: 768px;
   }

   @screen xl {
      max-width: 1170px;
   }

   .mg168v {
      width: 100%;
      height: 2rem;
      border-radius: 0.75rem;
      object-fit: cover;

      @screen sm {
         height: 2.75rem;
      }

      @screen md {
         height: 3.25rem;
      }

      @screen xl {
         height: 5rem;
      }
   }

   > div:nth-child(2) {
      margin-top: 0.75rem;
      width: 100%;

      .mplxao {
         @keyframes spin {
            from {
               transform: rotate(0deg)
            }

            to {
               transform: rotate(360deg)
            }
         }

         margin: auto;
         height: 7.5rem;
         animation: spin 1s linear infinite;
         font-size: 2.25rem;
         line-height: 2.5rem;
      }

      .o0mvcf {
         @screen xl {
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            grid-gap: 0.75rem;
            gap: 0.75rem;
         }

         > div:nth-child(1) {
            grid-column: span 8/span 8;

            img {
               width: 100%;
               border-radius: 0.75rem;

               @screen xl {
                  height: 24.2rem;
               }
            }
         }
      }

      .tq394d {
         grid-column: span 4/span 4;

         > div {
            display: none;
            flex-direction: column;

            &:first-child {
               margin-bottom: 0.75rem;
            }

            @screen xl {
               display: flex;
            }

            img {
               width: 100%;
               border-radius: 0.75rem;
            }
         }
      }
   }

   // shit
}
</style>
