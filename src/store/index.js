import Vuex from 'vuex';
import Vue from 'vue';
import { fetchCharacters } from '../api/characters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
  },

  getters: {},

  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
  },

  actions: {
    async getCharacters(context) {
      const { data } = await fetchCharacters();

      const characters = data.characters.results;
      context.commit('setCharacters', characters);
    },
    async searchCharacters(context, filter) {
      let { text, direction } = filter;
      direction = direction || 'ASC';

      const { data } = await fetchCharacters();

      let characters = data.characters.results;
      if (text) {
        characters = characters.filter((character) => {
          return character.name.toLowerCase().indexOf(text.toLowerCase()) >= 0;
        });
      }

      characters.sort((c1, c2) => {
        const name1 = c1.name.toUpperCase();
        const name2 = c2.name.toUpperCase();
        return name1 < name2 ? -1 : name1 > name2 ? 1 : 0;
      });

      // TODO fazer isso antes pois posso filtrar uma lista menor
      characters = direction === 'ASC' ? characters : characters.reverse();

      context.commit('setCharacters', characters);
    },
  },
});
