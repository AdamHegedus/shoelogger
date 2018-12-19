<template>

    <div class="container">
        <div class="row">
            <div class="col-sm col-lg-6">
                <h2>Add New Shoe</h2>
                <form>
                    <div class="form-group">

                        <label>Type</label>
                        <dropdown
                            event="select-type"
                            v-on:select-type="selectedType = arguments[0]"
                            :data="types"
                            :selected="selectedType"
                            :getDisplayValue="(item) => item.type"
                            placeholder="Select Type"
                        />
                    </div>

                    <div class="form-group">

                        <label>Type</label>
                        <b-dropdown
                            id="type"
                            size="lg"
                            :no-flip="true"
                            :text="selectedType !== null ?
                            selectedType.type :
                            'Select Type'"
                            class="btn-block"
                            toggle-class="btn btn-secondary btn-lg btn-block shadow"
                        >
                            <b-dropdown-item
                                :class="{ active: isSelected(type, selectedType) }"
                                :key="type.type"
                                v-for="type in types"
                                @click="selectType(type)"
                            >
                                {{type.type}}
                            </b-dropdown-item>

                        </b-dropdown>
                    </div>
                    <div class="form-group">
                        <label>Brand Name</label>
                        <b-dropdown
                            id="brandName"
                            size="lg"
                            :no-flip="true"
                            :text="selectedBrand !== null ?
                            selectedBrand.brand :
                            'Select Brand'"
                            class="btn-block"
                            toggle-class="btn btn-secondary btn-lg btn-block shadow"
                        >
                            <b-dropdown-item
                                :class="{ active: isSelected(brand, selectedBrand) }"
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
                        id="add"
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
import { mapGetters } from 'vuex';
import matchItem from '@/utils/match-item';
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
        getShoe() {
            return {
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
        isSelected(currentItem, selectedItem) {
            return matchItem(currentItem, selectedItem);
        },
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
    watch: {
        meta(actual) {
            if (actual.status) {
                this.$router.push('/shoes');
            }
        }
    }
};
</script>

<style scoped lang="scss">
</style>
