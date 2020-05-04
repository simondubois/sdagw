<template>

    <div class="d-flex flex-column h-100">

        <bs-navbar>
            <template slot="left">
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
