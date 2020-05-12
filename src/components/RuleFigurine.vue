<template>

    <div
        :class="'text-' + figurine.context"
        class="d-flex align-items-center p-1 text-nowrap small"
    >

        <img
            :src="figurine.img"
            class="img-fluid mr-1"
        >

        <div>

            <div
                v-if="figurine.quantity > 1 && uniqueEquipments.length === 0"
                class="text-center"
            >
                x{{ figurine.quantity }}
            </div>

            <div
                v-for="value in range(figurine.quantity)"
                :key="value"
            >
                <span
                    v-for="equipment in uniqueEquipments"
                    :key="equipment"
                    :class="'badge-' + figurine.context"
                    class="badge mx-1"
                >
                    {{ $t('figurine.equipments.' + equipment) }}
                </span>

            </div>

            <div v-if="figurine.stats.wo > 1">

                <span
                    :class="'badge-' + figurine.context"
                    class="badge"
                >
                    {{ $t('figurine.stats.wo') }}
                </span>

                <span
                    v-for="value in range(figurine.stats.wo)"
                    :key="value"
                    class="badge badge-default ml-1"
                >
                    {{ value }}
                </span>

            </div>

            <div v-if="figurine.stats.mi">

                <span
                    :class="'badge-' + figurine.context"
                    class="badge"
                >
                    {{ $t('figurine.stats.mi') }}
                </span>

                <span
                    v-for="value in range(figurine.stats.mi)"
                    :key="value"
                    class="badge badge-default ml-1"
                >
                    {{ value }}
                </span>

            </div>

            <div v-if="figurine.stats.wi">

                <span
                    :class="'badge-' + figurine.context"
                    class="badge"
                >
                    {{ $t('figurine.stats.wi') }}
                </span>

                <span
                    v-for="value in range(figurine.stats.wi)"
                    :key="value"
                    class="badge badge-default ml-1"
                >
                    {{ value }}
                </span>

            </div>

            <div v-if="figurine.stats.fa">

                <span
                    :class="'badge-' + figurine.context"
                    class="badge"
                >
                    {{ $t('figurine.stats.fa') }}
                </span>

                <span
                    v-for="value in range(figurine.stats.fa)"
                    :key="value"
                    class="badge badge-default ml-1"
                >
                    {{ value }}
                </span>

            </div>

        </div>

    </div>

</template>



<script>

    export default {
        props: {
            figurine: {
                type: Object,
                required: true,
            },
        },
        computed: {
            uniqueEquipments: vue => vue.figurine.equipments.filter(
                equipment => ['javelin', 'throwing-axe'].includes(equipment),
            ),
        },
        methods: {
            range: max => new Array(max).fill(undefined).map((value, index) => index + 1),
        },
    }

</script>



<style scoped>

    img {
        max-height: 75px;
        width: auto;
    }

</style>
