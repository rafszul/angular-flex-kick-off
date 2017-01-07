import { YuElevatedPage } from './app.po';

describe('yuElevated App', function () {
  let page: YuElevatedPage;

  beforeEach(() => {
    page = new YuElevatedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
