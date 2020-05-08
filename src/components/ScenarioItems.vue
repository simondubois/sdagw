<template>

    <div
        :class="'text-' + context"
        class="d-flex justify-content-start"
    >

        <div class="align-self-center m-1">
            <fontawesome-icon
                :icon="icon"
                class="fa-2x"
            />
        </div>

        <div class="d-flex flex-wrap">
            <div
                v-for="item in items"
                :key="item.id"
                class="text-nowrap m-1"
            >

                <img
                    :src="item.img"
                    class="img-fluid"
                >

                <small v-if="item.quantity > 1">
                    x{{ item.quantity }}
                </small>

            </div>
        </div>

    </div>

</template>



<script>

    export default {
        props: {
            items: {
                type: Array,
                required: true,
            },
            context: {
                type: String,
                required: true,
            },
            icon: {
                type: String,
                required: true,
            },
        },
    }

</script>



<style scoped>

    img {
        max-height: 75px;
        width: auto;
    }

</style>
