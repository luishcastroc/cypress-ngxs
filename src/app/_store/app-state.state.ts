import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';
import { AppStateModel, defaultState } from './app-state.model';

const defaults = defaultState;

@State<AppStateModel>({
  name: 'clientes',
  defaults,
})
@Injectable()
export class AppState {
  @Selector()
  static user({ user }: AppStateModel) {
    return user;
  }
}
