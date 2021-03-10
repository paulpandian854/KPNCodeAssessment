
import { JokeInterface } from '../../ngrx/product.model';
import { AppState } from '../../ngrx/app.state';
import { Component, HostListener, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppService } from '../../service/app.service';
import { TITLE } from '../../constants/contants';
import { JOKES } from '../../interface/chuck-norris.interface';

@Component({
  selector: 'app-product',
  templateUrl: './chuck-container.component.html'
})
export class ChuckContainerComponent implements OnInit {
  jokes: JOKES[] = [];
  interval: any;
  jokesSelected: string[] = [];
  title = TITLE;


  constructor(private store: Store<AppState>,
    private appService: AppService) {
    this.callFromStore();
  }


  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    this.store.dispatch({
      type: 'STORE_JOKE',
      payload: <JokeInterface>{
        name: 'addJoke',
        favoriteJokes: this.jokesSelected
      }
    });
  }

  ngOnInit() {
    try {
      this.appService.getChuckJokes().subscribe(response => {
        if (response._body) {
          var json = JSON.parse(response._body);
          this.jokes = json.value;
        }
      })
    }
    catch (error) {
      console.log(error)
    }

  }

  autoPopulateFavorites(): void {
    this.jokesSelected = []; // Clearing out favorites everytime when the button is click
    this.jokes.forEach(f => {    // new age for loop
      this.jokesSelected.push(f.joke);
    })
  }

  timeAddFavorites(): void {   //   Loading all the jokes to jokes selected container at a time limit of 10 seconds
    this.interval = setInterval(() => {
      this.jokes.forEach(f => {
        let index = this.jokesSelected.indexOf(f.joke);
        if (index === -1) {
          this.jokesSelected.push(f.joke);
        }
      });
      if (this.jokesSelected.length === 10) {
        clearInterval(this.interval);
      }
    }, 5000)
  }

  checkBoxClick(value: string): void {   // This Method pushes the selected jokes to a new table
    // Calling rxjs state and add favorites
    this.store.dispatch({
      type: 'ADD_JOKE',
      payload: <JokeInterface>{
        name: 'addJoke',
        favoriteJokes: [value]
      }
    });
  }

  callFromStore(): void {
    this.store.select(state => state.chuckNorrisStore).subscribe(selectedJokes => {
      selectedJokes.name === 'addJoke' && selectedJokes.favoriteJokes.length > 0 && selectedJokes.favoriteJokes.forEach(e => {
        this.jokesSelected.push(e);
      });
    });
  }

  removePopulateFavorites(): void {
    this.jokesSelected = [];
  }

  stopAutoPopulate(): void {  //Stop the Interval Timer
    clearInterval(this.interval);
  }

  removeFromFavorites(value: string) {   // remove the selected value from the favorite list
    let index = this.jokesSelected.indexOf(value);
    this.jokesSelected.splice(index, 1);
  }


}
