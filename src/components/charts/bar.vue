<template>
    <div class="bar-chart"></div>
</template>

<script>
import * as d3 from 'd3';

export default {
    name: 'bar-chart',
    props: {
        data: {
            type: Array,
            default: () => {
                return [];
            }
        },
        margin: {
            type: Object,
            default: () => {
                return {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 20
                };
            }
        }
    },
    data() {
        return {
            width: 1,
            height: 1,
            scaled: {
                x: null,
                y: null
            },
            svg: null
        };
    },
    mounted() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
        this.initialize();
    },

    computed: {
        calculatedWidth() {
            return this.width - (this.margin.left + this.margin.right);
        },
        calculatedHeight() {
            return this.height - (this.margin.top + this.margin.bottom);
        },
        barWidth() {
            return 16;
        }
    },
    methods: {
        onResize() {
            this.width = this.$el.offsetWidth > 0 ? this.$el.offsetWidth : 200;
            this.height = this.$el.offsetHeight > 0 ? this.$el.offsetHeight : 200;
        },
        initialize() {
            this.renderSVG();
        },
        renderSVG() {
            this.svg = d3.select(this.$el)
                .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
                .append('g')
                .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

            this.update();
        },
        appendAxes(svg, x) {
            svg.append('g')
                .attr('class', 'axis axis-x')
                .attr('transform', `translate(0, ${this.calculatedHeight})`)
                .call(d3.axisBottom(x).ticks(6))
                .append('text')
                .attr('class', 'axis-label')
                .attr('x', this.calculatedWidth)
                .attr('y', this.margin.top * 1.25)
                .text('Distance (km)');
        },
        appendBars(svg, x, y) {
            svg
                .append('g')
                .attr('class', 'bars')
                .selectAll('.bar')
                .data(this.data)
                .enter()
                .append('rect')
                .attr('class', (d) => {
                    return `bar product-${d.product.replace(/\s+/g, '-').toLowerCase()}`;
                })
                .attr('x', 0)
                .attr('y', (d) => {
                    return y(d.product) + ((y.bandwidth() - this.barWidth) / 2);
                })
                .attr('height', this.barWidth)
                .attr('width', (d) => {
                    return x(d.distance);
                });

            svg
                .append('g')
                .attr('class', 'data-labels')
                .selectAll('.product-label')
                .data(this.data)
                .enter()
                .append('text')
                .attr('class', 'product-label')
                .attr('x', 0)
                .attr('y', (d) => {
                    return y(d.product);
                })
                .attr('dy', '0.5em')
                .text((d) => {
                    return `${d.product}`;
                });

            svg
                .append('g')
                .attr('class', 'data-labels')
                .selectAll('.data-label')
                .data(this.data)
                .enter()
                .append('text')
                .attr('class', 'data-label')
                .attr('x', this.calculatedWidth)
                .attr('y', (d) => {
                    return y(d.product);
                })
                .attr('dy', '0.5em')
                .text((d) => {
                    return `${d.distance} km`;
                });
        },
        clearAxes() {
            d3.selectAll('.axis')
                .remove();
        },
        clearBars() {
            d3.selectAll('.bars')
                .remove();
        },
        clearLabels() {
            d3.selectAll('.data-labels')
                .remove();
            d3.selectAll('.product-labels')
                .remove();
        },
        update() {
            d3.select('svg')
                .attr('width', this.width)
                .attr('height', this.height);

            this.calculateScales();
            this.clearAxes();
            this.clearBars();
            this.clearLabels();
            this.appendAxes(this.svg, this.scaled.x);
            this.appendBars(this.svg, this.scaled.x, this.scaled.y);
        },
        calculateScales() {
            this.scaled.x = d3
                .scaleLinear()
                .rangeRound([0, this.calculatedWidth]);

            this.scaled.y = d3
                .scaleBand()
                .rangeRound([this.calculatedHeight, 0]);

            this.scaled.x.domain([0, d3.max(this.data, (d) => {
                return d.distance;
            })]);

            this.scaled.y.domain(this.data.map((d) => {
                return d.product;
            }));
        }
    },
    watch: {
        width() {
            this.update();
        },
        data() {
            this.update();
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    }
};
</script>

<style lang="scss">
    @import '../../assets/scss/app.scss';

    .bar-chart {
        svg {

            border: 1px solid $secondary;

            .axis {
                line {
                    stroke: $secondary;
                }
                text {
                    fill: $secondary;
                }
            }

            .bar {
                fill: $secondary;

                &:hover {
                    cursor: pointer;
                    fill: $primary;
                }
            }

            .axis-label {
                fill: $primary;
                text-anchor: end;
                dominant-baseline: middle;
            }

            .product-label {
                fill: $primary;
                text-anchor: start;
                font-size: 12px;
            }

            .data-label {
                fill: $secondary;
                text-anchor: end;
                font-size: 12px;
            }
        }
    }
</style>
