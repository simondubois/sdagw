<template>

    <div class="container">
        <div class="row justify-content-center">
            <div
                v-for="scenery in sceneries"
                :key="scenery.id"
                class="col-sm-6 col-lg-4 col-xl-3 mb-4"
            >
                <scenery-card :scenery="scenery" />
            </div>
        </div>
    </div>

</template>



<script>

    export default {
        computed: {
            sceneries: vue => vue.$store.getters['scenery/all'],
        },
    }

</script>
