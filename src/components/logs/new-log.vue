<template>

    <div class="container">
        <div class="row">
            <div class="col-sm col-lg-6">
                <h2>Add New Log Entry</h2>
                <form>
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
import Dropdown from '@/components/common/dropdown';

export default {
    components: {
        dropdown: Dropdown
    },
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
        getShoeDisplayValue(item) {
            return `${item.brand} - ${item.product}`;
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

<style scoped lang="scss">
</style>
