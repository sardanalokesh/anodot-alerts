import { AnodotAlertsPage } from './app.po';

describe('anodot-alerts App', function() {
  let page: AnodotAlertsPage;

  beforeEach(() => {
    page = new AnodotAlertsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
