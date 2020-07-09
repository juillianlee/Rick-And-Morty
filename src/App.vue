<template>
  <div id="app">
    <div class="main">
      <Navbar />
      <Searchbar />
      <div class="cards">
        <Card>
          <CardImage v-bind:src="'https://rickandmortyapi.com/api/character/avatar/1.jpeg'" />
          <CardBody>
            <div class="title">Rick Sanchez</div>
            <CardListItem v-bind:items="items" />
          </CardBody>
        </Card>
      </div>
    </div>
    <div class="rick-morty-content">
      <img src="./assets/bg-rick-and-morty.png" />
      <h1>RICK AND MORTY</h1>
      <p>Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto Morty, um adolescente não tão brilhante quanto o avô.</p>
    </div>
  </div>
</template>

<script>
import './assets/scss/style.scss';
import Card from './components/Card';
import CardImage from './components/CardImage';
import CardBody from './components/CardBody';
import CardListItem from './components/CardListItem';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

export default {
  name: 'App',
  components: {
    Card,
    CardImage,
    CardBody,
    Navbar,
    Searchbar,
    CardListItem
  },
  data() {
    return {
      items: [
        {
          label: 'Especie',
          text: 'Human'
        },
        {
          label: 'Genero',
          text: 'Male'
        },
        {
          label: 'Origem',
          text: 'Earth (C-137)'
        },
        {
          label: 'Status',
          text: 'Alive'
        },
        {
          label: 'Episódios',
          text: '34'
        }
      ]
    };
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
        width: 259px;
        margin-bottom: 10px;
        .card-body {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
