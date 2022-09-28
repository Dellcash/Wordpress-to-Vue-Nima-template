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
    <aside>
        <XyzTransition>
            <div v-if="main.hamburger" @click="main.hamburger = false" xyz="fade"></div>
        </XyzTransition>

        <XyzTransition xyz="flip-right origin-right">
            <div v-if="main.hamburger">
                <div i-carbon-close @click="main.hamburger = false" />
                <div v-auto-animate>
                    <div @click="menu = !menu">
                        <div i-carbon-subtract-alt />
                        <div i-carbon-subtract :class="menu ? 'rotate-180': 'rotate-90'" />
                        <button>کالای دیجیتال</button>
                    </div>
                    <div v-if="menu" class="vwiiky" v-auto-animate>
                        <div @click="subHeader.first = !subHeader.first">
                            <div i-carbon-subtract-alt />
                            <div i-carbon-subtract :class="subHeader.first ? 'rotate-180': 'rotate-90'" />
                            <button>لوازم جانبی گوشی</button>
                        </div>
                        <div v-if="subHeader.first" class="k934pn" v-auto-animate>
                            <button v-for="sub in subHeader.firstMenu" :key="sub">{{sub}}</button>
                        </div>
                        <div class="e332c" @click="subHeader.sec = !subHeader.sec">
                            <div i-carbon-subtract-alt />
                            <div i-carbon-subtract :class="subHeader.sec ? 'rotate-180': 'rotate-90'" />
                            <button>گوشی موبایل</button>
                        </div>
                        <div v-if="subHeader.sec" class="xoaj93">
                            <button v-for="sub in subHeader.secMenu" :key="sub">{{sub}}</button>
                        </div>
                        <button v-for="head in header.mainMenu.header.slice(2,4)" :key="head"
                            class="bk4lzv">{{head}}</button>
                    </div>
                    <div class="bfvy6a">
                        <button v-for="head in header.headers" :key="head">{{head}}</button>
                    </div>
                </div>
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
        overflow: scroll;
        --un-bg-opacity: 1;
        background-color: rgba(255, 255, 255, var(--un-bg-opacity));

        @screen sm {
            width: 320px
        }

        > div:nth-child(1) {
            margin: 1.25rem;
            margin-left: 1rem;
            margin-right: 1rem;
            font-size: 1.875rem;
            line-height: 2.25rem;
            cursor: pointer;

            @screen sm {
                font-size: 2.25rem;
                line-height: 2.5rem;
            }
        }

        > div:nth-child(2) {
            padding-bottom: 2rem;
            @screen sm {
                padding-right: 0.5rem;
            }

            > div:nth-child(1) {
                position: relative;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                padding-left: 0.75rem;
                padding-right: 0.75rem;

                > div:nth-child(1) {
                    margin-left: 0.25rem;

                    @screen sm {
                        margin-left: 0.5rem;
                        font-size: 1.125rem;
                        line-height: 1.75rem;
                    }
                }

                > div:nth-child(2) {
                    position: absolute;
                    transition-duration: 250ms;

                    @screen sm {
                        font-size: 1.125rem;
                        line-height: 1.75rem;
                    }
                }

                button {
                    font-size: 0.75rem;
                    line-height: 1rem;

                    @screen sm {
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                    }
                }
            }

            .vwiiky {
                margin-right: 2.5rem;
                margin-bottom: 1rem;

                > :not([hidden]) ~ :not([hidden]) {
                    --un-space-y-reverse: 0;
                    margin-top: calc(0.75rem * calc(1 - var(--un-space-y-reverse)));
                    margin-bottom: calc(0.75rem * var(--un-space-y-reverse));
                }

                > div:nth-child(1) {
                    position: relative;
                    display: flex;
                    align-items: center;

                    > div:nth-child(1) {
                        margin-left: 0.25rem;

                        @screen sm {
                            margin-left: 0.5rem;
                            font-size: 1.125rem;
                            line-height: 1.75rem;
                        }
                    }

                    > div:nth-child(2) {
                        position: absolute;
                        transition-duration: 250ms;

                        @screen sm {
                            font-size: 1.125rem;
                            line-height: 1.75rem;
                        }
                    }

                    button {
                        font-size: 0.75rem;
                        line-height: 1rem;

                        @screen sm {
                            font-size: 0.875rem;
                            line-height: 1.25rem;
                        }
                    }
                }
            }

            .k934pn {
                margin-right: 2.5rem;

                > :not([hidden]) ~ :not([hidden]) {
                    --un-space-y-reverse: 0;
                    margin-top: calc(0.5rem * calc(1 - var(--un-space-y-reverse)));
                    margin-bottom: calc(0.5rem * var(--un-space-y-reverse));
                }

                @screen sm {
                    margin-right: 3.25rem;
                }

                button {
                    font-size: 0.75rem;
                    line-height: 1rem;

                    @screen sm {
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                    }
                }
            }

            .e332c {
                position: relative;
                display: flex;
                align-items: center;

                > div:nth-child(1) {
                    margin-left: 0.25rem;

                    @screen sm {
                        margin-left: 0.5rem;
                        font-size: 1.125rem;
                        line-height: 1.75rem;
                    }
                }

                > div:nth-child(2) {
                    position: absolute;
                    transition-duration: 250ms;

                    @screen sm {
                        font-size: 1.125rem;
                        line-height: 1.75rem;
                    }
                }

                button {
                    font-size: 0.75rem;
                    line-height: 1rem;

                    @screen sm {
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                    }
                }
            }

            .xoaj93 {
                margin-right: 2.5rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                > :not([hidden]) ~ :not([hidden]) {
                    --un-space-y-reverse: 0;
                    margin-top: calc(0.5rem * calc(1 - var(--un-space-y-reverse)));
                    margin-bottom: calc(0.5rem * var(--un-space-y-reverse));
                }

                @screen sm {
                    margin-right: 3.25rem;
                }

                button {
                    font-size: 0.75rem;
                    line-height: 1rem;

                    @screen sm {
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                    }
                }
            }

            .bk4lzv {
                padding-right: 1.25rem;
                font-size: 0.75rem;
                line-height: 1rem;

                @screen sm {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                }
            }
        }

        .bfvy6a {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            > :not([hidden]) ~ :not([hidden]) {
                --un-space-y-reverse: 0;
                margin-top: calc(1rem * calc(1 - var(--un-space-y-reverse)));
                margin-bottom: calc(1rem * var(--un-space-y-reverse));
            }

            button {
                margin-right: 2rem;
                font-size: 0.75rem;
                line-height: 1rem;

                @screen sm {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                }
            }
        }
    }
}
</style>