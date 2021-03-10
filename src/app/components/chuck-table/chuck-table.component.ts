import { Component, HostListener, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { JOKES } from 'src/app/interface/chuck-norris.interface';



@Component({
    selector: 'chuck-table',
    templateUrl: './chuck-table.component.html'
})
export class ChuckTableComponent {
    @Input() jokes: any ;
    @Output() checkBoxClickEvent: EventEmitter<string> = new EventEmitter();

    checkBoxClick(value: string): void {   // This Method pushes the selected jokes to a new table

        this.checkBoxClickEvent.emit(value);
    }


}
