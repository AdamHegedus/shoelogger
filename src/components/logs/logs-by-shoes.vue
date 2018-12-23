<template>
    <div class="logs-by-shoes">
        <h3>Logs by Shoes</h3>

        <div class="col-12 col-lg-6 col-lg-6 px-0 py-2">
            <div class="form-group">
                <label>Shoe</label>
                <dropdown
                    event="select-shoe"
                    @select-shoe="selectedShoe = arguments[0]"
                    :data="shoes"
                    :selected="selectedShoe"
                    :getDisplayValue="getShoeDisplayValue"
                    placeholder="Select Shoe"
                />
            </div>
        </div>
        <div class="col-12 col-lg-6 col-lg-6 px-0 py-2">
            <b-table
                v-if="selectedShoe !== null"
                hover
                bordered
                :responsive="false"
                :items="getLogsByProduct(selectedShoe.product)"
                :fields="columnDefinitions"
            >
                <template
                    slot="distance"
                    slot-scope="data"
                >
                    {{ data.item.distance }} km
                </template>
                <template slot="action" slot-scope="row">
                    <button
                        class="btn btn-danger log-action"
                        @click.stop="deleteLog(row.item.id)"
                    >
                        Delete
                    </button>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import Dropdown from '@/components/common/dropdown';

export default {
    components: {
        dropdown: Dropdown
    },
    computed: {
        logs() {
            return this.$store.state.logs.logs;
        },
        shoes() {
            return this.$store.state.shoes.shoes;
        },
        columnDefinitions() {
            return [
                {
                    key: 'distance',
                    label: 'Distance',
                    sortable: true
                },
                {
                    key: 'date',
                    label: 'Date',
                    sortable: true
                },
                {
                    key: 'action',
                    label: '',
                    class: 'action-column',
                    width: 100,
                    sortable: false
                }
            ];
        }
    },
    data() {
        return {
            selectedShoe: null
        };
    },
    methods: {
        getShoeDisplayValue(item) {
            return `${item.brand} - ${item.product}`;
        },
        getLogsByProduct(product) {
            return this.logs.filter((log) => {
                return log.product === product;
            });
        },
        deleteLog(logId) {
            this.$store.dispatch('logs/deleteLog', {
                id: logId
            });
        }
    },
    created() {
        this.$store.dispatch('navigation/setNavigation', '/logs/by-shoes');
        this.$store.dispatch('shoes/getShoes');
    }
};
</script>

<style lang="scss" >
    .sub-navbar {
        .nav-link {
            font-size: 14px;

            &.active {
                background-color: transparent;
            }
        }
    }

    .logs-by-shoes {
        td {
            vertical-align: middle;
        }
        .action-column {
            width: 75px;
        }
    }
</style>
