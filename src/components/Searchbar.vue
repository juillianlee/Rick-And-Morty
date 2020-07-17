<template>
  <div class="searchbar">
    <input @keyup="search" type="text" placeholder="Digite para pesquisar" />
    <div class="select-filter-content">
      Ordenar por:
      <select>
        <option>Nome</option>
        <option>Status</option>
        <option>Episódios</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    search(event) {
      this.$store.dispatch('searchCharacters', {
        text: event.target.value
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.searchbar {
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 80px;
  width: 100%;
  height: 64px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  input {
    height: 100%;
    flex: 1 1 50%;
    margin-left: 24px;
    border: none;
    background: none;
    outline: none;

    &::placeholder {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
      color: #cacaca;
    }
  }

  .select-filter-content {
    flex: 1 1 50%;
    padding-left: 15px;
    margin-right: 24px;
    height: 100%;
    border-left: 1px solid #cacaca;

    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;

    color: #cacaca;

    display: flex;
    align-items: center;

    select {
      margin-left: 2px;
      border: none;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
      outline: none;
      flex: 1;

      color: #443939;
    }
  }
}
</style>