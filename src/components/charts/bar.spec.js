import Vue from 'vue';
import Bar from '@/components/charts/bar';

describe('index.vue', () => {
    const Constructor = Vue.extend(Bar);

    it('should match snapshot when data is available', () => {
        // ASSIGN
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
        const vm = new Constructor({
            propsData: {
                data: shoes
            }
        }).$mount(document.createElement('div'));

        // ACT
        const actual = vm.$el;

        // ASSERT
        expect(actual).toMatchSnapshot();
    });

    it('should match snapshot when data is empty', () => {
        // ASSIGN
        const vm = new Constructor({}).$mount(document.createElement('div'));

        // ACT
        const actual = vm.$el;

        // ASSERT
        expect(actual).toMatchSnapshot();
    });
});
