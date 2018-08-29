import Vue from 'vue';
import Index from '@/components/index';

describe('index.vue', () => {
    it('should render correct contents', () => {
        // ASSIGN
        const Constructor = Vue.extend(Index);
        const vm = new Constructor().$mount();
        const expected = 'Shoe Logger';

        // ACT
        const actual = vm.$el.querySelector('h1').textContent;

        // ASSERT
        expect(actual).toEqual(expected);
    });
});
