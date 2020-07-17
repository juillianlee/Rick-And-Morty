import gql from 'graphql-tag';
import { apolloClient } from '../vue-apollo';

export function totalCharacters() {
  const GET_TOTAL = gql`
    {
      characters {
        info {
          count
        }
      }
    }
  `;

  return apolloClient.query({
    query: GET_TOTAL,
  });
}

export function fetchCharacters() {



  const GET_CHARACTERS = gql`
    {
      characters(page: 0) {
        info {
          count
          pages
        }
        results {
          id
          name
          image
          origin {
            name
          }
          species
          gender
          status
          location {
            name
          }
        }
      }
    }
  `;
  return apolloClient.query({
    query: GET_CHARACTERS,
  });
}
