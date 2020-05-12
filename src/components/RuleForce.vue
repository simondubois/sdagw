<template>

    <div class="col-lg d-flex">
        <div
            :class="'border-' + context"
            class="card mb-2 w-100"
        >

            <div
                :class="'bg-' + context"
                class="card-header text-light"
            >
                <div class="card-title h3 text-truncate text-center">
                    <fontawesome-icon :icon="force" />
                    {{ $t('rule.texts.' + rule.action + '-' + force) }}
                </div>
            </div>

            <div class="card-body d-flex flex-wrap align-content-start justify-content-center">
                <rule-figurine
                    v-for="figurine in rule.figurines"
                    :key="figurine.id"
                    :figurine="figurine"
                    class="m-1"
                />
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
            context: vue => vue.force === 'good' ? 'success' : 'danger',
            force: vue => vue.rule.figurines[0].force,
        },
    }

</script>
