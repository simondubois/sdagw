<template>

    <div
        :class="figurines.length === 1 ? 'border-0' : 'border-' + figurines[0].context"
        class="card"
    >

        <div
            v-if="figurines.length > 1"
            class="card-header border-0 bg-transparent"
            :class="'text-' + figurines[0].context"
        >
            <div class="card-title h3 text-truncate text-center">
                {{ $t('figurine.armies.' + figurines[0].army) }}
            </div>
        </div>

        <figurine-card
            v-for="figurine in figurines"
            :key="figurine.id"
            :figurine="figurine"
        />

    </div>

</template>



<script>

    export default {
        props: {
            army: {
                type: String,
                required: true,
            },
        },
        computed: {
            figurines: vue => vue.$store.getters['figurine/inArmy'](vue.army),
        },
    }

</script>
