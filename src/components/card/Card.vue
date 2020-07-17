<template>
  <div class="card"><slot></slot></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card {
  background: #e8c59c;
  box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 100%;
  padding: 8px;
  display: flex;
  cursor: pointer;

  &:hover {
    background: #e6b882;
  }
}
</style>