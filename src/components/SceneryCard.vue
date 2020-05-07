<template>

    <div
        :class="{ selected }"
        class="card"
    >

        <img
            :src="scenery.img"
            class="card-img"
        >

        <label
            :class="['bg-' + secondaryContext, 'text-' + primaryContext]"
            class="card-img-overlay d-flex m-0 p-3 font-weight-bold border-0"
        >

            <div class="flex-fill card-title m-0 text-truncate">
                {{ $t('scenery.names.' + scenery.id) }}
            </div>

            <div class="custom-control custom-switch">

                <input
                    :id="'scenery-selector-' + scenery.id"
                    v-model="selected"
                    class="custom-control-input"
                    type="checkbox"
                >

                <label
                    :for="'scenery-selector-' + scenery.id"
                    class="custom-control-label"
                />

            </div>

        </label>

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
            primaryContext: vue => vue.selected ? 'light' : 'dark',
            secondaryContext: vue => vue.selected ? 'dark' : 'light',
            selected: {
                get: vue => vue.$store.getters['scenery/selection/quantity'](vue.scenery.id),
                set (value) {
                    this.$store.dispatch(value ? 'scenery/select' : 'scenery/unselect', this.scenery.id)
                },
            },
        },
    }

</script>



<style scoped>

    label {
        cursor: pointer;
    }

    img {
        filter: grayscale(100%);
    }

    .selected img {
        filter: none;
    }

    .card-img-overlay {
        top: auto;
        opacity: 75%;
    }

</style>
