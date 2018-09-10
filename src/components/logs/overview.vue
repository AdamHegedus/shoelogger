<template>

    <div>
        <div class="row">
            <div class="col-sm col-lg-6">
                <h3>Overview</h3>

                <bar
                        :style="{height: getHeight}"
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
        },
        getHeight() {
            return (this.shoes.length * 40) + 70 + 'px';
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

<style scoped lang="scss">
</style>
