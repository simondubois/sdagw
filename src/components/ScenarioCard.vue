<template>

    <div
        :class="{ selected }"
        class="card border-0"
    >
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

                        <div class="custom-control custom-switch">

                            <input
                                :id="'scenario-selector-' + scenario.id"
                                v-model="selected"
                                class="custom-control-input"
                                type="checkbox"
                            >

                            <label
                                :for="'scenario-selector-' + scenario.id"
                                class="custom-control-label"
                            />

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
        computed: {
            selected: {
                get: vue => vue.$store.getters['scenario/selected'] && vue.$store.getters['scenario/selected'].id === vue.scenario.id,
                set (value) {
                    if (value) {
                        this.$store.dispatch('scenario/select', this.scenario.id)
                    } else {
                        this.$store.dispatch('scenario/unselect')
                    }
                },
            },
        },
    }

</script>



<style scoped>

    img {
        opacity: 0.33;
        transition: ease 1s;
    }

    .selected img {
        opacity: 1;
    }

    .card-body {
        min-width: 0px;
    }

</style>
