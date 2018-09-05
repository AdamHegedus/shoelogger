<template>
    <div class="container">
        <div class="float-right">
            <button class="btn btn-primary" @click="newLog">
                New
            </button>
        </div>
        <h2>Logs</h2>

        <!--<button-->
                <!--type="submit"-->
                <!--class="btn btn-primary btn-lg btn-block shadow"-->
                <!--@click="showOverview()"-->
        <!--&gt;-->
            <!--Overview-->
        <!--</button>-->

        <b-navbar
                :toggleable="false"
                type="dark"
                variant="secondary"
        >
            <b-navbar-nav>
                <b-nav-item to="/logs/overview">
                    Overview
                </b-nav-item>
                <b-nav-item to="/shoes">
                    By Shoes
                </b-nav-item>
                <b-nav-item to="/types">
                    By Types
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>

        <!--<b-table-->
        <!--hover-->
        <!--bordered-->
        <!--:responsive="true"-->
        <!--:items="logs"-->
        <!--:fields="columnDefinitions"-->
        <!--&gt;-->
        <!--<template-->
        <!--slot="distance"-->
        <!--slot-scope="data"-->
        <!--&gt;-->
        <!--{{ data.item.distance }} km-->
        <!--</template>-->
        <!--</b-table>-->

        <div class="row">
            <div class="col-12">
                <transition name="slide" mode="out-in">
                    <router-view />
                </transition>
            </div>
        </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
