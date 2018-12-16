<template>

    <div class="container">
        <div class="row">
            <div class="col-sm col-lg-6">
                <h2>Add New Log Entry</h2>
                <form>
                    <div class="form-group">
                        <div class="form-group">
                            <label>Shoe</label>
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
                    </div>
                    <div class="form-group">
                        <label for="distance">Distance</label>
                        <input
                                type="number"
                                class="form-control form-control-lg shadow border border-primary"
                                id="distance"
                                v-model="distance"
                                placeholder="Distance (km)"
                        >
                    </div>

                    <div class="form-group">
                        <label for="date">Date</label>
                        <input
                                type="date"
                                class="form-control form-control-lg shadow border border-primary"
                                id="date"
                                v-model="date"
                                placeholder="Date (YYYY-mm-dd)"
                        >
                    </div>

                    <button
                            type="submit"
                            class="btn btn-primary btn-lg btn-block shadow"
                            @click="addLog(getShoe)"
                            :disabled="!isValid"
                    >
                        Add
                    </button>

                </form>
            </div>

        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
import matchItem from '@/utils/match-item';

export default {
    computed: {
        shoes() {
            return this.$store.state.shoes.shoes;
        },

        getShoe() {
            return {
                shoeId: this.selectedShoe.id,
                distance: this.distance,
                date: this.date
            };
        },
        isValid() {
            return this.selectedShoe !== null && this.distance.length > 0;
        },
        ...mapGetters({
            meta: 'logs/getMeta'
        })
    },
    data() {
        return {
            selectedShoe: null,
            distance: 0,
            date: new Date().toISOString().substring(0, 10)
        };
    },
    methods: {
        isSelected(currentItem, selectedItem) {
            return matchItem(currentItem, selectedItem);
        },
        selectShoe(shoe) {
            this.selectedShoe = shoe;
        },
        addLog(shoe) {
            this.$store.dispatch('logs/addLog', shoe);
        }
    },
    watch: {
        meta(actual) {
            if (actual.status) {
                this.$router.push('/logs/recent');
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
