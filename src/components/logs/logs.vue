<template>
    <div class="container">
        <div class="float-right">
            <button class="btn btn-primary" @click="newLog">
                New
            </button>
        </div>
        <h2>Logs</h2>

        <b-table
                hover
                bordered
                :responsive="true"
                :items="logs"
                :fields="columnDefinitions"
        >
            <template
                    slot="distance"
                    slot-scope="data"
            >
                {{ data.item.distance }} km
            </template>
        </b-table>
    </div>
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
            this.$router.push('logs/new');
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
