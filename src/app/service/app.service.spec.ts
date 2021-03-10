import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppService } from './app.service';

import { Store } from '@ngrx/store';
import { URL }  from '../constants/contants';
describe('Service Component', () => {
  const appServiceStub = () => ({
    getChuckJokes: () => [{ "id": 170, "joke": "Wo hu cang long. The translation from Mandarin Chinese reads: &quot;Crouching Chuck, Hidden Norris&quot;", "categories": [] }]
  })
  
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
       
      ],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide : Store , useFactory: appServiceStub}
      ]
    }).compileComponents();
  }));

  it('should create the service and call through', async(() => {
    const fixture = TestBed.inject(AppService);
    const callBack = spyOn(fixture, 'getChuckJokes').and.callThrough();
    expect(callBack).toBeDefined();
  }));

  it('cross check the URL', async(() => {
    const url = 'http://api.icndb.com/jokes/random/10';
    expect(URL).toBeDefined();
    expect(URL).toEqual(url);
  })); 

});
