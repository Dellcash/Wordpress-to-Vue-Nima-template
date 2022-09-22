<script setup>
const imgs = {
    hamburger: 'i-carbon-menu',
    logo: 'https://theme46.mywebzi.ir/uploads/d4f75b66fd624433b840077a1a186642.w_40,h_40,r_k.png',
    basket: 'i-carbon-shopping-cart',
    user: 'i-carbon-user'
}
</script>

<template>
    <header bg-white p3 >
        <section layout divide-y divide-stone-100 space-y2>
            <div flex items-center justify-between>
                <div flex items-center space-x-reverse space-x10>
                    <div :class="imgs.hamburger" text-2xl />
                    <div flex items-center>
                        <img :src="imgs.logo" alt="logo" w8 h8>
                        <h3 class="text-xs -tracking-1px mr3">نام فروشگاه شما</h3>
                    </div>
                </div>
                <div :class="imgs.basket" text-2xl text-stone-500 />
            </div>

            <div grid grid-cols-5 items-center gap-x2 pt2>
                <input type="text" placeholder="نام کالا٬ برند یا دسته‌بندی مورد نظر . . ."
                    class="placeholder:text-8px bg-stone-200/70 pt0.5 pb1.5 px2 rounded-lg col-span-3">

                <div class="flex items-center border border-stone-100 px2 py-3px rounded-lg col-span-2 justify-center">
                    <div :class="imgs.user" />
                    <div class="[&_span]:text-10px space-x-reverse space-x1 mr2">
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