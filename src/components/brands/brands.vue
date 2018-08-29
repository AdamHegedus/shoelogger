<template>
    <div class="container">
        <div class="float-right">
            <button class="btn btn-primary" @click="newBrand">
                New
            </button>
        </div>
        <h2>Brands</h2>

        <div class="row">
            <div
                    class="col-12 col-md-6 col-lg-4"
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
                    <transition name="slide">
                        <button
                                class="btn btn-danger float-right brand-action"
                                @click="deleteBrand(item.id)"
                        >
                            Delete
                        </button>
                    </transition>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        brands() {
            return this.$store.state.brands.brands;
        }
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
        },
        isSelected(index) {
            return this.selectedIndex === index;
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

    .brand-item {
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        .brand-name {
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            border: 1px solid transparent;
        }

        .brand-action {
            display: none;
        }

        &.selected {
            background-color: lighten($secondary, 15%);
            cursor: pointer;
            color: #fff;

            .brand-action {
                display: block;
            }
        }
    }
</style>
