<template>

    <div class="col-lg">
        <div class="card mb-2 border-info">

            <div class="card-header bg-info text-light">
                <div class="card-title h3 text-truncate text-center">
                    <fontawesome-icon icon="scenery" />
                    {{ $t('scenery.index.title') }}
                </div>
            </div>

            <div class="card-body text-center">
                <img
                    v-for="scenery in sceneries"
                    :key="scenery.id"
                    :src="scenery.img"
                    class="img-fluid m-1"
                >
            </div>

        </div>
    </div>

</template>



<script>

    export default {
        props: {
            rule: {
                type: Object,
                required: true,
            },
        },
        computed: {
            sceneries: vue => vue.$store.getters['scenery/selected'],
        },
    }

</script>



<style scoped>

    img {
        max-height: 100px;
        width: auto;
    }

</style>
