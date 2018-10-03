<template>
    <div id="app" class="container-fluid">
        <div class="row m-0 fixed-top">
            <div class="col-12 p-0">
                <b-navbar
                    :toggleable="false"
                    type="dark"
                    variant="secondary"
                    class="main-navbar"
                >
                    <b-navbar-nav>
                        <b-nav-item to="/shoes">
                            Shoes
                        </b-nav-item>
                        <b-nav-item to="/logs">
                            Logs
                        </b-nav-item>
                        <b-nav-item to="/brands">
                            Brands
                        </b-nav-item>
                    </b-navbar-nav>
                </b-navbar>
            </div>
        </div>

        <div class="row m-0">
            <div class="col-md-12 p-0">
            </div>
        </div>
        <div class="row m-0 mt-5">
            <div class="col-md-12 pt-2">
                <transition name="slide" mode="out-in">
                    <router-view />
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
    @import './assets/scss/app.scss';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        padding: 0 0 20px 0;

        h2,
        label {
            text-shadow: 0 0 2px whitesmoke;
        }

        .dropdown-menu {
            width: 100%;
            background-color: $body-bg;
            border: 1px solid $secondary;

            .dropdown-item {
                &:hover,
                &.active {
                    background-color: $primary !important;
                    color: $white;
                    outline: none;
                }
                &:focus {
                    background-color: transparent;
                    outline: none;
                }
            }
        }

        .navbar {
            padding: 0;
        }

        .navbar-nav {
            flex-direction: row;

            .nav-link {
                padding: 0.75rem 0.75rem;
            }
        }
    }

    .main-navbar {
        .nav-link {
            padding: 0.75rem 0.75rem;

            &.active {
                background-color: $primary;
            }
        }
    }

    table.table-bordered {
        thead {
            th {
                border-color: $secondary;
                color: $primary;
            }
        }
        tbody {
            td {
                border-color: $secondary;
                color: $secondary;
            }
        }
    }

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 0.2s ease;
    }

    .fade-leave {
        opacity: 1;
    }

    .fade-leave-active {
        opacity: 0;
        transition: opacity 0.2s ease
    }

</style>
