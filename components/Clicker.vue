<template>
  <div class="section">
    <div class="columns">
      <div class="column">
        <button class="button is-primary is-large" @click="count++">Click me</button>
        <h1 class="is-size-1">{{displayCount}}</h1>
      </div>
      <div class="column">
        <upgrade
            v-for="(upgrade, index) in upgrades"
            :count="count"
            :cost="upgrade.cost"
            :increment="upgrade.increment"
            :key="index"
            :index="index"
            @upgrade="doUpgrade"></upgrade>
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
        {cost: 10, increment: 0.1},
        {cost: 100, increment: 1},
        {cost: 1000, increment: 10},
        {cost: 10000, increment: 100},
        {cost: 100000, increment: 1000},
        {cost: 1000000, increment: 10000},
      ]
    }
  },
  methods: {
    autoClick(){
      this.count+=this.perSecond;
    },
    doUpgrade({cost, increment, index}){
      this.perSecond+=increment;
      this.count-=cost;
      this.upgrades[index].cost =  Math.ceil(this.upgrades[index].cost + (this.upgrades[index].cost /10));
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