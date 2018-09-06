<template>
    <div>
        <h3>Recent logs</h3>

        <transition-group name="list" tag="div" class="row">
            <div
                    class="col-12 col-md-6 col-lg-6 px-3 px-lg-2 py-2 transition-item"
                    v-for="(item, index) in logs"
                    :key="index"
            >
                <div
                        class="card"
                        :class="{selected: isSelected(index)}"
                        @click.stop="selectLog(index)"
                >
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ item.product }}
                            <br>
                            <small>{{ item.brand }}</small>
                        </h5>

                        <span class="card-text">
                            Distance: <strong>{{ item.distance }}</strong> km
                        </span>
                        <span class="card-text float-right">
                            Date: <strong>{{ item.date }}</strong>
                        </span>

                        <transition name="fade" appear mode="out-in">
                            <button
                                    v-show="isSelected(index)"
                                    class="btn btn-danger log-action"
                                    @click.stop="deleteLog(item.id)"
                            >
                                Delete
                            </button>
                        </transition>
                    </div>
                </div>
                <transition name="animation-slide-bottom-and-fade" appear>
                    <p
                            class="alert alert-danger mt-3"
                            v-if="!meta.status && meta.message !== null && isSelected(index)"
                    >
                        {{ meta.message }}
                    </p>
                </transition>
            </div>
        </transition-group>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        logs() {
            return this.$store.state.logs.logs;
        },
        ...mapGetters({
            meta: 'shoes/getMeta'
        })
    },
    data() {
        return {
            selectedIndex: null
        };
    },
    methods: {
        deleteLog(logId) {
            this.$store.dispatch('logs/deleteLog', {
                id: logId
            });
        },
        selectLog(index) {
            this.selectedIndex = this.isSelected(index) ? null : index;

            if (!this.meta.status) {
                this.$store.dispatch('logs/resetMeta');
            }
        },
        isSelected(index) {
            return this.selectedIndex === index;
        }
    },
    watch: {
        meta(actual) {
            if (actual.status) {
                this.selectLog(null);
                this.$store.dispatch('logs/getLogs');
                this.$store.dispatch('shoes/getShoes');
            } else {
                // console.log(actual.message);
            }
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
    @import '../../assets/scss/app.scss';

    .card {
        transition: background-color 0.5s ease-out, color 0.1s ease-out;

        &.selected {
            background-color: lighten($secondary, 15%);
            cursor: pointer;
            color: $white;
            transition: background-color 0.5s ease-out, color 0.1s ease-out;
        }
    }

    .log-action {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .transition-item {
        transition: all 0.1s;
    }

    .list-enter, .list-leave {
        opacity: 0;
        transform: scale(0.5);
    }

    .list-leave-active {
        position: absolute;
    }

    .animation-slide-bottom-and-fade-enter {
        opacity: 0;
    }

    .animation-slide-bottom-and-fade-enter-active {
        animation: slide-bottom-and-fade 0.5s;
    }

    .animation-slide-bottom-and-fade-leave-active {
        animation: slide-bottom-and-fade 0.2s reverse;
    }

    @keyframes slide-bottom-and-fade {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            transform: translateY(0);
        }
    }

</style>
