<template>
    <div class="notes-container">
        <p class="title">{{ title }}</p>
        <ul class="list-items">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    name: "wrapper-cards",
    props:{
        title: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .title{
        font-size: 2.8em;
        margin: 0 0 20px 0;
        font-weight: bold;
        color: var(--title)
    }

    .list-items {
        width: 100%;
        margin: 0 auto;
        height: auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 200px));
        grid-template-rows: 210px;
        column-gap: 10px;
        row-gap: 10px;
        padding: 2px;
    }
    @media screen and (min-width:550px) {
        .list-items {
            grid-template-columns: repeat(auto-fill, minmax(160px, 200px));
            grid-template-rows: 220px;
            column-gap: 20px;
            row-gap: 20px;
        }
    }
</style>