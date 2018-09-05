<template>

    <div class="container">
    </div>

</template>

<script>
import * as d3 from 'd3';

export default {
    props: ['data'],
    mounted() {
        const margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 50
        };
        const barWidth = 20;

        const parentWidth = this.$el.clientWidth;
        const parentHeight = this.$el.clientHeight || 200;

        const width = parentWidth - margin.left - margin.right;
        const height = parentHeight - margin.top - margin.bottom;

        const svg = d3.select(this.$el)
            .append('svg')
            .attr('width', parentWidth)
            .attr('height', parentHeight)
            .append('g');

        const x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
        const y = d3.scaleLinear().rangeRound([height, 0]);

        x.domain(this.data.map((d) => {
            return d.product;
        }));
        y.domain([0, d3.max(this.data, (d) => {
            return d.distance;
        })]);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        g.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        g.append('g')
            .attr('class', 'axis axis-y')
            .call(d3.axisLeft(y).ticks(5))
            .append('text')
            .attr('class', 'axis-label')
            .attr('transform', 'rotate(-90)')
            .attr('x', -height / 2)
            .attr('y', -40)
            .text('Distance');

        g.selectAll('.bar')
            .data(this.data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (d) => {
                return x(d.product) + ((x.bandwidth() - barWidth) / 2);
            })
            .attr('y', (d) => {
                console.log(y(d.distance));
                return y(d.distance);
            })
            .attr('width', barWidth)
            .attr('height', (d) => {
                return height - y(d.distance);
            });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import '../../assets/scss/app.scss';

    svg {

        border: 1px solid $secondary;

        .bar {
            fill: $secondary;

            &:hover {
                cursor: pointer;
                fill: $primary;
            }
        }

        .axis-label {
            fill: $primary;
            text-anchor: middle;
        }
    }
</style>
