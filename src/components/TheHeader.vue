<script setup>
import { useElementHover } from '@vueuse/core'
import { useMainStore } from '../stores/main';

const main = useMainStore()
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
            firstMenu: false,
            first: ['کیف و کاور گوشی', 'پاور بانک (شارژ همراه)', 'پایه نگه‌دارنده گوشی'],
            secMenu: false,
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
    <header>
        <section>
            <div>
                <div>
                    <div @click="main.hamburger = true" :class="imgs.hamburger" />
                    <div>
                        <img :src="imgs.logo" alt="logo">
                        <h3>نام فروشگاه شما</h3>
                    </div>
                </div>

                <input type="text" placeholder="نام کالا٬ برند یا دسته‌بندی مورد نظر . . .">

                <div>
                    <div :class="imgs.user" />

                    <div>
                        <span>ورود</span>
                        <span>/</span>
                        <span>ثبت‌ نام</span>
                    </div>
                </div>
                <div :class="imgs.basket"  @click="main.sideCard = !main.sideCard"/>
            </div>

            <div>
                <input type="text" placeholder="نام کالا٬ برند یا دسته‌بندی مورد نظر . . .">

                <div>
                    <div :class="imgs.user" />
                    <div>
                        <span>ورود</span>
                        <span>/</span>
                        <span>ثبت‌ نام</span>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div ref="el" v-auto-animate>
                        <button><span>کالای
                                دیجیتال</span>
                            <div i-carbon-chevron-down :class="isHovered ? 'rotate-180': ''" />
                        </button>
                        <div v-if="isHovered">
                            <div>
                                <h3 v-for="header in header.mainMenu.header" :key="header">{{header}}</h3>
                            </div>
                            <div>
                                <div>
                                    <h4 v-for="subHeader in firstSumHeader" :key="subHeader">
                                        {{subHeader}}
                                    </h4>
                                </div>
                                <div>
                                    <h4 v-for="subHeader in secSubHeader" :key="subHeader">{{subHeader}}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button v-for="headers in header.headers" :key="headers">
                            <router-link to="#">{{headers}}</router-link>
                        </button>
                    </div>
                </div>

                <div>
                    <button v-for="headers in header.offers" :key="headers">
                        <router-link to="#">{{headers}}</router-link>
                    </button>
                </div>
            </div>
        </section>
    </header>
    <TheHamburger :header="header" />
    <TheSideCard />
</template>

<style lang="scss" scoped>
header {
    --un-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--un-bg-opacity));
    padding: 0.75rem;
    --un-shadow: var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
    box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);

    @screen md {
        padding: 1.25rem;
    }

    @screen xl {
        padding-top: 0.75rem;
        padding-bottom: 0rem !important;
    }

    section {
        margin-left: auto;
        margin-right: auto;
        max-width: 420px;

        > :not([hidden]) ~ :not([hidden]) {
            --un-space-y-reverse: 0;
            margin-top: calc(0.5rem * calc(1 - var(--un-space-y-reverse)));
            margin-bottom: calc(0.5rem * var(--un-space-y-reverse));
            --un-divide-y-reverse: 0;
            border-top-width: calc(1px * calc(1 - var(--un-divide-y-reverse)));
            border-bottom-width: calc(1px * var(--un-divide-y-reverse));
            border-top-style: solid;
            border-bottom-style: solid;
            --un-divide-opacity: 1;
            border-color: rgba(245, 245, 244, var(--un-divide-opacity));
        }

        @screen md {
            max-width: 768px;
        }

        @screen xl {
            max-width: 1170px;
            padding-top: 0.3rem;

            > :not([hidden]) ~ :not([hidden]) {
                --un-space-y-reverse: 0;
                margin-top: calc(1.5rem * calc(1 - var(--un-space-y-reverse)));
                margin-bottom: calc(1.5rem * var(--un-space-y-reverse));
                --un-divide-y-reverse: 0;
                border-top-width: 0;
            }
        }

        > div:nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: space-between;

            div {
                &:first-child {
                    display: flex;
                    align-items: center;

                    > :not([hidden]) ~ :not([hidden]) {
                        --un-space-x-reverse: 0;
                        margin-left: calc(2.5rem * calc(1 - var(--un-space-x-reverse)));
                        margin-right: calc(2.5rem * var(--un-space-x-reverse));
                        --un-space-x-reverse: 1;
                    }

                    @screen xl {
                        > :not([hidden]) ~ :not([hidden]) {
                            --un-space-x-reverse: 0;
                            margin-left: calc(0rem * calc(1 - var(--un-space-x-reverse)));
                            margin-right: calc(0rem * var(--un-space-x-reverse));
                        }
                    }

                    div {
                        &:first-child {
                            font-size: 1.5rem;
                            line-height: 2rem;
                            cursor: pointer;

                            @screen xl {
                                display: none;
                            }
                        }

                        &:nth-child(2) {
                            display: flex;
                            align-items: center;

                            img {
                                width: 2rem;
                                height: 2rem;

                                @screen md {
                                    width: 2.5rem;
                                    height: 2.5rem;
                                }
                            }

                            h3 {
                                margin-right: 0.75rem;
                                font-size: 0.75rem;
                                line-height: 1rem;
                                font-weight: 700;
                                letter-spacing: -1px;

                                @screen md {
                                    font-size: 1.125rem;
                                    line-height: 1.75rem;
                                }

                                @screen xl {
                                    font-size: 1.25rem;
                                    line-height: 1.75rem;
                                }
                            }
                        }
                    }
                }

                &:nth-child(3) {
                    display: none;
                    width: 8.75rem;
                    align-items: center;
                    border-width: 1px;
                    border-style: solid;
                    --un-border-opacity: 1;
                    border-color: rgba(245, 245, 244, var(--un-border-opacity));
                    border-radius: 0.5rem;
                    padding-left: 0.75rem;
                    padding-right: 0.75rem;
                    padding-top: 0.375rem;
                    padding-bottom: 0.375rem;

                    @screen md {
                        display: flex;
                    }

                    @screen xl {
                        margin-left: -10rem;
                        width: 10rem;
                        padding-top: 0.625rem;
                        padding-bottom: 0.625rem;
                        padding-left: 1.25rem;
                        padding-right: 1.25rem;
                    }

                    div {
                        &:first-child {
                            --un-text-opacity: 1;
                            color: rgba(120, 113, 108, var(--un-text-opacity));

                            @screen xl {
                                font-size: 1.25rem;
                                line-height: 1.75rem;
                            }
                        }

                        &:nth-child(2) {
                            margin-right: 0.5rem;

                            > :not([hidden]) ~ :not([hidden]) {
                                --un-space-x-reverse: 0;
                                margin-left: calc(0.25rem * calc(1 - var(--un-space-x-reverse)));
                                margin-right: calc(0.25rem * var(--un-space-x-reverse));
                                --un-space-x-reverse: 1;
                            }

                            span {
                                &:nth-child(2) {
                                    &:hover {
                                        color: #616161;
                                        cursor: initial;
                                    }
                                }

                                cursor: pointer;
                                font-size: 12px;
                                transition-duration: 250ms;

                                &:hover {
                                    --un-text-opacity: 1;
                                    color: rgba(230, 70, 94, var(--un-text-opacity));
                                }
                            }
                        }

                    }
                }

                &:nth-child(4) {
                    cursor: pointer;
                    font-size: 1.5rem;
                    line-height: 2rem;
                    --un-text-opacity: 1;
                    color: rgba(120, 113, 108, var(--un-text-opacity));

                    @screen md {
                        font-size: 1.875rem;
                        line-height: 2.25rem;
                    }
                }
            }

            input {
                display: none;
                width: 16.25rem;
                border-radius: 0.5rem;
                background-color: rgba(231, 229, 228, 0.7);
                padding-left: 0.75rem;
                padding-right: 0.75rem;
                padding-top: 0.675rem;
                padding-bottom: 0.675rem;
                font-size: 0.75rem;
                line-height: 1rem;
                transition-duration: 250ms;

                &:focus {
                    --un-outline-color-opacity: 1;
                    outline-color: rgba(168, 162, 158, var(--un-outline-color-opacity));
                    outline-style: solid;
                    outline: 2px solid transparent;
                    outline-offset: 2px;
                }

                @screen md {
                    display: block;

                    &::placeholder {
                        font-size: 0.75rem;
                    }
                }

                @screen xl {
                    margin-right: -7.5rem;
                    width: 32.5rem;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    padding-top: 0.9575rem;
                    padding-bottom: 0.9575rem;
                }
            }
        }

        > div:nth-child(2) {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            align-items: center;
            grid-column-gap: 0.5rem;
            column-gap: 0.5rem;
            padding-top: 0.5rem;

            @screen md {
                display: none;
            }

            input {
                grid-column: span 3/span 3;
                border-radius: 0.5rem;
                background-color: rgba(231, 229, 228, 0.7);
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                font-size: 0.75rem;
                line-height: 1rem;
                transition-duration: 250ms;

                &::placeholder {
                    font-size: 8px;
                }

                &:focus {
                    --un-outline-color-opacity: 1;
                    outline-color: rgba(168, 162, 158, var(--un-outline-color-opacity));
                    outline-style: solid;
                    outline: 2px solid transparent;
                    outline-offset: 2px;
                }

                @screen sm {
                    &::placeholder {
                        font-size: 10px;
                    }
                }
            }

            > div:nth-child(2) {
                grid-column: span 2/span 2;
                display: flex;
                align-items: center;
                justify-content: center;
                border-width: 1px;
                border-style: solid;
                --un-border-opacity: 1;
                border-color: rgba(245, 245, 244, var(--un-border-opacity));
                border-radius: 0.5rem;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                padding-top: 3px;
                padding-bottom: 3px;

                > div:nth-child(2) {
                    margin-right: 0.5rem;

                    > :not([hidden]) ~ :not([hidden]) {
                        --un-space-x-reverse: 0;
                        margin-left: calc(0.25rem * calc(1 - var(--un-space-x-reverse)));
                        margin-right: calc(0.25rem * var(--un-space-x-reverse));
                        --un-space-x-reverse: 1;
                    }

                    span {
                        cursor: pointer;
                        font-size: 10px;
                        transition-duration: 250ms;

                        &:hover {
                            --un-text-opacity: 1;
                            color: rgba(230, 70, 94, var(--un-text-opacity));
                        }
                    }

                    > span:nth-child(2) {
                        cursor: initial;

                        &:hover {
                            color: #616161;
                        }
                    }
                }
            }
        }

        > div:nth-child(3) {
            margin-top: 1.25rem;
            display: none;
            align-items: flex-end;
            justify-content: space-between;
            padding-left: 1.25rem;
            padding-right: 1.25rem;

            @screen xl {
                display: flex;
            }

            > div:nth-child(1) {
                display: flex;
                align-items: flex-end;


                > div:nth-child(1) {
                    position: relative;

                    button:nth-child(1) {
                        display: flex;
                        align-items: center;
                        padding-bottom: 0.75rem;
                        font-size: 0.75rem;
                        line-height: 1rem;

                        > :not([hidden]) ~ :not([hidden]) {
                            --un-space-x-reverse: 0;
                            margin-left: calc(0.375rem * calc(1 - var(--un-space-x-reverse)));
                            margin-right: calc(0.375rem * var(--un-space-x-reverse));
                            --un-space-x-reverse: 1;
                        }

                        div:nth-child(2) {
                            margin-top: 0.225rem;
                            transition-duration: 250ms;
                        }
                    }

                    > div:nth-child(2) {
                        position: absolute;
                        right: -1.25rem;
                        width: 45rem;
                        border-top-width: 1px;
                        border-top-style: solid;
                        --un-border-opacity: 1;
                        border-color: rgba(245, 245, 244, var(--un-border-opacity));
                        border-bottom-left-radius: 0.75rem;
                        border-bottom-right-radius: 0.75rem;
                        --un-bg-opacity: 1;
                        background-color: rgba(255, 255, 255, var(--un-bg-opacity));
                        padding: 1.25rem;
                        padding-left: 2.5rem;
                        z-index: 10;
                        --un-shadow: var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
                        box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);

                        > div:nth-child(1) {
                            display: flex;

                            > :not([hidden]) ~ :not([hidden]) {
                                --un-space-x-reverse: 0;
                                margin-left: calc(5rem * calc(1 - var(--un-space-x-reverse)));
                                margin-right: calc(5rem * var(--un-space-x-reverse));
                                --un-space-x-reverse: 1;
                            }

                            h3 {
                                cursor: pointer;
                                font-size: 0.75rem;
                                line-height: 1rem;
                                font-weight: 700;
                                transition-duration: 250ms;

                                &:hover {
                                    --un-text-opacity: 1;
                                    color: rgba(230, 70, 94, var(--un-text-opacity));
                                }
                            }
                        }

                        > div:nth-child(2) {
                            margin-top: 0.75rem;
                            margin-right: 1rem;
                            display: flex;

                            h4 {
                                cursor: pointer;
                                font-size: 0.75rem;
                                line-height: 1rem;
                            }

                            > div:nth-child(1) {
                                > :not([hidden]) ~ :not([hidden]) {
                                    --un-space-y-reverse: 0;
                                    margin-top: calc(0.5rem * calc(1 - var(--un-space-y-reverse)));
                                    margin-bottom: calc(0.5rem * var(--un-space-y-reverse));
                                }

                                h4 {
                                    margin-left: 3.5rem;
                                    transition-duration: 250ms;

                                    &:hover {
                                        margin-left: 3rem;
                                        padding-right: 0.5rem;
                                        --un-text-opacity: 1;
                                        color: rgba(230, 70, 94, var(--un-text-opacity));
                                    }
                                }
                            }

                            > div:nth-child(2) {
                                > :not([hidden]) ~ :not([hidden]) {
                                    --un-space-y-reverse: 0;
                                    margin-top: calc(0.5rem * calc(1 - var(--un-space-y-reverse)));
                                    margin-bottom: calc(0.5rem * var(--un-space-y-reverse));
                                }

                                h4 {
                                    transition-duration: 250ms;

                                    &:hover {
                                        padding-right: 0.5rem;
                                        --un-text-opacity: 1;
                                        color: rgba(230, 70, 94, var(--un-text-opacity));
                                    }
                                }

                            }
                        }
                    }
                }


                > div:nth-child(2) {
                    position: relative;
                    margin-right: 2.5rem;

                    button {
                        padding-left: 1.25rem;
                        padding-right: 1.25rem;
                        padding-bottom: 0.75rem;
                        font-size: 0.75rem;
                        line-height: 1rem;
                        transition-duration: 250ms;

                        &:hover {
                            --un-text-opacity: 1;
                            color: rgba(230, 70, 94, var(--un-text-opacity));
                        }

                        &:first-child {
                            padding-right: 0rem;
                        }

                        &:last-child {
                            padding-left: 0rem;
                        }
                    }
                }
            }

            > div:nth-child(2) {
                position: relative;
                margin-right: 2.5rem;

                button {
                    margin-bottom: 0.75rem;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    font-size: 0.75rem;
                    line-height: 1rem;
                    transition-duration: 250ms;

                    &:first-child {
                        border-left-width: 1px;
                        border-left-style: solid;
                        --un-border-opacity: 1;
                        border-color: rgba(214, 211, 209, var(--un-border-opacity));
                        padding-right: 0rem;
                    }

                    &:last-child {
                        padding-left: 0rem;
                    }

                    &:hover {
                        --un-text-opacity: 1;
                        color: rgba(230, 70, 94, var(--un-text-opacity));
                    }
                }
            }
        }
    }
}
</style>