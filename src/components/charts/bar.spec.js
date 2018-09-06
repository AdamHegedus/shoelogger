import Vue from 'vue';
import Bar from '@/components/charts/bar';

describe('index.vue', () => {
    const Constructor = Vue.extend(Bar);
    const vm = new Constructor().$mount();

    it('should match snapshot', () => {
        // ASSIGN

        // ACT
        const actual = vm.$el;

        // ASSERT
        expect(actual).toMatchSnapshot();
    });
});
