<template>

    <div class="container">
        <div class="row">
            <div class="col-sm col-lg-6">
                <h2>Add New Brand</h2>
                <form>
                    <div class="form-group">
                        <label for="brandName">Brand Name</label>
                        <input
                                type="text"
                                class="form-control form-control-lg shadow border border-primary"
                                id="brandName"
                                v-model="brand"
                                placeholder="Brand Name"
                        >
                    </div>

                    <button
                            type="submit"
                            class="btn btn-primary btn-lg btn-block shadow"
                            @click="addBrand(getBrand)"
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
        getBrand() {
            return {
                brand: this.brand
            };
        },
        isValid() {
            return this.brand.length > 0;
        }
    },
    data() {
        return {
            brand: ''
        };
    },
    methods: {
        addBrand(brand) {
            this.$store.dispatch('brands/addBrand', brand);
        }
    },
    destroyed() {
        this.$store.dispatch('brands/reset');
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
