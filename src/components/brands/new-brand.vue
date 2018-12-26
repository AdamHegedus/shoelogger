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
                <p class="alert alert-danger mt-3" v-if="!meta.status && meta.message !== null">
                    {{ meta.message }}
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
            meta: 'brands/getMeta'
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
        },
        metaChanged(meta) {
            if (meta.status) {
                this.$router.push('/brands');
            }
        }
    },
    watch: {
        meta(actual) {
            this.metaChanged(actual);
        }
    }
};
</script>

<style lang="scss">

</style>
