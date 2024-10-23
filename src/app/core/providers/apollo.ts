import {InMemoryCache} from 'apollo-cache-inmemory';
import {Provider} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {createHttpLink} from 'apollo-link-http';

export const CONNECTOR_URL = 'https://graphqlzero.almansi.me/api';

const httpLink = createHttpLink({
  uri: CONNECTOR_URL
});

export const provideApollo = (): Provider => [
  {
    provide: APOLLO_OPTIONS,
    useFactory() {
      return {
        cache: new InMemoryCache(),
        link: httpLink,
      };
    }
  }
];
