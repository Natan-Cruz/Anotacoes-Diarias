<template>
    <header>
        <menu-hamburger></menu-hamburger>
        <avatar-component></avatar-component>
    </header>
</template>

<script>
import menuHamburger from "./menuHamburgerComponent";
import avatarComponent from "./avatarComponent";

export default {
    name: "header-custom",
    components:{
        menuHamburger,
        avatarComponent
    }
}
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // background-color: var(--background);
        padding: 0 30px;
    }
</style>