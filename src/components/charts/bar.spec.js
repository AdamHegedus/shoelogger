import Vue from 'vue';
import Bar from '@/components/charts/bar';

describe('index.vue', () => {

    const shoes = [
        {
            id: 1,
            brand: 'Foo',
            product: 'Shoe A',
            distance: 100
        },
        {
            id: 2,
            brand: 'Foo',
            product: 'Shoe B',
            distance: 50
        },
        {
            id: 3,
            brand: 'Bar',
            product: 'Shoe C',
            distance: 0
        },
        {
            id: 4,
            brand: 'Bar',
            product: 'Shoe D',
            distance: 15
        }
    ];

    const Constructor = Vue.extend(Bar);
    const vm = new Constructor({
        propsData: {
            data: shoes
        }
    }).$mount(document.createElement('div'));

    it('should match snapshot', () => {
        // ASSIGN

        // ACT
        const actual = vm.$el;

        // ASSERT
        expect(actual).toMatchSnapshot();
    });
});
