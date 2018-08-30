<template>
    <div class="container">
        <div class="float-right">
            <button class="btn btn-primary" @click="newBrand">
                New
            </button>
        </div>
        <h2>Brands</h2>

        <transition-group name="list" tag="div" class="row">
            <div
                    class="col-12 col-md-6 col-lg-4 transition-item"
                    v-for="(item, index) in brands"
                    :key="item.brand"
            >
                <div
                        class="brand-item"
                        :class="{selected: isSelected(index)}"
                        @click.stop="selectBrand(index)"
                >
                    <span class="brand-name">
                        {{item.brand}}
                    </span>
                    <transition name="animation-slide-right-and-fade" appear>
                        <button
                                v-show="isSelected(index)"
                                class="btn btn-danger float-right brand-action"
                                @click.stop="deleteBrand(item.id)"
                        >
                            Delete
                        </button>
                    </transition>
                </div>
                <transition name="animation-slide-bottom-and-fade" appear>
                    <p
                            class="alert alert-danger mt-3"
                            v-if="!meta.status && meta.message !== null && isSelected(index)"
                    >
                        {{ meta.message }}
                    </p>
                </transition>

            </div>
        </transition-group>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        brands() {
            return this.$store.state.brands.brands;
        },
        ...mapGetters({
            meta: 'brands/getMeta'
        })
    },
    data() {
        return {
            brand: '',
            selectedIndex: null
        };
    },
    created() {
        this.$store.dispatch('brands/getBrands');
    },
    methods: {
        newBrand() {
            this.$router.push('brands/new');
        },
        deleteBrand(brandId) {
            this.$store.dispatch('brands/deleteBrand', {
                id: brandId
            });
        },
        selectBrand(index) {
            this.selectedIndex = this.isSelected(index) ? null : index;

            if (!this.meta.status) {
                this.$store.dispatch('brands/resetMeta');
            }
        },
        isSelected(index) {
            return this.selectedIndex === index;
        }
    },
    watch: {
        meta(actual) {
            if (actual.status) {
                this.selectBrand(null);
                this.$store.dispatch('brands/getBrands');
            } else {
                // console.log(actual.message);
            }
        }
    },
    destroyed() {
        this.$store.dispatch('brands/reset');
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../assets/scss/app.scss';

    .transition-item {
        transition: all 0.1s;
    }

    .list-enter, .list-leave {
        opacity: 0;
        transform: translateX(30px);
    }

    .list-leave-active {
        position: absolute;
    }

    .animation-slide-right-and-fade-enter {
        opacity: 0;
        transform: translateX(-30px);
    }

    .animation-slide-right-and-fade-enter-active {
        opacity: 1;
        transition: all 0.1ms;
    }

    .animation-slide-right-and-fade-leave {
        opacity: 1;
    }

    .animation-slide-right-and-fade-leave-active {
        opacity: 0;
        transition: all 0.1ms;
    }

    .animation-slide-bottom-and-fade-enter {
        opacity: 0;
    }

    .animation-slide-bottom-and-fade-enter-active {
        animation: bounce-and-fade 0.5s;
    }

    .animation-slide-bottom-and-fade-leave-active {
        animation: bounce-and-fade 0.2s reverse;
    }

    @keyframes bounce-and-fade {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            transform: translateY(0);
        }
    }

    .brand-item {
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.5s ease-out, color 0.1s ease-out;

        .brand-name {
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            border: 1px solid transparent;
        }

        &.selected {
            background-color: lighten($secondary, 15%);
            cursor: pointer;
            color: #fff;
            transition: background-color 0.5s ease-out, color 0.1s ease-out;
        }
    }
</style>
