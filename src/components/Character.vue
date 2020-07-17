<template>
  <Card>
    <CardImage :src="character.image" />
    <CardBody>
      <div class="title">{{character.name}}</div>
      <ul class="list-detail">
        <li>
          <span class="label">Especie</span>
          {{character.species}}
        </li>
        <li>
          <span class="label">Genero</span>
          {{character.gender}}
        </li>
        <li>
          <span class="label">Origem</span>
          {{character.origin.name}}
        </li>
        <li>
          <span class="label">Status</span>
          {{character.status}}
        </li>
      </ul>
    </CardBody>
  </Card>
</template>

<script>

import Card from './card/Card';
import CardImage from './card/CardImage';
import CardBody from './card/CardBody';


export default {
  props: ['character'],
  components: {
    Card,
    CardImage,
    CardBody
  }
};
</script>

<style>
</style>