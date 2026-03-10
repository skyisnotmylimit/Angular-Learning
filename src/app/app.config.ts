import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { counterReducer } from './store/reducers/counterReducer';
import { postsReducer } from './store/reducers/postsReducer';
import * as postsEffects from './store/effects/postsEffect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideStore({
      counter: counterReducer,
      posts: postsReducer
    }),
    provideEffects(postsEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
