<template>
    <div class="container-menu-left">
        <menu-hamburger @event-open-menu-left="openMenuLeft"></menu-hamburger>
        <menu-left-component @event-close-menu-left=closeMenuLeft></menu-left-component>
    </div>
</template>

<script>
import menuHamburger from './menuHamburgerComponent';
import menuLeftComponent from "./menuLeftComponent";

export default {
    name: 'menu-left',
    components:{
        menuHamburger,
        menuLeftComponent
    },
    methods:{
        openMenuLeft(){

            const menuLeft = document.querySelector('.menu-left'),
                contentMenuLeft = document.querySelector('.content-menu-left');

            menuLeft.style.display = 'block';
            document.body.style.overflow = "hidden"
            setTimeout(() => {
                requestAnimationFrame(function() {
                    contentMenuLeft.style.transform = "translateX(0)";
                    menuLeft.style.opacity = '1';
                    document.querySelector('html').style.overflow = 'hidden'
                })
            }, 50);
        },
        closeMenuLeft(){
            const menuLeft = document.querySelector('.menu-left'),
                contentMenuLeft = document.querySelector('.content-menu-left');

            requestAnimationFrame(function() {
                contentMenuLeft.style.transform = "translateX(-100%)";
                menuLeft.style.opacity = '0';
                document.querySelector('html').style.overflow = 'auto'
            })
            setTimeout(() => {
                menuLeft.style.display = 'none'
            }, 100);
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>