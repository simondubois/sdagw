<template>

    <span>
        <template v-for="(substring, index) in substrings">

            <fontawesome-icon
                v-if="icons.includes(substring)"
                :key="index"
                :icon="substring.slice(1, -1)"
                class="text-secondary"
            />

            <span
                v-else-if="stats.includes(substring)"
                :key="index"
                :icon="substring.slice(1, -1)"
                :class="'badge-' + context"
                class="badge"
            >
                {{ $t('figurine.stats.' + substring.slice(1, -1)) }}
            </span>

            <template v-else>
                {{ substring }}
            </template>

        </template>
    </span>

</template>



<script>

    export default {
        props: {
            context: {
                type: String,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
        },
        computed: {
            stats: () => [':fa:', ':mi:', ':wi:', ':wo:'],
            icons: () => [':courage:', ':dice:', ':figurine:', ':firstplayer:', ':moving:', ':shooting:', ':spell:', ':target:'],
            regex: vue => new RegExp('(' + vue.stats.join('|') + '|' + vue.icons.join('|') + ')'),
            substrings: vue => vue.text.split(vue.regex),
        },
    }

</script>
