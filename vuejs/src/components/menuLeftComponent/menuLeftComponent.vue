<template>
    <div class="menu-left">
        <div class="background-menu-left" @click="$emit('event-close-menu-left')"></div>
        <div class="content-menu-left">
           
        </div>
    </div>
</template>

<script>
export default {
    name: "menu-left-component"
}
</script>

<style lang="scss" scoped>

    .menu-left {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2000;
        display: none;
        opacity: 0;
        transition: 200ms;
    }

    .style-show-menu_left {
        display: block;
        opacity: 1;
    }

    .background-menu-left{
        width: 100%;
        height: 100vh;
        background-color:rgba(0, 0, 0, 0.2);
        position: fixed;
        top: 0;
        left: 0;
    }

    .content-menu-left {
        width: 80%;
        max-width: 400px;
        height: 100%;
        background-color: var(--surface) ;
        transform: translateX(-100%);
        transition: 200ms;
    }

    .style-show-content_menu_left {
        transform: translateX(0)
    }


</style>