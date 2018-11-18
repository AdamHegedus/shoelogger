import matchItem from './match-item';

describe('utils > match-item', () => {
    const component = matchItem;

    describe('item A is undefined', () => {
        it('should return false', () => {
            // ASSIGN
            const expected = false;
            const itemA = undefined;
            const itemB = {
                id: 1
            };

            // ACT
            const actual = component(itemA, itemB);

            // ASSERT
            expect(actual).toEqual(expected);
        });
    });

    describe('item A is null', () => {
        it('should return false', () => {
            // ASSIGN
            const expected = false;
            const itemA = null;
            const itemB = {
                id: 1
            };

            // ACT
            const actual = component(itemA, itemB);

            // ASSERT
            expect(actual).toEqual(expected);
        });
    });

    describe('item A is an empty object', () => {
        it('should return false', () => {
            // ASSIGN
            const expected = false;
            const itemA = {};
            const itemB = {
                id: 1
            };

            // ACT
            const actual = component(itemA, itemB);

            // ASSERT
            expect(actual).toEqual(expected);
        });
    });

    describe('item A is an array', () => {
        it('should return false', () => {
            // ASSIGN
            const expected = false;
            const itemA = [];
            const itemB = {
                id: 1
            };

            // ACT
            const actual = component(itemA, itemB);

            // ASSERT
            expect(actual).toEqual(expected);
        });
    });

    describe('item A is a valid object', () => {
        describe('item B is a different object', () => {
            it('should return false', () => {
                // ASSIGN
                const expected = false;
                const itemA = {
                    id: 2
                };
                const itemB = {
                    id: 1
                };

                // ACT
                const actual = component(itemA, itemB);

                // ASSERT
                expect(actual).toEqual(expected);
            });
        });

        describe('item B is the same object', () => {
            it('should return true', () => {
                // ASSIGN
                const expected = true;
                const itemA = {
                    id: 1
                };
                const itemB = {
                    id: 1
                };

                // ACT
                const actual = component(itemA, itemB);

                // ASSERT
                expect(actual).toEqual(expected);
            });
        });
    });

    describe('item B is undefined', () => {
        it('should return false', () => {
            // ASSIGN
            const expected = false;
            const itemA = {
                id: 1
            };
            const itemB = undefined;

            // ACT
            const actual = component(itemA, itemB);

            // ASSERT
            expect(actual).toEqual(expected);
        });
    });

    describe('item B is null', () => {
        it('should return false', () => {
            // ASSIGN
            const expected = false;
            const itemA = {
                id: 1
            };
            const itemB = null;

            // ACT
            const actual = component(itemA, itemB);

            // ASSERT
            expect(actual).toEqual(expected);
        });
    });

    describe('item B is an empty object', () => {
        it('should return false', () => {
            // ASSIGN
            const expected = false;
            const itemA = {
                id: 1
            };
            const itemB = {};

            // ACT
            const actual = component(itemA, itemB);

            // ASSERT
            expect(actual).toEqual(expected);
        });
    });

    describe('item B is an array', () => {
        it('should return false', () => {
            // ASSIGN
            const expected = false;
            const itemA = {
                id: 1
            };
            const itemB = [];

            // ACT
            const actual = component(itemA, itemB);

            // ASSERT
            expect(actual).toEqual(expected);
        });
    });

    describe('item B is a valid object', () => {
        describe('item A is a different object', () => {
            it('should return false', () => {
                // ASSIGN
                const expected = false;
                const itemA = {
                    id: 1
                };
                const itemB = {
                    id: 2
                };

                // ACT
                const actual = component(itemA, itemB);

                // ASSERT
                expect(actual).toEqual(expected);
            });
        });

        describe('item A is the same object', () => {
            it('should return true', () => {
                // ASSIGN
                const expected = true;
                const itemA = {
                    id: 1
                };
                const itemB = {
                    id: 1
                };

                // ACT
                const actual = component(itemA, itemB);

                // ASSERT
                expect(actual).toEqual(expected);
            });
        });
    });
});
