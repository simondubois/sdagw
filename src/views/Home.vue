<template>

    <div class="home">

        <img
            alt="Vue logo"
            src="../assets/logo.png"
        >

        <hello-world msg="Welcome to Your Vue.js App" />

    </div>

</template>



<script>

    export default {
        components: {
            HelloWorld: require('@/components/HelloWorld.vue').default,
        },
    }

</script>
