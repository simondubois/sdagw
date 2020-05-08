<template>

    <div class="card border-0 text-info">
        <div class="row no-gutters align-items-center">

            <div class="col-4 offset-4 offset-lg-0">
                <img
                    :src="scenario.img"
                    class="card-img m-auto"
                >
            </div>

            <div class="col-12 col-lg-8 border-0">
                <div class="card-body">

                    <div class="h2 card-title d-flex text-truncate">
                        <div class="flex-fill">
                            {{ $t('scenario.names.' + scenario.id) }}
                        </div>
                    </div>

                    <scenario-items
                        :items="scenario.figurines.filter(figurine => figurine.force === 'good')"
                        icon="good"
                        context="success"
                    />

                    <scenario-items
                        :items="scenario.figurines.filter(figurine => figurine.force === 'evil')"
                        icon="evil"
                        context="danger"
                    />

                    <scenario-items
                        :items="scenario.sceneries"
                        icon="scenery"
                        context="secondary"
                    />

                </div>
            </div>

        </div>
    </div>

</template>



<script>

    export default {
        props: {
            scenario: {
                type: Object,
                required: true,
            },
        },
    }

</script>



<style scoped>

    img {
        opacity: 0.33;
        transition: ease 1s;
    }

    .card-body {
        min-width: 0px;
    }

</style>
