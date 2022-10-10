<script setup>
import { useMainStore } from "../stores/main"

const mainStore = useMainStore()

const links = reactive({
    first: {
        title: 'راهنمای خرید از فروشگاه',
        links: ['نحوه ثبت سفارش', 'رویه ارسال سفارش', 'شیوه‌های پرداخت']
    },
    sec: {
        title: 'خدمات مشتریان',
        links: ['پاسخ به پرسش‌های متداول', 'رویه‌های بازگرداندن کالا', 'شرایط استفاده', 'حریم خصوصی', 'گزارش باگ']
    },
    third: {
        title: 'منوی سایت',
        links: ['فرصت‌های شغلی', 'قوانین و مقررات', 'تماس با ما', 'درباره ما']
    }
})
</script>

<template>
    <footer class="bg-#eceff1 ">
        <section layout>
            <div px1 py5 border-b border-stone-300>
                <div grid grid-cols-4 justify-center>
                    <div v-for="service in mainStore.services" :key="service">
                        <img :src="service.img" alt="services" w8 m-auto>
                        <h3 class="-tracking-1px text-center text-8px pt1">{{service.title}}</h3>
                    </div>
                </div>
            </div>

            <div py3 px2>
                <div flex items-start justify-between text-10px class="-tracking-1px">
                    <div>
                        <h3 mb4 font-bold>{{links.first.title}}</h3>
                        <div space-y-2>
                            <h4 v-for="link in links.first.links" :kye="link">{{link}}</h4>
                        </div>
                    </div>
                    <div>
                        <h3 mb4 font-bold>{{links.sec.title}}</h3>
                        <div space-y2>
                            <h4 v-for="link in links.sec.links" :kye="link">{{link}}</h4>
                        </div>
                    </div>
                    <div>
                        <h3 mb4 font-bold>{{links.third.title}}</h3>
                        <div space-y2>
                            <h4 v-for="link in links.third.links" :kye="link">{{link}}</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>

</style>