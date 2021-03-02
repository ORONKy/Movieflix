<template>
  <div class="home">
    <h1>Tinderflix</h1>
    <div class="block">
      <h2>How to Play</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime rerum dignissimos, aliquid maiores accusamus deserunt corporis, aperiam porro beatae illo odio totam dolor iure error vero voluptate, autem laudantium tempora!</p>
    </div>
    <JoinGroup :groupCreated="groupCreated" :groupid="groupid"/>

    <CreateGroup :groupCreated="groupCreated" :groupid="groupid" @groupCreated="groupCreated=true" @updateGroupId="setGroupid" />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import JoinGroup from '../components/home/JoinGroup.vue'
import CreateGroup from '../components/home/CreateGroup.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {JoinGroup, CreateGroup},
  setup(){
    const groupid = ref(null)
    const groupCreated = ref(false)

    const setGroupid = (id) => {
      groupid.value=id
    }

    return {groupid, groupCreated, setGroupid}
  }
}
</script>

<style>

</style>
