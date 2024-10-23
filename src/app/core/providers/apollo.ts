import {InMemoryCache} from 'apollo-cache-inmemory';
import {Provider} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {createHttpLink} from 'apollo-link-http';

// The GraphQL API endpoint to connect to
export const CONNECTOR_URL = 'https://graphqlzero.almansi.me/api';

// Create an HTTP link for the Apollo client to send requests to the specified GraphQL endpoint
const httpLink = createHttpLink({
  uri: CONNECTOR_URL
});

// Provide a factory function that configures Apollo Client with a cache and HTTP link
export const provideApollo = (): Provider => [
  {
    // Provide Apollo options through Angular's dependency injection
    provide: APOLLO_OPTIONS,
    useFactory() {
      return {
        // Set up an in-memory cache for storing GraphQL query results
        cache: new InMemoryCache(),
        // Use the HTTP link created earlier for sending requests
        link: httpLink,
      };
    }
  }
];
