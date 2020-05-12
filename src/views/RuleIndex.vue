<template>

    <div class="container">

        <ul class="nav nav-pills justify-content-center mb-4">
            <li
                v-for="p in ['all', ...allPhases]"
                :key="p"
                class="nav-item"
            >
                <router-link
                    :to="{ name: 'rule-index', params: { phase: p } }"
                    :class="p === phase ? 'bg-secondary' : 'text-secondary'"
                    class="nav-link"
                >

                    <fontawesome-icon :icon="p === 'all' ? 'rule' : p" />

                    <span class="d-none d-lg-inline">
                        {{ $t('rule.phases.' + p) }}
                    </span>

                </router-link>
            </li>
        </ul>

        <rule-phase
            v-for="p in visiblePhases"
            :key="p"
            :phase="p"
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
            allPhases: vue => vue.$store.getters['rule/phases'],
            visiblePhases: vue => vue.phase === 'all' ? vue.allPhases : [vue.phase],
        },
    }

</script>
