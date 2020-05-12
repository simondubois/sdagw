<template>

    <div class="card border-0 mb-4">

        <div class="card-header bg-transparent border-0">
            <div class="card-title h2 text-truncate text-center">
                <fontawesome-icon :icon="phase" />
                {{ $t('rule.phases.' + phase) }}
            </div>
        </div>

        <rule-action
            v-for="action in actions"
            :key="action"
            :action="action"
        />

    </div>

</template>



<script>

    export default {
        props: {
            phase: {
                type: String,
                required: true,
            },
        },
        computed: {
            actions: vue => vue.$store.getters['rule/actions'](vue.phase),
        },
    }

</script>
