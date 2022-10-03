<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { useMainStore } from '../stores/main';

const mainStore = useMainStore()
const mainLoading = computed(() => mainStore.mainLoading)

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
      <section>
         <img src="../assets/images/banner_1.jpg" alt="banner">
         <div>
            <div>
               <div>
                  <Carousel v-if="mainStore.banners.length !== 0" :autoplay="2000" :wrap-around="true" dir="rtl">
                     <Slide v-for="banner in mainStore.banners.slice(0, 4)" :key="banner">
                        <img :src="banner" alt="banner">
                     </Slide>

                     <template #addons>
                        <Pagination />
                     </template>
                  </Carousel>
               </div>

               <div>
                  <div v-for="gif in mainStore.banners.slice(4,6)" :key="gif">
                     <img :src="gif" alt="banner">
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- shit-->
      <section>
         <div>
            <div class=":: col-span-5 justify-center py7 mx5 md:col-span-4 xl:col-span-3 md:pr-5 xl:mr-0">
               <img src="../assets/images/sticker.png" alt="sticher">
               <button bg-transparent text-white duration-250 border-white border py1 px4 hover:bg-white
                  hover:text-custom_red rounded-lg text-10px sm:text-xs sm:py2 sm:px6 xl:py3 xl:px8 xl:mt3>مشاهده
                  همه</button>
            </div>

            <div col-span-7 p5 z-1000 pr0 md:col-span-8 xl:col-span-9 z-auto pl1>
               <Carousel v-if="mainStore.products.length !== 0" :autoplay="2000" :wrap-around="true"
                  :settings="settings" :breakpoints="breakpoints">
                  <Slide v-for="product in mainStore.products" :key="product" px2>
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
   > section:nth-child(1) {
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

      > img:nth-child(1) {
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

         > div:nth-child(1) {
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

         > div > div:nth-child(2) {
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

   section:nth-child(2) {
      --un-bg-opacity: 1;
      background-color: rgba(230, 70, 94, var(--un-bg-opacity));

      > div:nth-child(1) {
         display: grid;
         grid-template-columns: repeat(12, minmax(0, 1fr));
         margin-left: auto;
         margin-right: auto;
         max-width: 420px;
         padding-top: 0.75rem;
         padding-bottom: 0.75rem;

         @screen md {
            max-width: 768px;
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
         }

         @screen xl {
            max-width: 1170px;
         }
         > div:nth-child(1){}
      }
   }

   // shit
}

.carousel__pagination {
   display: none;
}
</style>
