<template>
    <div class="block">
        <h2>Create group</h2>
        <div v-if="groupCreated">
            <p>Group NR: <span class="link-mark-block">{{groupid}}</span></p>
            <p>Group Link <input readonly="true" type="text" class="group-link link-mark-block" ref="groupLinkRef" :value="groupLink" /><button @click="copyLink" class="button-black"><i class="far fa-clipboard"></i></button></p>
            <router-link class="play-btn" :to="{name: 'Play', params:{id: groupid}}">Play</router-link>
        </div>
        <div v-else>
        <button class="play-btn" @click="createGroup">Create Gropup</button>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import createNewGroup from '../../composables/groupController.js'

export default {
    props: ["groupCreated", "groupid"]
    /* {
        groupid: Object,
        groupCreated:Object
    } */,
    setup(props, {emit}){
    const groupLinkRef = ref(null)

    const groupLink = computed(()=>"localhost/play/group-"+props.groupid)

    const createGroup =()=>{
        console.log("in")
        emit('groupCreated')
        console.log(props.groupCreated)
        emit("updateGroupId",createNewGroup())
        console.log(props.groupid)
    }

    

    const copyLink = () =>{
      //try with param
      var link=groupLinkRef.value
      link.select()
      document.execCommand('copy')
    }

    return{
        groupLinkRef, groupLink, createGroup, copyLink
    }
    }
}
</script>

<style>

</style>