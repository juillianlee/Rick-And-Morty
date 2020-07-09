<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <span class="label">{{item.label}}</span> {{item.text}}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['items']
};
</script>

<style lang="scss">
</style>