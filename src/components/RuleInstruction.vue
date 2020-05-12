<template>

    <div class="alert alert-dark bg-transparent my-0 border-0">

        <p :class="text[0] && rule.components.length ? 'mb-1' : 'mb-0'">

            <rule-figurines
                v-for="({ context: forceContext, figurines: forceFigurines, force }) in showFigurines ? forces : []"
                :key="force"
                :figurines="forceFigurines"
                :force="force"
                merge-armies
            >

                <span
                    slot="force"
                    :class="'badge-' + forceContext"
                    class="badge mr-1"
                >
                    <fontawesome-icon :icon="force" />
                </span>

                <span
                    slot="figurine"
                    slot-scope="{ figurine }"
                    :class="'badge-' + figurine.context"
                    class="badge mr-1"
                >

                    {{ $t('figurine.armies.' + figurine.army) }}

                    <template v-if="figurine.single === false">
                        {{ $t('figurine.variants.' + figurine.variant) }}
                    </template>

                </span>

            </rule-figurines>

            <!--
                <span
                    v-if="allSceneries"
                    class="badge badge-info mr-1"
                >
                    <fontawesome-icon icon="scenery" />
                </span>

                <span
                    v-for="scenery in sceneries"
                    v-else
                    :key="scenery.id"
                    class="badge badge-info mr-1"
                >
                    <fontawesome-icon icon="scenery" />
                    {{ $t('scenery.names.' + scenery.id) }}
                </span>
             -->

            <rule-text
                :context="context"
                :text="text[0]"
                class="font-weight-bold"
            />

            <b v-if="text[0] && text[1]">
                -
            </b>

            <rule-text
                :context="context"
                :text="text[1]"
            />

        </p>

        <div class="row">
            <component
                :is="component.component"
                v-for="(component, index) in rule.components"
                :key="index"
                :context="context"
                :forces="forces"
                :rule="{ ...rule, ...component }"
            />
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
            allSceneries: vue => vue.sceneries.length === vue.$store.getters['scenery/selected'].length,
            context: vue => {
                if (vue.forces[0].figurines.length && vue.forces[1].figurines.length === 0) {
                    return 'success'
                }
                if (vue.forces[0].figurines.length === 0 && vue.forces[1].figurines.length) {
                    return 'danger'
                }
                return 'secondary'
            },
            showFigurines: vue => vue.rule.figurines.length !== vue.$store.getters['figurine/selected'].length &&
                vue.rule.components.length === 0,
            forces: vue => [
                {
                    context: 'success',
                    figurines: vue.rule.figurines.filter(figurine => figurine.force === 'good'),
                    force: 'good',
                },
                {
                    context: 'danger',
                    figurines: vue.rule.figurines.filter(figurine => figurine.force === 'evil'),
                    force: 'evil',
                },
            ],
            sceneries: vue => vue.rule.sceneries || [],
            text: vue => vue.$te('rule.texts.' + vue.rule.id) ? vue.$t('rule.texts.' + vue.rule.id) : ['', ''],
        },
    }

</script>
