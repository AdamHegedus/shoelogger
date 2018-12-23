<template>

    <div class="container">
        <div class="row">
            <div class="col-sm col-lg-6">
                <h2>Edit Shoe</h2>
                <form>
                    <div class="form-group">
                        <label>Type</label>
                        <dropdown
                            event="select-type"
                            @select-type="selectedType = arguments[0]"
                            :data="types"
                            :selected="selectedType"
                            :getDisplayValue="getTypeDisplayValue"
                            placeholder="Select Type"
                        />
                    </div>
                    <div class="form-group">
                        <label>Brand Name</label>
                        <dropdown
                            event="select-brand"
                            @select-brand="selectedBrand = arguments[0]"
                            :data="brands"
                            :selected="selectedBrand"
                            :getDisplayValue="getBrandDisplayValue"
                            placeholder="Select Brand"
                        />
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
                        id="save"
                        class="btn btn-primary btn-lg btn-block shadow"
                        @click="editShoe(getShoe)"
                        :disabled="!isValid"
                    >
                        Save
                    </button>

                </form>
            </div>

        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
import Dropdown from '@/components/common/dropdown';

export default {
    components: {
        dropdown: Dropdown
    },
    computed: {
        brands() {
            return this.$store.state.brands.brands;
        },
        types() {
            return this.$store.state.types.types;
        },
        original() {
            return this.$store.state.shoes.shoe;
        },
        getShoe() {
            return {
                id: this.original.id,
                brandId: this.selectedBrand.id,
                typeId: this.selectedType.id,
                product: this.product
            };
        },
        isValid() {
            return (
                this.selectedBrand !== null &&
                this.selectedType !== null &&
                this.product.length > 0
            );
        },
        ...mapGetters({
            meta: 'shoes/getMeta'
        })
    },
    data() {
        return {
            selectedBrand: null,
            selectedType: null,
            product: ''
        };
    },
    methods: {
        getTypeDisplayValue(item) {
            return item.type;
        },
        getBrandDisplayValue(item) {
            return item.brand;
        },
        selectBrand(brand) {
            this.selectedBrand = brand;
        },
        selectType(type) {
            this.selectedType = type;
        },
        editShoe(shoe) {
            this.$store.dispatch('shoes/editShoe', shoe);
        }
    },
    created() {
        this.$store.dispatch('brands/getBrands');
        this.$store.dispatch('types/getTypes');

        const id = this.$route.params.id - 0;
        this.$store.dispatch('shoes/getShoesById', { id });
    },
    watch: {
        meta(actual) {
            if (actual.status) {
                this.$router.push('/shoes');
            }
        },
        original(actual) {
            const type = this.types.find((element) => {
                return element.id === actual.typeId;
            });
            const brand = this.brands.find((element) => {
                return element.id === actual.brandId;
            });

            this.selectType(type);
            this.selectBrand(brand);
            this.product = actual.product;
        }
    }
};
</script>

<style scoped lang="scss">
</style>
