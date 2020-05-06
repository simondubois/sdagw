<template>

    <div class="card">

        <img
            :src="scenery.img"
            class="card-img"
        >

        <div
            :class="['bg-' + secondaryContext, 'text-' + primaryContext]"
            class="card-img-overlay d-flex m-0 p-3 font-weight-bold border-0"
        >
            <div class="flex-fill card-title m-0 text-truncate">
                {{ $t('scenery.names.' + scenery.id) }}
            </div>
        </div>

    </div>

</template>



<script>

    export default {
        props: {
            scenery: {
                type: Object,
                required: true,
            },
        },
        computed: {
            primaryContext: vue => 'dark',
            secondaryContext: vue => 'light',
        },
    }

</script>



<style scoped>

    img {
        filter: grayscale(100%);
    }

    .card-img-overlay {
        top: auto;
        opacity: 75%;
    }

</style>
