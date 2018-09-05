<template>
    <!-- <div class="container"> -->
        <h3>Logs by Shoes</h3>

    <!-- </div> -->
</template>

<script>
export default {
    computed: {
        logs() {
            return this.$store.state.logs.logs;
        },
        columnDefinitions() {
            return [
                {
                    key: 'product',
                    label: 'Product Name',
                    sortable: true
                },
                {
                    key: 'brand',
                    label: 'Brand Name',
                    sortable: true
                },
                {
                    key: 'type',
                    label: 'Type',
                    sortable: true
                },
                {
                    key: 'distance',
                    label: 'Distance',
                    sortable: false
                },
                {
                    key: 'date',
                    label: 'Date',
                    sortable: true
                }
            ];
        }
    },
    methods: {
        newLog() {
            this.$router.push('/logs/new');
        },
        showOverview() {
            this.$router.push('/logs/overview');
        }
    },
    created() {
        this.$store.dispatch('logs/getLogs');
    },
    destroyed() {
        this.$store.dispatch('logs/reset');
    }
};
</script>

<style lang="scss" scoped>
.sub-navbar {
    .nav-link {
        font-size: 14px;

        &.active {
            background-color: transparent;
        }
    }
}
</style>
