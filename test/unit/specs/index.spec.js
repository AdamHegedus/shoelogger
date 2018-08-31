import Vue from 'vue';
import Index from '@/components/index';

describe('index.vue', () => {
    const Constructor = Vue.extend(Index);
    const vm = new Constructor().$mount();

    it('should match snapshot', () => {
        // ASSIGN

        // ACT
        const actual = vm.$el;

        // ASSERT
        expect(actual).toMatchSnapshot();
    });
});
