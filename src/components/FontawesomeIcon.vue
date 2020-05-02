<template>

    <i :class="classes" />

</template>



<script>

    const iconClasses = {
        // actions
        close: 'fa-times',
        create: 'fa-plus',
        delete: 'fa-trash',
        edit: 'fa-pen',
        help: 'fa-question-circle',
        next: 'fa-chevron-right',
        previous: 'fa-chevron-left',
        save: 'fa-save',
        sync: 'fa-sync',
        valid: 'fa-check',
        less: 'fa-minus',
        more: 'fa-plus',
        // entities
        one: 'fa-dice-one',
        two: 'fa-dice-two',
        three: 'fa-dice-three',
        four: 'fa-dice-four',
        five: 'fa-dice-five',
        six: 'fa-dice-six',
        courage: 'fa-angry',
        dice: 'fa-dice-d6',
        evil: 'fa-ghost',
        fighting: 'fa-shield-alt',
        figurine: 'fa-chess-knight',
        firstplayer: 'fa-crown',
        good: 'fa-dove',
        introduction: 'fa-clipboard-list',
        moving: 'fa-running',
        rule: 'fa-dice',
        scenario: 'fa-scroll',
        scenery: 'fa-tree',
        spell: 'fa-magic',
        shooting: 'fa-expand-arrows-alt',
        target: 'fa-crosshairs',
        value: 'fa-coins',
        wound: 'fa-skull-crossbones',
    }

    export default {
        props: {
            icon: {
                type: String,
                required: true,
                validator: icon => iconClasses[icon] !== undefined,
            },
            spin: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            classes: vue => ({
                fa: true,
                'fa-fw': true,
                'fa-sm': true,
                'fa-spin': vue.spin,
                [vue.iconClass]: true,
            }),
            iconClass: vue => iconClasses[vue.icon],
        },
    }

</script>



<style scoped>

    .fa-rotate-90.fa-flip-horizontal {
        transform: rotate(90deg) scaleY(-1);
    }

</style>
