<template>

    <div class="col text-center">

        <div class="mb-1">
            <fontawesome-icon
                v-for="dice in rule.dices"
                :key="dice"
                :class="'text-' + context"
                :icon="dice"
                class="fa-2x"
            />
        </div>

        <div
            v-if="event || effect"
            class="mb-1"
        >

            <div
                v-if="event"
                class="font-italic"
            >
                {{ event }}
            </div>

            <rule-text
                v-if="effect"
                class="small"
                :context="context"
                :text="'(' + effect + ')'"
            />

        </div>

        <rule-figurines
            v-for="({ context: forceContext, figurines: forceFigurines }, force) in forces"
            :key="force"
            :figurines="forceFigurines"
            :force="force"
            merge-armies
        >

            <fontawesome-icon
                slot="force"
                :class="'text-' + forceContext"
                :icon="force"
                class="fa-2x"
            />

            <img
                slot="figurine"
                slot-scope="{ figurine }"
                :src="figurine.img"
                class="m-1"
            >

        </rule-figurines>

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
            context: vue => {
                if (vue.goodFigurines.length && vue.evilFigurines.length === 0) {
                    return 'success'
                }
                if (vue.goodFigurines.length === 0 && vue.evilFigurines.length) {
                    return 'danger'
                }
                return 'secondary'
            },
            effect: vue => vue.$te('rule.dices.' + vue.rule.id + '.' + vue.rule.dices[0] + '.effect')
                ? vue.$t('rule.dices.' + vue.rule.id + '.' + vue.rule.dices[0] + '.effect') : '',
            event: vue => vue.$te('rule.dices.' + vue.rule.id + '.' + vue.rule.dices[0] + '.event')
                ? vue.$t('rule.dices.' + vue.rule.id + '.' + vue.rule.dices[0] + '.event') : '',
            evilFigurines: vue => vue.figurines.filter(figurine => figurine.force === 'evil'),
            figurines: vue => vue.rule.figurines.length === vue.$store.getters['figurine/selected'].length
                ? [] : vue.rule.figurines,
            forces: vue => ({
                good: {
                    context: 'success',
                    figurines: vue.goodFigurines || [],
                },
                evil: {
                    context: 'danger',
                    figurines: vue.evilFigurines || [],
                },
            }),
            goodFigurines: vue => vue.figurines.filter(figurine => figurine.force === 'good'),
        },
    }

</script>



<style scoped>

    img {
        max-height: 50px;
        width: auto;
    }

</style>
