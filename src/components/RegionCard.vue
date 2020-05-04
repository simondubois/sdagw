<template>

    <div class="card border-0">

        <div
            :class="['border-' + context, 'text-' + context]"
            class="card-header bg-transparent"
        >
            <div class="card-title h2 text-truncate">
                {{ $t('figurine.regions.' + region) }}
            </div>
        </div>

        <div class="card-body">
            <div class="card-columns">
                <army-card
                    v-for="army in armies"
                    :key="army"
                    :army="army"
                />
            </div>
        </div>

    </div>

</template>



<script>

    export default {
        props: {
            force: {
                type: String,
                required: true,
            },
            region: {
                type: String,
                required: true,
            },
        },
        computed: {
            armies: vue => vue.$store.getters['figurine/armies'](vue.region),
            context: vue => vue.force === 'good' ? 'success' : 'danger',
        },
    }

</script>



<style scoped>

    .card-columns {
        column-count: 1;
    }

    @media (min-width: 992px) {
        .card-columns {
            column-count: 2;
        }
    }


</style>
