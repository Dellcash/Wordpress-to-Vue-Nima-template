<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import axios from 'axios'

const banners = ref([])
const loading = ref(false)
const products = ref([])
const getData = () => {
   loading.value = true
   axios.get('https://api.npoint.io/a9c4af8bc27d841e1208')
      .then(res => {
         loading.value = false
         banners.value = res.data.banner
         products.value = res.data.products
      }).catch(err => {
         console.log(err);
      })
}
getData()

const settings = reactive({
   itemsToShow: 1,
   snapAlign: 'center',
})
const breakpoints = reactive({
   768: {
      itemsToShow: 2,
      snapAlign: 'start',
   },
   1280: {
      itemsToShow: 3,
      snapAlign: 'start',
   },
})
</script>
<template>
   <main>
      <section class="d8cizg">
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
      </section>

      <!-- shit-->
      <section class=":: bg-custom_red">
         <div layout grid grid-cols-12 md:py5 py3>
            <div col-span-5 justify-center py7 mx5 md:col-span-4 xl:col-span-3 md:pr-5>
               <img src="../assets/images/sticker.png" alt="sticher">
               <button bg-transparent text-white duration-250 border-white border py1 px4 hover:bg-white
                  hover:text-custom_red rounded-lg text-10px sm:text-xs sm:py2 sm:px6 xl:py3 xl:px8 xl:mt3>مشاهده
                  همه</button>
            </div>

            <div col-span-7 p5 z-1000 pr0 md:col-span-8 xl:col-span-9 z-auto>
               <Carousel v-if="banners.length !== 0" :autoplay="2000" :wrap-around="true" :settings="settings"
                  :breakpoints="breakpoints">
                  <Slide v-for="product in products" :key="product" px2>
                     <div bg-white rounded-lg>
                        <!-- resizing height of images on md -->
                        <img :src="product.img" alt="product" pt5 pb10 hfull>
                        <div text-10px text-right pb2 px3 sm:text-sm text-ellipsis overflow-x-hidden whitespace-nowrap
                           style="direction: rtl;">
                           <h4 mb1 text-black w20>{{product.title}}</h4>
                           <h4 line-through>{{product.beforeOff}}</h4>
                           <h4 text-custom_red>{{product.afterOff}}</h4>
                        </div>
                     </div>
                  </Slide>

                  <template #addons>
                     <Pagination />
                  </template>
               </Carousel>
            </div>

         </div>
      </section>
   </main>
</template>

<style lang="scss" scoped>
main {
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
            display: none;

            > div {
               grid-column: span 6/span 6;

               @screen xl {
                  grid-column: span 12/span 12;
               }

               img {
                  width: 100%;
                  border-radius: 0.75rem;
               }
            }

            @screen md {
               display: grid;
               grid-template-columns: repeat(12, minmax(0, 1fr));
               grid-gap: 0.75rem;
               gap: 0.75rem;
               margin-top: 0.75rem;
            }

            @screen xl {
               flex-direction: column;
               grid-column: span 4/span 4;
               margin-top: 0 !important;
            }
         }
      }
   }

   section:nth-child(2) {}

   // shit
}

.carousel__pagination {
   display: none;
}
</style>
