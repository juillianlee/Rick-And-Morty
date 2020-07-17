<template>
  <div class="card-body">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card-body {
  width: 100%;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 13px;
  .title {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #ffffff;
  }
}
</style>