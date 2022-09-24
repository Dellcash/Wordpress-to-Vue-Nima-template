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
    <header>
        <section>
            <div>
                <div>
                    <div :class="imgs.hamburger" />
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
                <div :class="imgs.basket" />
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

        >:not([hidden])~:not([hidden]) {
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
        }

        >div:nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: space-between;

            div {
                &:first-child {
                    display: flex;
                    align-items: center;

                    >:not([hidden])~:not([hidden]) {
                        --un-space-x-reverse: 0;
                        margin-left: calc(2.5rem * calc(1 - var(--un-space-x-reverse)));
                        margin-right: calc(2.5rem * var(--un-space-x-reverse));
                        --un-space-x-reverse: 1;
                    }

                    @screen xl {
                        >:not([hidden])~:not([hidden]) {
                            --un-space-x-reverse: 0;
                            margin-left: calc(0rem * calc(1 - var(--un-space-x-reverse)));
                            margin-right: calc(0rem * var(--un-space-x-reverse));
                        }
                    }

                    div {
                        &:first-child {
                            font-size: 1.5rem;
                            line-height: 2rem;

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

                            >:not([hidden])~:not([hidden]) {
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

        >div:nth-child(2) {
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

            >div:nth-child(2) {
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

                >div:nth-child(2) {
                    margin-right: 0.5rem;

                    >:not([hidden])~:not([hidden]) {
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

                    >span:nth-child(2) {
                        cursor: initial;

                        &:hover {
                            color: #616161;
                        }
                    }
                }
            }
        }
    }
}
</style>