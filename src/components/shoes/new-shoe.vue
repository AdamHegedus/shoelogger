<template>

    <div class="container">
        <div class="row">
            <div class="col-sm col-lg-6">
                <h2>Add New Shoe</h2>
                <form>
                    <div class="form-group">
                        <div class="form-group">
                            <label>Type</label>
                            <b-dropdown
                                    id="type"
                                    size="lg"
                                    :text="selectedType !== null ?
                                    selectedType.type :
                                    'Select Type'"
                                    class="btn-block"
                                    toggle-class="btn btn-secondary btn-lg btn-block shadow"
                            >
                                <b-dropdown-item
                                        :key="type.type"
                                        v-for="type in types"
                                        @click="selectType(type)"
                                >
                                    {{type.type}}
                                </b-dropdown-item>

                            </b-dropdown>
                        </div>
                        <label>Brand Name</label>
                        <b-dropdown
                                id="brandName"
                                size="lg"
                                :text="selectedBrand !== null ?
                                selectedBrand.brand :
                                'Select Brand'"
                                class="btn-block"
                                toggle-class="btn btn-secondary btn-lg btn-block shadow"
                        >
                            <b-dropdown-item
                                    :key="brand.brand"
                                    v-for="brand in brands"
                                    @click="selectBrand(brand)"
                            >
                                {{brand.brand}}
                            </b-dropdown-item>

                        </b-dropdown>

                    </div>
                    <div class="form-group">
                        <label for="productName">Product Name</label>
                        <input
                                type="text"
                                class="form-control form-control-lg shadow border border-primary"
                                id="productName"
                                v-model="product"
                                placeholder="Product Name"
                        >
                    </div>

                    <button
                            type="submit"
                            class="btn btn-primary btn-lg btn-block shadow"
                            @click="addShoe(getShoe)"
                            :disabled="!isValid"
                    >
                        Add
                    </button>

                </form>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    computed: {
        brands() {
            return this.$store.state.brands.brands;
        },
        types() {
            return this.$store.state.types.types;
        },
        getShoe() {
            return {
                brandId: this.selectedBrand.id,
                typeId: this.selectedType.id,
                product: this.product
            };
        },
        isValid() {
            return this.selectedBrand !== null &&
                this.selectedType !== null &&
                this.product.length > 0;
        }
    },
    data() {
        return {
            selectedBrand: null,
            selectedType: null,
            product: ''
        };
    },
    methods: {
        selectBrand(brand) {
            this.selectedBrand = brand;
        },
        selectType(type) {
            this.selectedType = type;
        },
        addShoe(shoe) {
            this.$store.dispatch('shoes/addShoe', shoe);
        }
    },
    created() {
        this.$store.dispatch('brands/getBrands');
        this.$store.dispatch('types/getTypes');
    },
    destroyed() {
        this.$store.dispatch('shoes/reset');
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
