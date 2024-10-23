import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {provideApollo} from './core/providers';
import {Apollo} from 'apollo-angular';
import {NgxsModule} from '@ngxs/store';
import {PostsState} from './posts/store/posts/posts.state';

export const appConfig: ApplicationConfig = {
  providers: [
    // Optimize change detection by enabling event coalescing
    provideZoneChangeDetection({eventCoalescing: true}),
    // Provide Angular's built-in HTTP client
    provideHttpClient(),
    // Apollo client configuration for GraphQL
    provideApollo(),
    // Router configuration with defined routes
    provideRouter(routes),
    // Import NGXS state management for the PostsState
    importProvidersFrom(NgxsModule.forRoot([PostsState])),
    // Provide Apollo service for dependency injection
    Apollo
  ]
};
