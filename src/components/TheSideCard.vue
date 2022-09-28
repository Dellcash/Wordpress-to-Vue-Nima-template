<script setup>
import { useMainStore } from '../stores/main';

const main = useMainStore()
</script>

<template>
    <aside>
        <XyzTransition>
            <div v-if="main.sideCard" @click="main.sideCard = false" xyz="fade"></div>
        </XyzTransition>

        <XyzTransition xyz="flip-right origin-right">
            <div v-if="main.sideCard" bg-white>
                <header fixed w-240px bg-custom_gray text-white p4 flex items-center justify-end z-20 sm:w320px>
                    <h3>سبد خرید</h3>
                    <div i-carbon-close text-3xl mr10 xyz="short front stagger" class="lx3bg9 xyz-nested" />
                </header>
                <main overflow-scroll h-screen px5 mt19 pb55>
                    <div v-for="n in 30" :key="n" relative>{{n}}</div>
                </main>
                <footer fixed bottom-0 bg-white text-10px z-20 w-240px text-white sm:w-320px>
                    <div flex items-center justify-between text-black px4 py5>
                        <h3 text-10px>جمع کل</h3>
                        <h3 text-10px> <span font-bold tracking-1px text-xs>۰</span> تومان </h3>
                    </div>
                    <div grid grid-cols-2 items-center justify-between space-x-reverse space-x2 border-t
                        border-stone-300 py5 px4>
                        <button class="bg-custom_green py2.5 rounded-lg duration-250 hover:opacity-80">
                            <router-link to="#">مشاهده سبد خرید</router-link>
                        </button>
                        <button class="bg-custom_red py2.5 rounded-lg duration-250 hover:opacity-80">
                            <router-link to="#">تسویه حساب</router-link>
                        </button>
                    </div>
                </footer>
            </div>
        </XyzTransition>
    </aside>
</template>

<style lang="scss" scoped>
aside {
    position: relative;
    z-index: 20;

    > div:nth-child(1) {
        position: fixed;
        top: 0rem;
        left: 0rem;
        display: block;
        width: 100%;
        height: 100%;
        --un-bg-opacity: 0.5;
        background-color: rgba(0, 0, 0, var(--un-bg-opacity));
    }


    > div:nth-child(2) {
        position: fixed;
        top: 0rem;
        right: 0rem;
        z-index: 10;
        width: 240px;
        height: 100%;
        --un-bg-opacity: 1;
        background-color: rgba(255, 255, 255, var(--un-bg-opacity));
        // overflow: scroll;

        @screen sm {
            width: 320px
        }

    }
}
</style>