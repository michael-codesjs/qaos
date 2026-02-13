import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:6445/graphql',
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  // We'll let credentials handle the session cookie automatically via withCredentials equivalent if needed,
  // but for Apollo HttpLink we usually set credentials: 'include'
  return {
    headers: {
      ...headers,
    },
  };
});

export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
