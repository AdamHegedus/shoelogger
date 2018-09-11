<template>
    <div class="container">
        <div class="float-right">
            <button class="btn btn-primary" @click="newLog">
                New
            </button>
        </div>
        <h2>Logs</h2>

        <b-navbar
                :toggleable="false"
                class="sub-navbar"
        >
            <b-navbar-nav>
                <b-nav-item to="/logs/overview">
                    Overview
                </b-nav-item>
                <b-nav-item to="/logs/recent">
                    Recent
                </b-nav-item>
                <b-nav-item to="/logs/by-shoes">
                    By Shoes
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>

        <transition name="slide" mode="out-in">
            <router-view />
        </transition>

    </div>
</template>

<script>
export default {
    computed: {
        logs() {
            return this.$store.state.logs.logs;
        }
    },
    methods: {
        newLog() {
            this.$router.push('/logs/new');
        }
    },
    created() {
        this.$store.dispatch('logs/getLogs');
        const navigation = this.$store.state.navigation.menu.logs.lastPage;

        if (navigation !== null) {
            this.$router.push(navigation);
        } else {
            this.$router.push('/logs/overview');
        }
    },
    destroyed() {
        this.$store.dispatch('logs/reset');
    }
};
</script>

<style lang="scss" scoped>
</style>
