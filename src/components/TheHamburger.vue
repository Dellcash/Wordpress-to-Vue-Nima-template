<script setup>
import { useMainStore } from '../stores/main';

const main = useMainStore()
const props = defineProps({
    header: Object
})
const { header } = toRefs(props)
const menu = ref(false)
const subHeader = reactive({
    first: header.value.mainMenu.subHeader.firstMenu,
    firstMenu: header.value.mainMenu.subHeader.first,
    sec: header.value.mainMenu.subHeader.secMenu,
    secMenu: header.value.mainMenu.subHeader.sec
})
</script>

<template>
    <aside relative z-20>
        <XyzTransition>
            <div v-if="main.hamburger" @click="main.hamburger = false" xyz="fade"
                class="fixed top-0 left-0 block w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
        </XyzTransition>

        <XyzTransition xyz="flip-right origin-right">
            <div v-if="main.hamburger"
                class="fixed top-0 right-0 z-10 w-240px h-100% overflow-scroll bg-white sm:w320px">
                <div i-carbon-close text-3xl m5 mx4 xyz="flip-up-5 delay-2.5 duration-4"
                    @click="main.hamburger = false" />

                <div v-auto-animate>
                    <div flex items-center px3 relative mb4 @click="menu = !menu">
                        <div i-carbon-subtract-alt ml1 sm:ml2 sm:text-lg />
                        <div i-carbon-subtract :class="menu ? 'rotate-180': 'rotate-90'" absolute duration-250
                            sm:text-lg />
                        <button text-xs sm:text-sm>کالای دیجیتال</button>
                    </div>
                    <div v-if="menu" mr10 space-y-3 mb4 v-auto-animate>
                        <div flex items-center relative @click="subHeader.first = !subHeader.first">
                            <div i-carbon-subtract-alt ml1 sm:ml2 sm:text-lg />
                            <div i-carbon-subtract :class="subHeader.first ? 'rotate-180': 'rotate-90'" absolute
                                duration-250 sm:text-lg />
                            <button text-xs sm:text-sm>لوازم جانبی گوشی</button>
                        </div>
                        <div v-if="subHeader.first" space-y-2 mr10 v-auto-animate sm:mr13>
                            <button v-for="sub in subHeader.firstMenu" :key="sub" text-xs sm:text-sm>{{sub}}</button>
                        </div>
                        <div flex items-center relative @click="subHeader.sec = !subHeader.sec">
                            <div i-carbon-subtract-alt ml1 sm:ml2 sm:text-lg />
                            <div i-carbon-subtract :class="subHeader.sec ? 'rotate-180': 'rotate-90'" absolute
                                duration-250 sm:text-lg />
                            <button text-xs sm:text-sm>گوشی موبایل</button>
                        </div>
                        <div v-if="subHeader.sec" space-y-2 mr10 sm:mr13 flex flex-col items-start>
                            <button v-for="sub in subHeader.secMenu" :key="sub" text-xs sm:text-sm>{{sub}}</button>
                        </div>
                        <button v-for="head in header.mainMenu.header.slice(2,4)" :key="head" text-xs pr5
                            sm:text-sm>{{head}}</button>
                    </div>
                    <div space-y-4 flex flex-col items-start>
                        <button v-for="head in header.headers" :key="head" text-xs mr8 sm:text-sm>{{head}}</button>
                    </div>
                </div>
            </div>
        </XyzTransition>
    </aside>
</template>

<style lang="scss" scoped>

</style>