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
                <header>
                    <h3>سبد خرید</h3>
                    <div i-carbon-close @click="main.sideCard = false" xyz="short front stagger" class="xyz-nested"/>
                </header>
                <main>
                    <section>
                        <div v-for="n in 30" :key="n" text-sm>{{n}}</div>
                    </section>
                    <section>
                        <h3>جمع کل</h3>
                        <h3> <span>۰</span> تومان </h3>
                    </section>
                    <section>
                        <button>
                            <router-link to="#">مشاهده سبد خرید</router-link>
                        </button>
                        <button>
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

        header {
            position: fixed;
            top: 0rem;
            z-index: 1000;
            width: 240px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            --un-bg-opacity: 1;
            background-color: rgba(86, 86, 86, var(--un-bg-opacity));
            padding: 1rem;
            --un-text-opacity: 1;
            color: rgba(255, 255, 255, var(--un-text-opacity));

            @screen sm {
                width: 320px;
            }

            h3 {
                @screen md {
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                }
            }

            div {
                margin-right: 2.5rem;
                cursor: pointer;
                font-size: 1.875rem;
                line-height: 2.25rem;

                @screen md {
                    font-size: 2.25rem;
                    line-height: 2.5rem;
                }
            }
        }

        main {
            position: fixed;
            bottom: 0rem;
            z-index: 20;
            width: 240px;

            @screen sm {
                width: 320px;
            }

            > section:nth-child(1) {
                overflow-y: scroll;
                padding-left: 1.25rem;
                padding-right: 1.25rem;
                padding-top: 0.625rem;
                padding-bottom: 0.625rem;
                --un-text-opacity: 1;
                color: rgba(0, 0, 0, var(--un-text-opacity));
                height: calc(100vh - 12.2rem);

                @screen md {
                    height: calc(100vh - 13.6rem);
                }
            }

            > section:nth-child(2) {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-left: 1rem;
                padding-right: 1rem;
                padding-top: 1.25rem;
                padding-bottom: 1.25rem;
                font-size: 10px;

                @screen md {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                }

                > h3:nth-child(2) {
                    span {
                        font-size: 0.75rem;
                        line-height: 1rem;
                        font-weight: 700;
                        letter-spacing: 1px;

                        @screen md {
                            font-size: 1rem;
                            line-height: 1.5rem;
                        }
                    }
                }
            }

            > section:nth-child(3) {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                align-items: center;
                justify-content: space-between;
                border-top-width: 1px;
                border-top-style: solid;
                --un-border-opacity: 1;
                border-color: rgba(214, 211, 209, var(--un-border-opacity));
                padding-top: 1.25rem;
                padding-bottom: 1.25rem;
                padding-left: 1rem;
                padding-right: 1rem;
                font-size: 10px;
                --un-text-opacity: 1;
                color: rgba(255, 255, 255, var(--un-text-opacity));

                > :not([hidden]) ~ :not([hidden]) {
                    --un-space-x-reverse: 0;
                    margin-left: calc(0.5rem * calc(1 - var(--un-space-x-reverse)));
                    margin-right: calc(0.5rem * var(--un-space-x-reverse));
                    --un-space-x-reverse: 1;
                }

                @screen md {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                }

                button {
                    border-radius: 0.5rem;
                    padding-top: 0.625rem;
                    padding-bottom: 0.625rem;
                    transition-duration: 250ms;

                    &:first-child {
                        --un-bg-opacity: 1;
                        background-color: rgba(67, 191, 212, var(--un-bg-opacity));
                    }

                    &:last-child {
                        --un-bg-opacity: 1;
                        background-color: rgba(230, 70, 94, var(--un-bg-opacity));
                    }

                    &:hover {
                        opacity: 0.8;
                    }

                    @screen md {
                        padding-top: 0.75rem;
                        padding-bottom: 0.75rem;
                    }
                }
            }
        }

    }
}
</style>