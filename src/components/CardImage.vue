<template>
  <img class="card-image" v-bind:src="src" />
</template>

<script>
export default {
  props: ["src"]
};
</script>

<style>
.card-image {
  border-radius: 5px;
  width: 84px;
  height: 100%;
}
</style>