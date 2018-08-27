<template>
    <div class="container">
        <div class="float-right">
            <button class="btn btn-primary" @click="newShoe">
                New
            </button>
        </div>
        <h2>Shoe list</h2>

        <div class="row">
            <div
                    class="col-12 col-md-6 col-lg-6 px-3 px-lg-2 py-2"
                    v-for="item in shoes"
                    :key="item.product"
            >
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ item.product }}
                            <br>
                            <small class="text-muted">{{ item.brand }}</small>
                        </h5>
                        <p class="card-text">Distance: {{ item.distance }} km</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div
                    class="col-12 col-md-6 col-lg-6 px-3 px-lg-2 py-2"
            >

            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        shoes() {
            return this.$store.state.shoes.shoes;
        }
    },
    created() {
        this.$store.dispatch('shoes/getShoes');
    },
    methods: {
        newShoe() {
            this.$router.push('shoes/new');
        }
    },
    destroyed() {
        this.$store.dispatch('shoes/reset');
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
