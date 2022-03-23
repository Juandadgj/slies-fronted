import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { JWT_TOKEN_KEY } from '../../constants/jwt';
import localStorageHelpers from '../../../util/localStorage';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_PROD_SERVER,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorageHelpers.getItem(JWT_TOKEN_KEY);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
export const client = new ApolloClient({
  uri: 'https://api-eventos-fi-unac.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
