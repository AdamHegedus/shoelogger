<template>
    <div class="logs-by-shoes">
        <h3>Logs by Shoes</h3>

        <div class="col-12 col-lg-6 col-lg-6 px-0 py-2">
            <b-dropdown
                id="type"
                size="lg"
                :no-flip="true"
                :text="selectedShoe !== null ?
                `${selectedShoe.brand} ${selectedShoe.product}` :
                'Select Shoe'"
                class="btn-block"
                toggle-class="btn btn-secondary btn-lg btn-block shadow"
            >
                <b-dropdown-item
                    :class="{ active: isSelected(shoe, selectedShoe) }"
                    :key="shoe.product"
                    v-for="shoe in shoes"
                    @click="selectShoe(shoe)"
                >
                    {{shoe.brand}} - {{shoe.product}}
                </b-dropdown-item>

            </b-dropdown>
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
import matchItem from '@/utils/match-item';

export default {
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
        getLogsByProduct(product) {
            return this.logs.filter((log) => {
                return log.product === product;
            });
        },
        isSelected(currentItem, selectedItem) {
            return matchItem(currentItem, selectedItem);
        },
        selectShoe(shoe) {
            this.selectedShoe = shoe;
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
