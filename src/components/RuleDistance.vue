<template>

    <div class="col-12">
        <template v-for="distance in distances">
            <div
                v-for="({ context, figurines, force }) in forcesForDistance(distance)"
                :key="distance + '-' + force"
                class="row align-items-center mb-1"
            >

                <div class="col-6 col-lg-4 text-right">
                    <rule-figurines
                        :figurines="figurines"
                        :force="force"
                    >

                        <fontawesome-icon
                            slot="force"
                            :class="'text-' + context"
                            :icon="force"
                            class="fa-2x"
                        />

                        <img
                            slot="figurine"
                            slot-scope="{ figurine }"
                            :src="figurine.img"
                            class="m-1"
                        >

                    </rule-figurines>
                </div>

                <div class="col-6 col-lg-8">
                    <div class="progress">
                        <div
                            :class="'bg-' + context"
                            :style="{ 'width': width(distance) + '%' }"
                            class="progress-bar font-weight-bold"
                        >
                            {{ distance }}
                        </div>
                    </div>
                </div>

            </div>
        </template>
    </div>

</template>



<script>

    export default {
        props: {
            forces: {
                type: Array,
                required: true,
            },
            rule: {
                type: Object,
                required: true,
            },
        },
        computed: {
            distances: vue => [
                ...new Set(vue.forces.map(force => force.figurines).flat(1).map(vue.rule.distance)),
            ].sort((a, b) => a - b),
        },
        methods: {
            forcesForDistance (distance) {
                return this.forces
                    .map(({ figurines, ...force }) => ({
                        ...force,
                        figurines: figurines.filter(figurine => this.rule.distance(figurine) === distance),
                    }))
                    .filter(({ figurines }) => figurines.length)
            },
            width (distance) {
                return distance / Math.max(...this.distances) * 100
            },
        },
    }

</script>



<style scoped>

    img {
        max-height: 50px;
        width: auto;
    }

</style>
