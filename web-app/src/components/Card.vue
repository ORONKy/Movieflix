<template>
  <div class="card" :class="{isCurrent: isCurrent}">
        <div class="title-container">
      <h3 :class="card.Title">{{card.keyword}}</h3>
    </div>
    <img class="card-background" src="https://naturschutz.ch/wp-content/uploads/2016/12/Fisch-1068x580.jpg" alt="fisch" draggable="false">     
  </div>
</template>

<script>
export default {
    props: {
     card: {
       type: Object,
       required: true
     },isCurrent: {
       type: Boolean,
       required: true
     }
   }
}
</script>

<style>

</style>