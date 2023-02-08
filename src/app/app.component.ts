import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppState } from './_store/app-state.state';

@Component({
  selector: 'cypress-ngxs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NxWelcomeComponent],
})
export class AppComponent {
  title = 'cypress-ngxs';
  // private _store = inject(Store);

  constructor(private _store: Store) {}

  user$ = this._store.select(AppState.user);
}
