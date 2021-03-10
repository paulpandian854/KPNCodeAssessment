import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChuckContainerComponent } from './chuck-container.component';
import { AppService } from '../../service/app.service';
import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';

class storeStub {
  select = () => Observable.create();
}
describe('Chuck Container Component', () => {
  const appServiceStub = () => ({
    getChuckJokes: () => [{ "id": 170, "joke": "Wo hu cang long. The translation from Mandarin Chinese reads: &quot;Crouching Chuck, Hidden Norris&quot;", "categories": [] }],
  });

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        ChuckContainerComponent
      ],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide: Store, useClass: storeStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ChuckContainerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Chris Norris'`, async(() => {
    const fixture = TestBed.createComponent(ChuckContainerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Chris Norris Jokes');
  }));


  it(`It should have Buttons to add and Remove`, async(() => {
    const fixture = TestBed.createComponent(ChuckContainerComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.ml-5'));
    expect(ui).toBeDefined();
  }));

  it(`Fake call to the service`, async(() => {
    const fixture = TestBed.createComponent(ChuckContainerComponent);
    const response = fixture.debugElement.injector.get(AppService);
    const callBack = spyOn(response, 'getChuckJokes').and.callThrough();
    expect(callBack).toBeDefined();
  }));
});
