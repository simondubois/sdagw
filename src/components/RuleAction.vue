<template>

    <div
        v-if="showCard"
        class="card mb-3"
    >

        <div class="card-header bg-transparent border-0">
            <div class="card-title h3 m-0 text-truncate text-center">
                {{ $t('rule.actions.' + action) }}
            </div>
        </div>

        <ul class="list-group">
            <li
                v-for="instruction in instructions"
                :key="instruction.id"
                class="list-group-item p-0"
            >
                <rule-instruction :rule="instruction" />
            </li>
        </ul>

    </div>

    <rule-instruction
        v-else
        :rule="instructions[0]"
        class="mb-3"
    />

</template>



<script>

    export default {
        props: {
            action: {
                type: String,
                required: true,
            },
        },
        computed: {
            instructions: vue => vue.$store.getters['rule/instructions'](vue.action),
            showCard: vue => vue.instructions.length > 1,
        },
    }

</script>
