<template>
  <ul class="navbar">
    <li class="active">Personsagens</li>
    <li>Episódios</li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    cursor: pointer;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;
    text-transform: uppercase;
    color: #443939;
    &.active,
    &:hover {
      color: #ba9e7d;
    }
  }
}
</style>