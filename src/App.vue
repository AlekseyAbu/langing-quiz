<template>
<div id="app">
    <MainMobile v-if="$root.isMobile"/>
    <MainDesktop v-else/>
<!--    <Modal />-->
</div>
</template>

<script>

import MainDesktop from "./components/Main/MainDesktop";
import MainMobile from "./components/Main/MainMobile";
import Modal from "./components/Modal";
export default {
    name: 'App',
    components: {
        Modal,
        MainMobile,
        MainDesktop
    }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}
</style>
