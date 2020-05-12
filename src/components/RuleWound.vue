<template>

    <div class="col-lg">
        <table class="table text-center mb-0">

            <thead>
                <tr>

                    <th class="border-0" />

                    <th
                        v-for="defense in defenses"
                        :key="defense"
                        class="border-0"
                    >
                        <rule-figurines
                            v-for="(defendingContext, defendingForce) in forces"
                            :key="defendingForce"
                            :figurines="defenders(defense, defendingForce)"
                            :force="defendingForce"
                        >

                            <fontawesome-icon
                                slot="force"
                                :class="'text-' + defendingContext"
                                :icon="defendingForce"
                                class="fa-2x"
                            />

                            <img
                                slot="figurine"
                                slot-scope="{ figurine }"
                                :class="{ mount: figurine.variant === undefined }"
                                :src="figurine.img"
                                class="m-1"
                            >

                        </rule-figurines>
                    </th>

                </tr>
            </thead>

            <tbody>
                <tr
                    v-for="strength in strengths"
                    :key="strength"
                >

                    <td class="align-middle">
                        <rule-figurines
                            v-if="attackers(strength)[0] != strength"
                            :figurines="attackers(strength)"
                            :force="attackingForce"
                        >

                            <fontawesome-icon
                                slot="force"
                                :class="'text-' + attackingContext"
                                :icon="attackingForce"
                                class="fa-2x"
                            />

                            <img
                                slot="figurine"
                                slot-scope="{ figurine }"
                                :src="figurine.img"
                                class="m-1"
                            >

                        </rule-figurines>
                    </td>

                    <td
                        v-for="defense in defenses"
                        :key="strength + '-' + defense"
                        class="text-nowrap align-middle"
                    >

                        <fontawesome-icon
                            v-if="wounds[strength][defense] === null"
                            class="fa-2x text-muted"
                            icon="close"
                        />

                        <fontawesome-icon
                            v-for="(dice, index) in wounds[strength][defense]"
                            :key="index"
                            :class="'text-' + attackingContext"
                            :icon="dice"
                            class="fa-2x"
                        />

                    </td>

                </tr>
            </tbody>

        </table>
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
            attackingContext: vue => vue.isFight ? (vue.attackingForce === 'good' ? 'success' : 'danger') : 'secondary',
            attackingForce: vue => vue.isFight ? vue.rule.figurines[0].force : undefined,
            defenses: vue => new Array(vue.wounds[0].length)
                .fill(undefined)
                .map((value, index) => index + 1)
                .filter(index => vue.defenders(index).length),
            forces: () => ({
                good: 'success',
                evil: 'danger',
            }),
            isFight: vue => vue.rule.figurines.length &&
                vue.rule.figurines.length !== vue.$store.getters['figurine/selected'].length,
            strengths: vue => new Array(vue.wounds.length)
                .fill(undefined)
                .map((value, index) => index + 1)
                .filter(index => vue.attackers(index).length),
            wounds: () => [
                [['four'], ['five'], ['five'], ['six'], ['six'], ['six', 'four'], ['six', 'five'], ['six', 'six'], null, null],
                [['four'], ['four'], ['five'], ['five'], ['six'], ['six'], ['six', 'four'], ['six', 'five'], ['six', 'six'], null],
                [['three'], ['four'], ['four'], ['five'], ['five'], ['six'], ['six'], ['six', 'four'], ['six', 'five'], ['six', 'six']],
                [['three'], ['three'], ['four'], ['four'], ['five'], ['five'], ['six'], ['six'], ['six', 'four'], ['six', 'five']],
                [['three'], ['three'], ['three'], ['four'], ['four'], ['five'], ['five'], ['six'], ['six'], ['six', 'four']],
                [['three'], ['three'], ['three'], ['three'], ['four'], ['four'], ['five'], ['five'], ['six'], ['six']],
                [['three'], ['three'], ['three'], ['three'], ['three'], ['four'], ['four'], ['five'], ['five'], ['six']],
                [['three'], ['three'], ['three'], ['three'], ['three'], ['three'], ['four'], ['four'], ['five'], ['five']],
                [['three'], ['three'], ['three'], ['three'], ['three'], ['three'], ['three'], ['four'], ['four'], ['five']],
                [['three'], ['three'], ['three'], ['three'], ['three'], ['three'], ['three'], ['three'], ['four'], ['four']],
            ],
        },
        methods: {
            attackers (strength) {
                if (typeof this.rule.strength === 'function') {
                    return this.rule.figurines.filter(
                        figurine => Math.min(10, this.rule.strength(figurine)) === strength,
                    )
                }
                if (strength === this.rule.strength && this.isFight) {
                    return this.rule.figurines
                }
                return strength === this.rule.strength ? [strength] : []
            },
            defenders (defense, force) {
                const figurines = this.$store.getters['figurine/selected']
                    .filter(figurine => figurine.force !== this.attackingForce || this.isFight === false || this.rule.woundAllies)
                    .filter(figurine => force === undefined || figurine.force === force)
                const mounts = [...new Set(figurines.map(figurine => figurine.mount))]
                    .filter(mount => mount)
                    .map(mount => this.$store.getters['figurine/findMount'](mount))
                return [
                    ...figurines.filter(figurine => figurine.stats.de === defense),
                    ...mounts.filter(mount => mount.stats.de === defense),
                ]
            },
        },
    }

</script>



<style scoped>

    img {
        max-height: 50px;
        width: auto;
    }

    img.mount {
        opacity: 0.5;
    }

</style>
