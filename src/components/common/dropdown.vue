<template>

    <b-dropdown
        :id="event"
        size="lg"
        :no-flip="true"
        :text="selected !== null ? getDisplayValue(selected) : placeholder"
        class="btn-block"
        toggle-class="btn btn-secondary btn-lg btn-block shadow"
    >
        <b-dropdown-item
            v-for="item in data"
            :key="item.id"
            :class="{ active: isSelected(item, selected) }"
            @click="select(item)"
        >
            {{ getDisplayValue(item) }}
        </b-dropdown-item>

    </b-dropdown>

</template>

<script>
import matchItem from '@/utils/match-item';

export default {
    props: {
        event: String,
        data: Array,
        selected: Object,
        getDisplayValue: Function,
        placeholder: String
    },
    methods: {
        isSelected(currentItem, selectedItem) {
            return matchItem(currentItem, selectedItem);
        },
        select(item) {
            this.$emit(this.event, item);
        }
    }
};
</script>

<style lang="scss">
</style>
