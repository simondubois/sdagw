<template>

    <div :class="{ 'sticky-top': $route.meta.stickyHeader }">

        <nav class="navbar navbar-dark bg-dark">
            <div class="container navbar-expand flex-nowrap overflow-hidden">

                <router-link
                    class="navbar-brand d-none d-sm-inline"
                    to="/"
                >
                    <img
                        src="/logo-large.png"
                        width="30"
                        height="30"
                    >
                </router-link>

                <ul
                    v-if="$slots.left"
                    class="navbar-nav"
                >
                    <slot name="left" />
                </ul>

                <ul
                    v-if="$slots.center"
                    class="navbar-nav justify-content-around"
                >
                    <slot name="center" />
                </ul>

                <ul
                    v-if="$slots.right"
                    class="navbar-nav justify-content-end"
                >
                    <slot name="right" />
                </ul>

            </div>
        </nav>

        <slot name="outside" />

    </div>

</template>



<style scoped>

    .navbar-nav {
        flex-grow: 1;
        flex-basis: 0;
    }

</style>
