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
    .notes-container{
        margin-bottom: 20px;
    }
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
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-template-rows: 160px;
        column-gap: 15px;
        row-gap: 15px;
        padding: 2px;
    }
    // @media screen and (min-width:550px) {
    //     .list-items {
    //         grid-template-columns: repeat(auto-fill, minmax(140px, 200px));
    //         column-gap: 20px;
    //         row-gap: 20px;
    //     }
    // }
</style>