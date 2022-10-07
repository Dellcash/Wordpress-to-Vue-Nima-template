<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { useMainStore } from '../stores/main';

const mainStore = useMainStore()
const banner = 'https://theme46.mywebzi.ir/uploads/1fcaf4d3bc444859b3ef22319d692161.w_1140,h_78,r_k.jpg'
const sticker = {
   first: 'https://theme46.mywebzi.ir/uploads/6f06c194614d41668b6706b896468d58.w_165,h_287,r_k.png',
   sec: 'https://theme46.mywebzi.ir/uploads/f35f8ab5778848cc9ee280002d0157f1.w_162,h_283,r_k.png'
}
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
         <img :src="banner" alt="banner">
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

      <section>
         <div>
            <div>
               <img :src="sticker.first" alt="sticher">
               <button>مشاهده
                  همه</button>
            </div>

            <div>
               <Carousel v-if="mainStore.products.length !== 0" :autoplay="2000" :wrap-around="true"
                  :settings="settings" :breakpoints="breakpoints">
                  <Slide v-for="product in mainStore.products.slice(0,5)" :key="product" px2>
                     <div class="dmrcr">
                        <img :src="product.img" alt="product">
                        <div>
                           <h4>{{product.title}}</h4>
                           <h4>{{product.beforeOff}}</h4>
                           <h4>{{product.afterOff}}</h4>
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

      <section>
         <div>
            <img v-for="banner in mainStore.banners.slice(6,10)" :key="banner" :src="banner" alt="banner">
         </div>
      </section>

      <section>
         <div>
            <div>
               <img :src="sticker.sec" alt="sticher">
               <button>مشاهده
                  همه</button>
            </div>

            <div>
               <Carousel v-if="mainStore.products.length !== 0" :wrap-around="true" :autoplay="2000" dir="rtl"
                  :settings="settings" :breakpoints="breakpoints">
                  <Slide v-for="product in mainStore.products.slice(5,9)" :key="product" px2>
                     <div class="dmrcr">
                        <img :src="product.img" alt="product">
                        <div>
                           <h4>{{product.title}}</h4>
                           <h4>{{product.afterOff}}</h4>
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

      <section>
         <div>
            <img v-for="banner in mainStore.banners.slice(10,12)" :src="banner" alt="banner">
         </div>
      </section>

      <!-- shit-->
      <section>
       
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
                  --un-shadow: var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
                  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);

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

         > div:nth-child(1) {
            grid-column: span 5/span 5;
            margin-left: 0.25rem;
            margin-right: 1.25rem;
            justify-content: center;
            padding-top: 1.75rem;
            padding-bottom: 1.75rem;

            @screen sm {
               margin-left: 1.25rem;
            }

            @screen md {
               grid-column: span 4/span 4;
               padding-right: 1.25rem;
            }

            @screen xl {
               grid-column: span 3/span 3;
               margin-right: 0rem;
            }

            > img:nth-child(1) {
               @screen xl {
                  width: 75%;
               }
            }

            > button:nth-child(2) {
               border-width: 1px;
               border-style: solid;
               --un-border-opacity: 1;
               border-color: rgba(255, 255, 255, var(--un-border-opacity));
               border-radius: 0.5rem;
               background-color: transparent;
               padding-top: 0.25rem;
               padding-bottom: 0.25rem;
               padding-left: 1rem;
               padding-right: 1rem;
               font-size: 10px;
               --un-text-opacity: 1;
               color: rgba(255, 255, 255, var(--un-text-opacity));
               transition-duration: 250ms;

               &:hover {
                  --un-bg-opacity: 1;
                  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
                  --un-text-opacity: 1;
                  color: rgba(230, 70, 94, var(--un-text-opacity));
               }

               @screen sm {
                  padding-top: 0.5rem;
                  padding-bottom: 0.5rem;
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  font-size: 0.75rem;
                  line-height: 1rem;
               }

               @screen xl {
                  margin-top: 0.75rem;
                  padding-top: 0.75rem;
                  padding-bottom: 0.75rem;
                  padding-left: 2rem;
                  padding-right: 2rem;
               }
            }
         }

         > div:nth-child(2) {
            z-index: 1000;
            z-index: auto;
            grid-column: span 7/span 7;
            padding: 1.25rem;
            padding-right: 0rem;
            padding-left: 0.25rem;

            @screen md {
               grid-column: span 8/span 8;
            }

            @screen xl {
               grid-column: span 9/span 9;
            }

            .dmrcr {
               border-radius: 0.5rem;
               --un-bg-opacity: 1;
               background-color: rgba(255, 255, 255, var(--un-bg-opacity));

               img {
                  height: 100%;
                  padding-top: 1.25rem;
                  padding-bottom: 2.5rem;
               }

               div {
                  overflow-x: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  padding-left: 0.75rem;
                  padding-right: 0.75rem;
                  padding-bottom: 0.5rem;
                  text-align: right;
                  font-size: 10px;
                  direction: rtl;

                  @screen sm {
                     font-size: 0.875rem;
                     line-height: 1.25rem;
                  }

                  > h4:nth-child(1) {
                     margin-bottom: 0.25rem;
                     width: 5rem;
                     --un-text-opacity: 1;
                     color: rgba(0, 0, 0, var(--un-text-opacity));
                  }

                  > h4:nth-child(2) {
                     text-decoration-line: line-through;
                  }

                  > h4:nth-child(3) {
                     --un-text-opacity: 1;
                     color: rgba(230, 70, 94, var(--un-text-opacity));
                  }
               }
            }
         }
      }
   }

   section:nth-child(3) {
      margin-left: auto;
      margin-right: auto;
      max-width: 420px;
      padding: 0.5rem;

      @screen md {
         max-width: 768px;
      }

      @screen xl {
         margin-top: 0.25rem;
         margin-bottom: 0.25rem;
         max-width: 1170px;
         padding-right: 0rem;
         padding-left: 0rem;
      }

      div {
         display: grid;
         grid-template-columns: repeat(2, minmax(0, 1fr));
         grid-gap: 0.5rem;
         gap: 0.5rem;

         @screen md {
            grid-template-columns: repeat(4, minmax(0, 1fr));
         }
         @screen xl {
            grid-gap: 0.75rem;
            gap: 0.75rem;
         }
         img {
            border-radius: 0.75rem;
            width: 100%;
         }

      }
   }

   section:nth-child(4) {
      --un-bg-opacity: 1 !important;
      background-color: rgba(107, 185, 39, var(--un-bg-opacity)) !important;

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

         > div:nth-child(1) {
            grid-column: span 5/span 5;
            margin-left: 0.25rem;
            margin-right: 1.25rem;
            justify-content: center;
            padding-top: 1.75rem;
            padding-bottom: 1.75rem;

            @screen sm {
               margin-left: 1.25rem;
            }

            @screen md {
               grid-column: span 4/span 4;
               padding-right: 1.25rem;
            }

            @screen xl {
               grid-column: span 3/span 3;
               margin-right: 0rem;
            }

            > img:nth-child(1) {
               @screen xl {
                  width: 75%;
               }

            }

            > button:nth-child(2) {
               border-width: 1px;
               border-style: solid;
               --un-border-opacity: 1;
               border-color: rgba(255, 255, 255, var(--un-border-opacity));
               border-radius: 0.5rem;
               background-color: transparent;
               padding-top: 0.25rem;
               padding-bottom: 0.25rem;
               padding-left: 1rem;
               padding-right: 1rem;
               font-size: 10px;
               --un-text-opacity: 1;
               color: rgba(255, 255, 255, var(--un-text-opacity));
               transition-duration: 250ms;

               &:hover {
                  --un-bg-opacity: 1;
                  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
                  --un-text-opacity: 1;
                  color: rgba(107, 185, 39, var(--un-text-opacity));
               }

               @screen sm {
                  padding-top: 0.5rem;
                  padding-bottom: 0.5rem;
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  font-size: 0.75rem;
                  line-height: 1rem;
               }

               @screen xl {
                  margin-top: 0.75rem;
                  padding-top: 0.75rem;
                  padding-bottom: 0.75rem;
                  padding-left: 2rem;
                  padding-right: 2rem;
               }
            }
         }

         > div:nth-child(2) {
            z-index: 1000;
            z-index: auto;
            grid-column: span 7/span 7;
            padding: 1.25rem;
            padding-right: 0rem;
            padding-left: 0.25rem;

            @screen md {
               grid-column: span 8/span 8;
            }

            @screen xl {
               grid-column: span 9/span 9;
            }

            .dmrcr {
               border-radius: 0.5rem;
               --un-bg-opacity: 1;
               background-color: rgba(255, 255, 255, var(--un-bg-opacity));

               img {
                  width: 100%;
                  padding-top: 1.25rem;
                  padding-bottom: 2.5rem;
               }

               div {
                  overflow-x: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  padding-left: 0.75rem;
                  padding-right: 0.75rem;
                  padding-bottom: 0.5rem;
                  text-align: right;
                  font-size: 10px;
                  direction: rtl;

                  @screen sm {
                     font-size: 0.875rem;
                     line-height: 1.25rem;
                  }

                  > h4:nth-child(1) {
                     margin-bottom: 0.25rem;
                     width: 5rem;
                     --un-text-opacity: 1;
                     color: rgba(0, 0, 0, var(--un-text-opacity));
                  }

                  > h4:nth-child(2) {
                     --un-text-opacity: 1;
                     color: rgba(230, 70, 94, var(--un-text-opacity));
                  }
               }
            }
         }
      }
   }

   section:nth-child(5) {
      margin-left: auto;
      margin-right: auto;
      max-width: 420px;
      padding: 0.5rem;

      @screen md {
         max-width: 768px;
      }

      @screen xl {
         max-width: 1170px;
         padding-top: 0.75rem;
         padding-bottom: 0.75rem;
      }

      div {
         display: grid;
         grid-template-columns: repeat(1, minmax(0, 1fr));
         grid-gap: 0.5rem;
         gap: 0.5rem;

         @screen md {
            grid-template-columns: repeat(2, minmax(0, 1fr));
         }

         @screen xl {
            grid-gap: 0.75rem;
            gap: 0.75rem;
         }

         img {
            border-radius: 0.75rem;
            width: 100%;
         }
      }
   }
}

// shit
.carousel__pagination {
   display: none;
}
</style>
