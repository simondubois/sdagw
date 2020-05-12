<template>

    <span>

        <slot
            v-if="showForce"
            name="force"
        />

        <slot
            v-for="figurine in displayedFigurines"
            v-else
            name="figurine"
            :figurine="figurine"
        />

    </span>

</template>



<script>

    export default {
        props: {
            figurines: {
                type: Array,
                required: true,
            },
            force: {
                type: String,
                required: true,
            },
            mergeArmies: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            selectedFigurines: vue => vue.$store.getters['figurine/selected']
                .filter(figurine => figurine.force === vue.force),
            showForce: vue => vue.figurines.length && vue.figurines.length === vue.selectedFigurines.length,
            armies: vue => [
                ...new Set(vue.figurines.map(figurine => figurine.army)),
            ],
            completeArmies: vue => vue.armies.filter(
                army => vue.selectedFigurines.filter(figurine => figurine.army === army).length ===
                    vue.figurines.filter(figurine => figurine.army === army).length,
            ),
            displayedFigurines: vue => vue.mergeArmies ? vue.reducedFigurines : vue.figurines,
            reducedFigurines:
                vue => vue.figurines.reduce((figurines, figurine) => {
                    if (vue.completeArmies.includes(figurine.army) === false) {
                        figurines.push(figurine)
                    } else if (figurines.some(f => f.army === figurine.army) === false) {
                        figurines.push({ ...figurine, single: true })
                    }
                    return figurines
                }, []),
        },
    }

</script>
