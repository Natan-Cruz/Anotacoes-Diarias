<template>
    <li class="card" :id="`id${item._id}`">
        <div class="container-box-options">
            <div class="background-option" ref="background_box_options" @click="closeBoxOptions"></div>
            <span class="span-icon-table" @click="openBoxOptions">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13 16a3 3 0 106 0 3 3 0 00-6 0zM13 26a3 3 0 106 0 3 3 0 00-6 0zM13 6a3 3 0 106 0 3 3 0 00-6 0z" />
                    </svg>
            </span>
            <div class="content-box-options" ref="container_box_options" :data-id=item._id>
                <p class="option" @click="$emit('event-edit-note', item._id)">Editar</p>
                <p class="option" @click="$emit('event-delete-note', item._id)">Excluir</p>
            </div>
        </div>
        <router-link :to="toRedirectPath" class="content-card">
            <div class="header-card">
                <p class="title"> {{ item.title }} </p>
            </div>
            <div class="body-card">
                <p class="preview-text"> {{ item.text }} </p>
            </div>
        </router-link>
    </li>
</template>

<script>
export default {
    name: "card-component",
    props: {
        item: {
            type: Object
        }
    },
    computed:{
        toRedirectPath(){
            return `/editor/${this.item._id}`
        }
    },
    methods:{
        openBoxOptions(){
            this.$refs['background_box_options'].style.display = 'block';
            const containerBoxOptions = this.$refs['container_box_options']
            containerBoxOptions.style.width = "auto"
            containerBoxOptions.style.border = "var(--border-contrast)"
        },
        closeBoxOptions(){
            this.$refs['background_box_options'].style.display = 'none';
            const containerBoxOptions = this.$refs['container_box_options']
            containerBoxOptions.style.width = "0"
            containerBoxOptions.style.border = "none"
        }
    }
}
</script>

<style lang="scss" scoped>
    .card{
        width: 100%;
        height: 160px;
        background-color: var(--surface);
        box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.3);
        border-radius: 5px;
        padding: 10px;
        overflow: hidden;
        cursor: pointer;
        position: relative;
    }
    .remove-card{
        transform: scale(0);
        transition: 250ms;
    }

    // 
    .header-card{
        width: 100%;
        height: 30px;
    }
    .background-option{
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: 0.2);
        width: 100%;
        height: 100vh;
        display: none;
        z-index: 1000;
    }
        
    .container-box-options {
        position: absolute;
        top: 0;
        right: -5px;
        // z-index: 1000;
    }

    .span-icon-table {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: block;
        padding: 8px;
        transition: 150ms;
        cursor: pointer;
        &:active{
            transform: scale(.9);
        }
        svg {
            width: 24px;
            height: 24px;
            pointer-events: none;
            fill: var(--title);
        }
    }
    
    .content-box-options {
        width: 0;
        height: auto;
        position: absolute;
        right: 35px;
        top: 5px;
        background: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, .4);
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;
        white-space: nowrap;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        z-index: 2000;
        background-color: var(--surface);
        color: var(--title);
    }
    .option {
        padding: 10px;
        border-radius: 5px;
        transition: 100ms;
        font-size: 1.6em;
        &:active {
            color: #fff;
            background: rgb(154, 154, 154);
            transform: scale(.85)
        }
        &:hover {
            background: #eeeeee;
            color: #727272;
        }
    }
    // 
    .title{
        width: calc(100% - 17px);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 1.8em;
        color: var(--title-card);
        font-weight: bold;
    }

    .body-card{
        width: 100%;
        height: calc(100% - 30px);
        overflow: hidden;
    }
    .preview-text{
        font-size: 1.6em;
        color: var(--preview-text-card)
    }

    
    @media screen and (min-width:760px) {
        .card{
            max-width:300px
        }
    }
</style>