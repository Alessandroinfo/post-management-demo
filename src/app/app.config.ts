import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {provideApollo} from './core/providers';
import {Apollo} from 'apollo-angular';
import {NgxsModule} from '@ngxs/store';
import {PostsState} from './posts/store/posts/posts.state';
import {PostState} from './posts/store/post/post.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(),
    provideApollo(),
    provideRouter(routes),
    importProvidersFrom(NgxsModule.forRoot([PostsState, PostState])),
    Apollo
  ]
};
