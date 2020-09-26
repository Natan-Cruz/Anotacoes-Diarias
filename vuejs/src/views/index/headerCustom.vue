<template>
    <header>
        <menu-left></menu-left>
        <avatar-component></avatar-component>
    </header>
</template>

<script>
import menuLeft from "../../components/menuLeftComponent/index";
import avatarComponent from "../../components/avatarComponent/index";

export default {
    name: "header-custom",
    components:{
        menuLeft,
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