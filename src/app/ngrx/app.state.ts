import { JokeInterface } from './product.model';

export interface AppState {
  readonly chuckNorrisStore: JokeInterface;
}