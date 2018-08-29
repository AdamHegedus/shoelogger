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
                <p class="alert alert-danger mt-3" v-if="status === false">
                    Error adding brand to database.
                </p>
            </div>

        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        getBrand() {
            return {
                brand: this.brand
            };
        },
        isValid() {
            return this.brand.length > 0;
        },
        ...mapGetters({
            status: 'brands/getStatus'
        })
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
    watch: {
        status(actual) {
            if (actual) {
                this.$router.push('/brands');
            } else {
                // this.$store.dispatch('brands/reset');
            }
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
