<template>
  <div class="section">
    <div class="columns">
      <div class="column">
        <button class="button is-primary is-large" @click="count++">Click me</button>
        <h1 class="is-size-1">{{displayCount}}</h1>
      </div>
      <div class="column">
        <upgrade
            :count="count"
            :cost="upgrades[0].cost"
            :increment="upgrades[0].increment"
            @upgrade="upgrade"></upgrade>
      </div>
    </div>
  </div>

</template>

<script>
import Upgrade from "./Upgrade";
export default {
  name: "Clicker",
  components: {Upgrade},
  mounted() {
    setInterval(this.autoClick,1000)
  },
  data(){
    return {
      count: 0,
      perSecond: 0,
      upgrades: [
        {cost: 10, increment: 0.1}
      ]
    }
  },
  methods: {
    autoClick(){
      this.count+=this.perSecond;
    },
    upgrade({cost, increment}){
      this.perSecond+=increment;
      this.count-=cost;
      this.upgrades[0].cost =  Math.ceil(this.upgrades[0].cost + (this.upgrades[0].cost /10));
    }
  },
  computed: {
    displayCount(){
      return Math.round(this.count)
    }
  }
}
</script>

<style scoped>

</style>