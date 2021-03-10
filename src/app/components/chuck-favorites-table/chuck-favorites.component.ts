import { Component, HostListener, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { JOKES } from 'src/app/interface/chuck-norris.interface';



@Component({
    selector: 'chuck-favorites',
    templateUrl: './chuck-favorites.component.html'
})
export class ChuckFavoritesComponent {
    @Input() jokesSelected: any;
    @Output() removeFromFavoritesEvent: EventEmitter<string> = new EventEmitter();

    removeFromFavorites(value: string): void {   // This Method pushes the selected jokes to a new table

        this.removeFromFavoritesEvent.emit(value);
    }


}
