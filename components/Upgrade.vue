<template>
  <button
      class="button is-warning is-large is-fullwidth"
      @click="$emit('upgrade', {increment: increment, cost: cost, index: index})"
      :disabled="count<cost"
  >Upgrade Cost:{{cost}}</button>
</template>

<script>
export default {
  name: "Upgrade",
  props: ['count', 'increment', 'cost', 'index']
}
</script>

<style scoped>

</style>