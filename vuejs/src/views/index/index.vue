<template>
    <div>
        <vue-headful title="Suas anotações"></vue-headful>
        <header-custom></header-custom>
        <main>
            <wrapper-cards v-for="(note, i) in notes" :key="i" :title=note.title>
                <card-component v-for="item in note.items" :key="item._id" 
                    :item=item
                    @event-delete-note="deleteNote"
                    @event-edit-note="editNote"
                ></card-component>
            </wrapper-cards>
        </main>
    </div>
</template>

<script>
import headerCustom from "./headerCustom";
import wrapperCards from "./wrapperCardsComponent";
import cardComponent from "./cardComponent";

export default {
    nmae: "index",
    components:{
        headerCustom,
        wrapperCards,
        cardComponent
    },
    data(){
        return {
            notes: [
                {
                    title: "Hoje",
                    items:[
                        {
                            _id: "abc",
                            title: "Minha primeira nota",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut massa non neque hendrerit lobortis ut eu erat. Aenean tincidunt viverra arcu, sit amet maximus arcu fermentum nec. Cras ac condimentum elit, a ornare ex. Nam eu lacus nec magna aliquet ultricies. Ut justo felis, vestibulum ac neque in, commodo malesuada felis. Ut accumsan feugiat felis, sagittis ultricies urna bibendum ut. Nam laoreet nulla non massa pretium, sit amet mollis dui laoreet."
                        },
                        {
                            _id: "abcdasd",
                            title: "Minha segunda nota",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut massa non neque hendrerit lobortis ut eu erat. Aenean tincidunt viverra arcu, sit amet maximus arcu fermentum nec. Cras ac condimentum elit, a ornare ex. Nam eu lacus nec magna aliquet ultricies. Ut justo felis, vestibulum ac neque in, commodo malesuada felis. Ut accumsan feugiat felis, sagittis ultricies urna bibendum ut. Nam laoreet nulla non massa pretium, sit amet mollis dui laoreet."
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        deleteNote(note_id){
            console.log(note_id)
        },
        editNote(note_id){
            this.$router.push(`/editor/${note_id}`)
            console.log(note_id)
        }
    }
}
</script>

<style lang="scss" scoped>
    main{
        width: 90%;
        margin: 0 auto;
    }
</style>