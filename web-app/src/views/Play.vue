<template>
    <div class="play" >
        <div id="viewport">
            <ul id="stack">
                <li v-for="(card, index) in swingCards" :key="card" class="card in-deck" :id="card.id" ref="cardRef">
                    <Card :card="card" :isCurrent="index===0"/>
                </li>
            </ul>
        </div>

               
    </div>
</template>

<script>
import Card from "../components/Card.vue"
const Swing = require("swing")
import { computed, onMounted, onUpdated, ref } from "vue";

export default {
    name: "Play",
    components: {Card},
    props:["id"],
    setup(){
    
        const cards = [{keyword: "hannes", title:"fisch", color:"blue",id:1, vote:false},{keyword: "friz", title:"fisch", color:"blue",id:2, vote:false},{keyword: "yobb", title:"fisch", color:"blue", id:3, vote:false}]
        const swingCards = ref([...cards])
        const stack = Swing.Stack();
        const cardRef = ref([])
        stack.on('throwout', function (e) {
            
            if(e){
                console.log(e.target.innerText || e.target.textContent, 'has been thrown out of the stack to the', e.throwDirection, 'direction.');
                swingCards.value.splice(swingCards.value.indexOf(swingCards.value.filter(fel => fel.id === e.target.id)))
                //swingCards.value.splice(cards.value.length-1,1)
                stack.destroyCard(e.target)

                if(e.throwDirection == Swing.Direction.RIGHT)
                cards[cards.indexOf(cards.filter(cel=> cel.id == e.target.id)[0])].vote = true
                console.log(cards)
            }

            
        });

         onMounted(()=> {
            var domEl = document.querySelectorAll("li.card"); 
            domEl.forEach(element => {
                stack.createCard(element)
            });
        });
          
         
//        stack.createCard(rcard.value)
        return {
            cardRef, swingCards
        }
    }
}
</script>

<style>


</style>