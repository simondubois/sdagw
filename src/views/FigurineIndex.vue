<template>

    <div class="container">

        <ul class="nav nav-pills justify-content-center mb-4">

            <li class="nav-item">
                <router-link
                    :class="force === 'good' ? 'bg-success' : 'text-success'"
                    :to="{ name: 'figurine-index', params: { force: 'good' } }"
                    class="nav-link"
                >
                    <fontawesome-icon icon="good" />
                    {{ $t('figurine.forces.good') }}
                </router-link>
            </li>

            <li class="nav-item">
                <router-link
                    :class="force === 'evil' ? 'bg-danger' : 'text-danger'"
                    :to="{ name: 'figurine-index', params: { force: 'evil' } }"
                    class="nav-link"
                >
                    <fontawesome-icon icon="evil" />
                    {{ $t('figurine.forces.evil') }}
                </router-link>
            </li>

        </ul>

        <region-card
            v-for="region in regions"
            :key="region"
            :force="force"
            :region="region"
            class="mb-4"
        />

    </div>

</template>



<script>

    export default {
        props: {
            force: {
                type: String,
                required: true,
            },
        },
        computed: {
            regions: vue => vue.$store.getters['figurine/regions'](vue.force),
        },
    }

</script>
