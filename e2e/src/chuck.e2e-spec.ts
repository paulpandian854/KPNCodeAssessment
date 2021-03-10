import { browser, by, element, logging } from 'protractor';
import { AppPage } from './app.po';

describe('chuck-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should find AutoPopulate Button', async () => {
    expect(element(by.id('autoPopulateFavorites'))).toBeDefined();
  });

  it('should be timeAddFavorites Button', async () => {
    expect(element(by.id('timeAddFavorites'))).toBeDefined();
  });

  it('Autopopulate Click Action should be performed', async () => {
    element(by.id('timeAddFavorites')).click();
  });

  it('Expect Table to be present', async () => {
    element(by.css('.table-striped')).click();
    expect( element(by.css('.table-striped'))).toBeDefined();
  });

  it('Validate the URL', async () => {
    expect( await browser.getCurrentUrl()).toEqual('/');
  });
});
