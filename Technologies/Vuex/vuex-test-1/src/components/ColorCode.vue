<template>
  <div>
    <input
      placeholder="Enter color code"
      v-model="colorCode"
      type="text"
    />
  </div>
</template>
<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(newValue) {
        this.$store.dispatch('setColorCode', newValue)
      }
    }
  }
}
</script>