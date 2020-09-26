<template>
    <div class="modal modal-avatar">
        <div class="background-modal" @click="$emit('event-close-modal')"></div>
        <div class="content-modal content-modal-avatar">
            <div class="row">
                <p class="font_normal">Tema</p>
                <select class="select-theme" v-model="theme" @change="changeTheme">
                    <option value="system">Padrão</option>
                    <option value="light">Claro</option>
                    <option value="dark">Escuro</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import { isDarkMode, toLight, toDark } from "../Theme.js";

export default {
    name:"modal-avatar-component",
    data(){
        return{
            theme: "system"
        }
    },
    created(){
        this.theme = localStorage.getItem("theme") || "system"
    },
    methods:{
        changeTheme(){
            switch(this.theme){
                case "light":
                    localStorage.setItem("theme", "light")
                    toLight()
                break
                case "dark":
                    localStorage.setItem("theme", "dark")
                    toDark()
                break
                case "system":
                    localStorage.setItem("theme", "system")
                    if(isDarkMode())
                        toDark()
                    else
                        toLight()
                break
                default:
                    localStorage.setItem("theme", "light")
                    toLight()
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .row{
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .select-theme{
        width: 100px;
        height: 40px;
        font-size: 1.7em;
        option{
            font-size: 1em;
        }
    }
</style>