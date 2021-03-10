import { JokeInterface } from './product.model';
import { Action } from '@ngrx/store';

export const ADD_JOKE = 'ADD_JOKE';
export const STORE_JOKE = 'STORE_JOKE';
export const REMOVE_JOKE = 'REMOVE_JOKE';

export function addProductReducer(state: JokeInterface, action: any) {
  switch (action.type) {
    case ADD_JOKE:
      let index = state.favoriteJokes.indexOf(action.payload.favoriteJokes[0]);
      if (index === -1) {
        return state = { name: 'addJoke', favoriteJokes: action.payload.favoriteJokes }
      }
      return state;
    case REMOVE_JOKE:
      return {
        ...state,
        name: action.payload.name,
        favoriteJokes: [...state.favoriteJokes.filter(item => item !== action.payload.favoriteJokes[0])]
      };
    case STORE_JOKE:
      return action.payload;
    default:
      return state;
  }
}