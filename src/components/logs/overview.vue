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
            const offset = 70;
            const rowHeight = 40;

            return `${(this.shoes.length * rowHeight) + offset}px`;
        }
    },
    components: {
        bar: Bar
    },
    created() {
        this.$store.dispatch('navigation/setNavigation', '/logs/overview');
    }
};
</script>

<style scoped lang="scss">
</style>
