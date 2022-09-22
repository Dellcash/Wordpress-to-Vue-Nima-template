<script setup>
const imgs = {
    hamburger: 'i-carbon-menu',
    logo: 'https://theme46.mywebzi.ir/uploads/d4f75b66fd624433b840077a1a186642.w_40,h_40,r_k.png',
    basket: 'i-carbon-shopping-cart',
    user: 'i-carbon-user'
}
</script>

<template>
    <header bg-white p3 md:p5 xl:py3>
        <section layout divide-y divide-stone-100 space-y2>
            <div flex items-center justify-between>
                <div flex items-center space-x-reverse space-x10 xl:space-x0>
                    <div :class="imgs.hamburger" text-2xl md:text-3xl xl:hidden />
                    <div flex items-center>
                        <img :src="imgs.logo" alt="logo" w8 h8 md="w10 h10">
                        <h3 class="text-xs -tracking-1px mr3 md:text-lg">نام فروشگاه شما</h3>
                    </div>
                </div>

                <input type="text" placeholder="نام کالا٬ برند یا دسته‌بندی مورد نظر . . ."
                    class="hidden md:block text-xs placeholder:text-2.5 px3 py2.7 bg-stone-200/70 rounded-lg duration-250 focus:outline-none focus:outline focus:outline-stone-400 md:placeholder:text-3 w-65 xl:px5 xl:py3.83.83.8 xl:w-130 xl:-mr30">

                <div
                    class="hidden md:flex items-center border border-stone-100 w-35 px-3 py1.5 rounded-lg xl:py2.5 xl:px-5 xl:w40 xl:-ml40">
                    <div :class="imgs.user" text-stone-500 xl:text-xl />

                    <div
                        class="[&_span]:text-10px [&_span]:text-stone-500 space-x-reverse space-x1 mr2 [&_span]:text-12px">
                        <span>ورود</span>
                        <span>/</span>
                        <span>ثبت‌ نام</span>
                    </div>
                </div>
                <div :class="imgs.basket" text-2xl text-stone-500 md:text-3xl />
            </div>

            <div grid grid-cols-5 items-center gap-x2 pt2 md:hidden>
                <input type="text" placeholder="نام کالا٬ برند یا دسته‌بندی مورد نظر . . ."
                    class="text-xs placeholder:text-8px bg-stone-200/70 py2 px2 rounded-lg col-span-3 duration-250 focus:outline-none focus:outline focus:outline-stone-400 sm:placeholder:text-10px">

                <div class="flex items-center border border-stone-100 px2 py-3px rounded-lg col-span-2 justify-center">
                    <div :class="imgs.user" />
                    <div class="[&_span]:text-10px space-x-reverse space-x1 mr2 [&_span]:text-stone-500">
                        <span>ورود</span>
                        <span>/</span>
                        <span>ثبت‌ نام</span>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>

</style>