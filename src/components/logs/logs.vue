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
    methods: {
        newLog() {
            this.$router.push('/logs/new');
        }
    },
    created() {
        this.$store.dispatch('logs/getLogs');
        this.$store.dispatch('shoes/getShoes');
    },
    mounted() {
        const navigation = this.$store.state.navigation.menu.logs.lastPage;

        if (navigation !== null) {
            this.$router.push(navigation);
        } else {
            this.$router.push('/logs/overview');
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
