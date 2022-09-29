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
            <div v-if="main.sideCard">
                <header fixed w-240px bg-custom_gray text-white p4 flex items-center justify-end z-1000 sm:w320px top-0>
                    <h3 md:text-xl>سبد خرید</h3>
                    <div i-carbon-close @click="main.sideCard = false" xyz="short front stagger"
                        class="text-3xl mr10 md:text-4xl cursor-pointer xyz-nested" />
                </header>

                <main fixed bottom-0 z-20 w-240px sm:w-320px>
                    <section class="hr285n overflow-y-scroll px5 text-black py2.5">
                        <div v-for="n in 30" :key="n" text-sm>{{n}}</div>
                    </section>
                    <section flex items-center justify-between text-10px md:text-sm px4 py5>
                        <h3>جمع کل</h3>
                        <h3> <span font-bold tracking-1px text-xs md:text-base>۰</span> تومان </h3>
                    </section>
                    <section grid grid-cols-2 items-center text-10px text-white justify-between space-x-reverse space-x2
                        border-t border-stone-300 py5 px4 md:text-sm>
                        <button class="bg-custom_green py2.5 rounded-lg duration-250 hover:opacity-80 md:py3">
                            <router-link to="#">مشاهده سبد خرید</router-link>
                        </button>
                        <button class="bg-custom_red py2.5 rounded-lg duration-250 hover:opacity-80 md:py3">
                            <router-link to="#">تسویه حساب</router-link>
                        </button>
                    </section>
                </main>
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

        @screen sm {
            width: 320px
        }

        .hr285n {
            height: calc(100vh - 12.2rem);

            @screen md {
                height: calc(100vh - 13.6rem);
            }
        }
    }
}
</style>