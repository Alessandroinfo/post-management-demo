import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {Provider} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {from} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

export const CONNECTOR_URL = 'https://graphqlzero.almansi.me/api';

export const provideApollo = (): Provider => [
  {
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        link: from([
          httpLink.create({
            uri: CONNECTOR_URL,
            headers: new HttpHeaders({
              'Access-Control-Allow-Origin': '*',
            }),
          }),
        ]),
      };
    },
    deps: [HttpLink],
  }
];
