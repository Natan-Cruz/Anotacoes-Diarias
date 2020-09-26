<template>
    <div class="container-avatar">
        <img src="../../assets/pp.jpg" alt="Avatar">
    </div>
</template>

<script>
export default {
    name: "avatar-component"
}
</script>

<style lang="scss" scoped>
    .container-avatar{
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: solid 3px #fff;
        overflow: hidden;
        transition: 100ms;
        cursor: pointer;
        user-select: none;

        &:active{
            transform: scale(0.6);
        }

        img{
            width: 100%;
        }
    }
</style>