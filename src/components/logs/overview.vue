<template>

    <div class="container">
        <div class="row">
            <div class="col-sm col-lg-6">
                <h2>Overview</h2>

                <bar
                        style="height: 200px"
                        :data="shoes"
                        v-if="shoes.length > 0"
                >
                </bar>
            </div>
        </div>
    </div>

</template>

<script>
import Bar from '@/components/charts/bar';

export default {
    computed: {
        shoes() {
            return this.$store.state.shoes.shoes;
        }
    },
    components: {
        bar: Bar
    },
    data() {
        return {};
    },
    methods: {},
    watch: {},
    created() {
        this.$store.dispatch('logs/getLogs');
        this.$store.dispatch('shoes/getShoes');
    },
    destroyed() {
        this.$store.dispatch('logs/reset');
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
