<template>

    <div
        :class="['bg-' + secondaryContext]"
        class="border-0"
    >
        <div class="row no-gutters align-items-center justify-content-center">

            <div class="col-2 p-2">
                <img
                    :src="figurine.img"
                    class="card-img"
                >
            </div>

            <div class="col-11 col-sm-9 d-flex">
                <div class="card-body">

                    <div class="d-flex align-items-center">

                        <div
                            :class="'text-' + primaryContext"
                            class="card-title h4 flex-fill text-truncate"
                        >
                            {{ $t(figurine.single ? 'figurine.armies.' + figurine.army : 'figurine.variants.' + figurine.variant) }}
                        </div>

                        <small
                            :class="'badge-' + secondaryContext"
                            class="ml-2 badge"
                        >
                            <fontawesome-icon icon="value" />
                            {{ figurine.value }}
                        </small>

                    </div>

                    <span
                        v-for="equipment in figurine.equipments"
                        :key="equipment"
                        :class="'badge-' + secondaryContext"
                        class="badge mr-1 mb-1"
                    >
                        {{ $t('figurine.equipments.' + equipment) }}
                    </span>

                    <div class="d-flex">
                        <small
                            v-for="(value, key) in figurine.stats"
                            :key="key"
                            :class="{ 'border-right border-left': key === 'mo' }"
                            class="flex-fill border-dark text-center"
                        >
                            {{ $t('figurine.stats.' + key) }}<br>
                            {{ value || '' }}
                        </small>
                    </div>

                </div>
            </div>

            <div
                v-if="figurine.id"
                class="col-1 text-center"
            >

                <div
                    v-if="figurine.max === 1"
                    class="custom-control custom-switch"
                >

                    <input
                        :id="'figurine-figurine-selector-' + figurine.id"
                        v-model="selected"
                        class="custom-control-input"
                        type="checkbox"
                    >

                    <label
                        :for="'figurine-figurine-selector-' + figurine.id"
                        class="custom-control-label"
                    />

                </div>

                <div
                    v-else
                    class="btn-group-sm btn-group-vertical"
                >

                    <button
                        :class="'btn-' + secondaryContext"
                        :disabled="selected === figurine.max"
                        class="btn"
                        type="button"
                        @click="++selected"
                    >
                        <fontawesome-icon icon="more" />
                    </button>

                    <button
                        type="button"
                        :class="'btn-' + secondaryContext"
                        class="btn"
                        disabled
                    >
                        {{ selected }}
                    </button>

                    <button
                        :class="'btn-' + secondaryContext"
                        :disabled="selected === 0"
                        class="btn"
                        type="button"
                        @click="--selected"
                    >
                        <fontawesome-icon icon="less" />
                    </button>

                </div>

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
            primaryContext: vue => vue.selected ? 'light' : vue.figurine.context,
            secondaryContext: vue => vue.selected ? vue.figurine.context : 'light',
            selected: {
                get: vue => vue.$store.getters['figurine/selection/quantity'](vue.figurine.id),
                set (value) {
                    this.$store.dispatch('figurine/select', {
                        id: this.figurine.id,
                        quantity: parseInt(+value),
                    })
                },
            },
        },
    }

</script>



<style scoped>

    .d-flex {
        min-width: 0px;
    }

    .border-dark.border-right:last-child {
        border-right: none !important;
    }

</style>
