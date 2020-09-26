<template>
    <div >
        <avatar-btn-component @event-open-modal=openModal></avatar-btn-component>
        <modal-avatar-component @event-close-modal=closeModal></modal-avatar-component>
    </div>
</template>

<script>
import avatarBtnComponent from "./avatarComponent";
import modalAvatarComponent from "./modalAvatarComponent";

export default {
    name:"avatar-component",
    components:{
        avatarBtnComponent,
        modalAvatarComponent
    },
    methods:{
        openModal(){
             const modal = document.querySelector('.modal-avatar'),
                content = document.querySelector(".content-modal-avatar");

            modal.classList.add('display-modal_flex');
            setTimeout(() => {
                requestAnimationFrame(() => {
                    content.classList.add('show-content-modal')
                    modal.classList.add('show-modal')
                    document.querySelector('html').style.overflow = 'hidden'
                })
            }, 50);
        },
        closeModal(){
            const modal = document.querySelector('.modal-avatar'),
                content = document.querySelector(".content-modal-avatar");

            requestAnimationFrame(() => {
                content.classList.remove('show-content-modal');
                modal.classList.remove('show-modal')
                document.querySelector('html').style.overflow = 'auto'
            })
            setTimeout(() => {
                modal.classList.remove('display-modal_flex')
            }, 200)            
        }
    }
   
}
</script>
<style lang="scss" scoped>
    
</style>