import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChuckFavoritesComponent } from './chuck-favorites.component';
import { AppService } from '../../service/app.service';
import { Store } from '@ngrx/store';

describe('Chuck Favorite Tables Component', () => {
  const appServiceStub = () => ({
    getChuckJokes: () => [{ "id": 170, "joke": "Wo hu cang long. The translation from Mandarin Chinese reads: &quot;Crouching Chuck, Hidden Norris&quot;", "categories": [] }]
  })
  
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        ChuckFavoritesComponent
      ],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide : Store , useFactory: appServiceStub}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ChuckFavoritesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as table component 'app'`, async(() => {
    const fixture = TestBed.createComponent(ChuckFavoritesComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.table-striped'));
    expect(ui).toBeDefined();
  }));

  it(`Value of Jokes should be defined'`, async(() => {
    const fixture = TestBed.createComponent(ChuckFavoritesComponent);
    const app = fixture.debugElement.componentInstance;
    app.jokesSelected =  ["Wo hu cang long. The translation from Mandarin Chinese reads: &quot;Crouching Chuck, Hidden Norris&quot;"];
    expect(app.jokesSelected).toBeDefined();
  }));

  

});
