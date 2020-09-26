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

import pouch from "@/components/database.js";
import dayjs from "dayjs"
import updateLocale from "dayjs/plugin/updateLocale";
import relativeTime from 'dayjs/plugin/relativeTime';

export default {
    nmae: "index",
    components:{
        headerCustom,
        wrapperCards,
        cardComponent
    },
    data(){
        return {
            notes: []
        }
    },
    created(){
        // pouch.put({
        //     _id: "d",
        //     title: "Minha terceira nota",
        //     createdAt: 1601038214330,
        //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut massa non neque hendrerit lobortis ut eu erat. Aenean tincidunt viverra arcu, sit amet maximus arcu fermentum nec. Cras ac condimentum elit, a ornare ex. Nam eu lacus nec magna aliquet ultricies. Ut justo felis, vestibulum ac neque in, commodo malesuada felis. Ut accumsan feugiat felis, sagittis ultricies urna bibendum ut. Nam laoreet nulla non massa pretium, sit amet mollis dui laoreet."
        // })
        // console.log(moment(1601135804787).fromNow("dd"))
        dayjs.extend(relativeTime)

        dayjs.extend(updateLocale)
        dayjs.updateLocale('en', {
            relativeTime: {
                future: "in %s",
                past: "%s",
                s: 'Há pouco tempo',
                m: "Há pouco tempo",
                mm: "Há pouco tempo",
                h: "Há pouco tempo",
                hh: "Há %d horas",
                d: "Há um dia",
                dd: "Há %d dias",
                M: "Há um mês",
                MM: "Há %d meses",
                y: "Há um ano",
                yy: "Há %d anos"
            }
        })

        let notes = []
        pouch.find({
            selector:{
                title: {$gte: null}
            }
        })
        .then( ({ docs }) => {
            let d = docs.map( doc => {
                doc.group_title = dayjs(doc.createdAt).fromNow()
                return doc
            })
            console.log(d)
            this.notes = this.groupBy(d)

            console.log(notes)
        })
    },
    methods:{
        async deleteNote(note_id){
            try {            
                const doc = await pouch.get(note_id)

                await pouch.remove(doc);

                const node = document.querySelector(`#id${note_id}`)
                
                node.classList.add("remove-card")
                setTimeout(() => {
                    node.style.display = 'none'
                }, 250);
                
            } catch (error) {
                console.error(error)    
            }
            // pouch.remove(note_id)
        },
        editNote(note_id){
            this.$router.push(`/editor/${note_id}`)
            console.log(note_id)
        },
        groupBy(lista) {
            const resultado = [];
            lista.forEach(function(item) {
                let i = null
                resultado.forEach(itm => {
                    if (item['group_title'] === itm['title'])
                        i = itm
                })
                if (!i) {
                    resultado.push({
                        title: item.group_title,
                        items:[{
                            _id: item._id,
                            createdAt: item.createdAt,
                            title: item.title,
                            text: item.text
                        }]
                    })
                } else
                    i.items.push({
                         _id: item._id,
                        createdAt: item.createdAt,
                        title: item.title,
                        text: item.text
                    })
            });

            return resultado;
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