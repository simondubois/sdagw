<template>

    <div class="d-flex flex-column h-100">

        <bs-navbar>

            <template slot="left">

                <li class="nav-item text-nowrap">
                    <router-link
                        :to="{ name: 'scenario-index' }"
                        class="nav-link"
                    >
                        <fontawesome-icon icon="scenario" />
                        <span class="d-none d-lg-inline">
                            {{ $t('scenario.index.title') }}
                        </span>
                    </router-link>
                </li>

                <li class="nav-item text-nowrap">
                    <router-link
                        :to="{ name: 'figurine' }"
                        class="nav-link"
                    >
                        <fontawesome-icon icon="figurine" />
                        <span class="d-none d-lg-inline">
                            {{ $t('figurine.index.title') }}
                        </span>
                    </router-link>
                </li>

                <li class="nav-item text-nowrap">
                    <router-link
                        :to="{ name: 'scenery-index' }"
                        class="nav-link"
                    >
                        <fontawesome-icon icon="scenery" />
                        <span class="d-none d-lg-inline">
                            {{ $t('scenery.index.title') }}
                        </span>
                    </router-link>
                </li>

            </template>

            <template slot="right">

                <li
                    v-if="scenario"
                    class="nav-item text-truncate"
                >
                    <span class="navbar-text text-secondary">
                        <fontawesome-icon icon="scenario" />
                        <span class="d-none d-sm-inline">
                            {{ $t('scenario.names.' + scenario.id) }}
                        </span>
                    </span>
                </li>

                <li class="nav-item text-nowrap">
                    <span class="navbar-text text-success">
                        <fontawesome-icon
                            class="d-none d-sm-inline"
                            icon="good"
                        />
                        {{ goodValue }}
                    </span>
                </li>

                <li class="nav-item text-nowrap">
                    <span class="navbar-text text-danger">
                        <fontawesome-icon
                            class="d-none d-sm-inline"
                            icon="evil"
                        />
                        {{ evilValue }}
                    </span>
                </li>

                <li class="nav-item text-nowrap">
                    <span class="navbar-text text-info">
                        <fontawesome-icon
                            class="d-none d-sm-inline"
                            icon="scenery"
                        />
                        {{ sceneryCount }}
                    </span>
                </li>

            </template>

        </bs-navbar>

        <transition
            mode="out-in"
            name="fade"
            appear
        >
            <router-view
                class="flex-grow-1 overflow-auto py-4"
                v-bind="[$route.params, $route.query]"
            />
        </transition>

    </div>

</template>



<script>

    export default {
        computed: {
            evilValue: vue => vue.$store.getters['figurine/selectionValue']('evil'),
            goodValue: vue => vue.$store.getters['figurine/selectionValue']('good'),
            scenario: vue => vue.$store.getters['scenario/selected'],
            sceneryCount: vue => vue.$store.getters['scenery/selected'].length,
        },
    }

</script>



<style lang="scss">

    $fa-font-path: '../node_modules/@fortawesome/fontawesome-free/webfonts';

    @import '../node_modules/@fortawesome/fontawesome-free/scss/fontawesome';
    @import '../node_modules/@fortawesome/fontawesome-free/scss/solid';
    @import '../node_modules/bootswatch/dist/journal/variables';
    @import '../node_modules/bootstrap/scss/bootstrap';
    @import '../node_modules/bootswatch/dist/journal/bootswatch';

    .navbar-nav {
        min-width: 0px;
    }

    .navbar-text {
        padding-left: $navbar-nav-link-padding-x;
        padding-right: $navbar-nav-link-padding-x;
    }

</style>
