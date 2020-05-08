<template>

    <div class="container">
        <scenario-card
            v-for="scenario in scenarios"
            :key="scenario.id"
            :scenario="scenario"
            class="mb-4"
        />
    </div>

</template>



<script>

    export default {
        computed: {
            scenarios: vue => vue.$store.getters['scenario/all'],
        },
    }

</script>
