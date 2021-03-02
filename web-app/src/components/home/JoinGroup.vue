<template>
    <div class="block" v-if="!groupCreated">
        <h2>Join Group</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti libero officiis possimus ipsum quibusdam neque, saepe, eum odit vitae voluptate illum repellendus facere, voluptas tempora. Officiis blanditiis itaque omnis!</p>
        <input class="input-black" type="text" v-model="groupid" placeholder="Group number" />
        <router-link class="play-btn" :to="{name: 'Play', params:{id: groupid}}">Play</router-link>
    </div>
</template>

<script>
export default {
    props: ["groupCreated", "groupid"],
    setup(){
        
    }
}
</script>

<style>

</style>