import { Component } from '@angular/core';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private connService: ConnectionService){

    connService.getDittoWithPromise()
    .then(ditto => console.log('ditto with fetch in component', ditto));

    connService.getDittoWithObservable().subscribe({
      next: ditto => console.log('ditto with httpclient in component', ditto),
      error: err => console.log(err)
    });

    connService.getFirst20PokemonWithPromise()
    .then(pokemon => console.log('first 20 with fetch', pokemon));

    connService.getFirst20PokemonWithObservable()
    .subscribe({
      next: pokemons => console.log('first 20 with http get', pokemons),
      error: err => console.log(err)
    });

    connService.getFirstAbilityPromise()
    .then(ability => console.log('first ability with fetch', ability));

    connService.getFirstAbilityObservable()
    .subscribe({
      next: ability => console.log('first ability with http get', ability),
      error: err => console.log(err)
    });

  }

  title = 'rxjs-test';
}
