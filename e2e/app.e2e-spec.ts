import { AngularFlexKickOffPage } from './app.po';

describe('AngularFlexKickOff App', function () {
  let page: AngularFlexKickOffPage;

  beforeEach(() => {
    page = new AngularFlexKickOffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
