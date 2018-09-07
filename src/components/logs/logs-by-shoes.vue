<template>
    <div>
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
                :responsive="true"
                :items="getLogsByProduct(selectedShoe.product)"
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
    data() {
        return {
            selectedShoe: null
        };
    },
    methods: {
        newLog() {
            this.$router.push('/logs/new');
        },
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
        }
    },
    created() {
        this.$store.dispatch('logs/getLogs');
        this.$store.dispatch('shoes/getShoes');
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
