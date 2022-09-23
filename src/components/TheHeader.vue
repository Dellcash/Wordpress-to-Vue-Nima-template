<script setup>
import { useElementHover } from '@vueuse/core'

const imgs = {
    hamburger: 'i-carbon-menu',
    logo: 'https://theme46.mywebzi.ir/uploads/d4f75b66fd624433b840077a1a186642.w_40,h_40,r_k.png',
    basket: 'i-carbon-shopping-cart',
    user: 'i-carbon-user'
}

const header = reactive({
    mainMenu: {
        header: ['لوازم جانبی گوشی', 'گوشی موبایل', 'واقعیت مجازی', 'مچ‌بند و ساعت هوشمند'],
        subHeader: {
            first: ['کیف و کاور گوشی', 'پاور بانک (شارژ همراه)', 'پایه نگه‌دارنده گوشی'],
            sec: ['سامسونگ', 'اپل', 'ال جی']
        }
    },
    headers: ['خودرو، ابزار و اداری', 'مد و پوشاک', 'زیبایی و سلامت', 'خانه و آشپزخانه', 'کتاب، لوازم التحریر و هنر'],
    offers: ['سوپرمارکت', 'تخفیف‌ها و پیشنهادها']
})
const firstSumHeader = computed(() => header.mainMenu.subHeader.first)
const secSubHeader = computed(() => header.mainMenu.subHeader.sec)

const el = ref()
const isHovered = useElementHover(el)

</script>

<template>
    <header bg-white p3 shadow-md md:p5 xl:py3 xl:pb0>
        <section layout divide-y divide-stone-100 space-y2>
            <div flex items-center justify-between>
                <div flex items-center space-x-reverse space-x10 xl:space-x0>
                    <div :class="imgs.hamburger" text-2xl md:text-3xl xl:hidden />
                    <div flex items-center>
                        <img :src="imgs.logo" alt="logo" w8 h8 md="w10 h10">
                        <h3 class="text-xs -tracking-1px mr3  font-bold md:text-lg xl:text-xl">نام فروشگاه شما</h3>
                    </div>
                </div>

                <input type="text" placeholder="نام کالا٬ برند یا دسته‌بندی مورد نظر . . ."
                    class="hidden md:block text-xs placeholder:text-2.5 px3 py2.7 bg-stone-200/70 rounded-lg duration-250 focus:outline-none focus:outline focus:outline-stone-400 md:placeholder:text-3 w-65 xl:px5 xl:py3.83.83.8 xl:w-130 xl:-mr30">

                <div
                    class="hidden md:flex items-center border border-stone-100 w-35 px-3 py1.5 rounded-lg xl:py2.5 xl:px-5 xl:w40 xl:-ml40">
                    <div :class="imgs.user" text-stone-500 xl:text-xl />

                    <div
                        class="[&_span]:text-10px [&_span]:cursor-pointer space-x-reverse space-x1 mr2 [&_span]:text-12px">
                        <span duration-250 hover:text-custom_red>ورود</span>
                        <span>/</span>
                        <span duration-250 hover:text-custom_red>ثبت‌ نام</span>
                    </div>
                </div>
                <div :class="imgs.basket" text-2xl text-stone-500 md:text-3xl />
            </div>

            <div grid grid-cols-5 items-center gap-x2 pt2 md:hidden>
                <input type="text" placeholder="نام کالا٬ برند یا دسته‌بندی مورد نظر . . ."
                    class="text-xs placeholder:text-8px bg-stone-200/70 py2 px2 rounded-lg col-span-3 duration-250 focus:outline-none focus:outline focus:outline-stone-400 sm:placeholder:text-10px">

                <div class="flex items-center border border-stone-100 px2 py-3px rounded-lg col-span-2 justify-center">
                    <div :class="imgs.user" />
                    <div class="[&_span]:text-10px [&_span]:cursor-pointer space-x-reverse space-x1 mr2 ">
                        <span duration-250 hover:text-custom_red>ورود</span>
                        <span>/</span>
                        <span duration-250 hover:text-custom_red>ثبت‌ نام</span>
                    </div>
                </div>
            </div>

            <div hidden xl:flex items-end justify-between mt5 px5>
                <div flex items-end>
                    <div ref="el" v-auto-animate relative>
                        <button class="text-xs pb3 flex space-x-reverse space-x1.5 items-center"><span>کالای
                                دیجیتال</span>
                            <div i-carbon-chevron-down class="text-md mt0.9 duration-250"
                                :class="isHovered ? 'rotate-180': ''" />
                        </button>
                        <div v-if="isHovered"
                            class="absolute w-45rem bg-white p5 pl10 rounded-b-xl shadow-lg -right-5 border-t border-stone-100">
                            <div space-x-reverse space-x-20 flex>
                                <h3 v-for="header in header.mainMenu.header" :key="header" text-xs font-bold
                                    duration-250 hover:text-custom_red cursor-pointer>{{header}}</h3>
                            </div>
                            <div class="flex [&_h4]:text-xs [&_h4]:cursor-pointer mt3 mr4">
                                <div space-y2>
                                    <h4 v-for="subHeader in firstSumHeader" :key="subHeader"
                                        class="ml14 duration-250 hover:ml12 hover:pr2 hover:text-custom_red">
                                        {{subHeader}}
                                    </h4>
                                </div>
                                <div space-y2>
                                    <h4 v-for="subHeader in secSubHeader" :key="subHeader"
                                        class="duration-250 hover:pr2 hover:text-custom_red">{{subHeader}}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div mr10 relative>
                        <button v-for="headers in header.headers" :key="headers" text-xs pb3 duration-250 px5 first:pr0
                            last:pl0 hover:text-custom_red>
                            <router-link to="#">{{headers}}</router-link>
                        </button>
                    </div>
                </div>

                <div>
                    <div mr10 relative>
                        <button v-for="headers in header.offers" :key="headers" text-xs mb3 duration-250 px5 first:pr0
                            first:border-l first:border-stone-300 last:pl0 hover:text-custom_red>
                            <router-link to="#">{{headers}}</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>

</style>