<template>
  <div id="app">
    <div class="main">
      <Navbar />
      <Searchbar />
      <div class="cards">
        <Character
          v-bind:character="character"
          v-for="character in characters"
          :key="character.id"
        />
      </div>
    </div>
    <Banner />
  </div>
</template>

<script>
import './assets/scss/style.scss';
import Character from './components/Character';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Banner from './components/Banner';

/**
Desenvolver um SPA utilizando VueJS e Apollo que usa como backend a API pública em GraphQL que contém dados sobre os
personagens e episódios do desenho Rick and Morty.
O SPA deve conter as seguintes funcionalidades:
Personagens
Lista de personagens com busca e ordenação
Informação do personagem contendo a localização de origem e os episódios nos quais participou
Episódios
Lista de episódios com busca e ordenação
Informação do episódio, contendo o nome, a data de exibição e os personagens que participaram
O projeto deve conter um Storybook (ou ferramenta equivalente) que expõe os componentes reutilizáveis utilizados durante o desenvolvimento.
O projeto deve conter testes automatizados.
 */

export default {
  name: 'App',
  components: {
    Character,
    Navbar,
    Searchbar,
    Banner
  },
  mounted() {
    this.$store.dispatch('getCharacters');
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    }
  }
};
</script>

<style lang="scss">
#app {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  height: calc(100% - 20px);
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  padding: 20px;

  .main,
  .rick-morty-content {
    flex: 1;
  }

  .rick-morty-content {
    margin-left: 40px;
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 72px;
      line-height: 98px;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.2);
    }

    p {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 19px;
      text-transform: uppercase;

      color: #ffffff;
    }

    img {
      width: 100%;
      height: 415px;
      border-radius: 5px;
    }
  }

  .main {
    .cards {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .card {
        &:nth-child(odd) {
          margin-right: 10px;
        }
        width: 259px;
        margin-bottom: 10px;
        .card-body {
          margin-left: 5px;

          .list-detail {
            margin-top: 2px;
          }
        }
      }

      @media (min-width: 694px) {
        .card {
          &:nth-child(odd) {
            margin-right: 10px;
          }
        }
      }

      @media (max-width: 1160px) {
        justify-content: center;
        .card {
          flex-basis: 100%;
          &:nth-child(odd) {
            margin-right: 0px;
          }
        }
      }
    }
  }
}
</style>
