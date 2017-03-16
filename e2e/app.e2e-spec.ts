import { NotificationPage } from './app.po';

describe('notification App', function() {
  let page: NotificationPage;

  beforeEach(() => {
    page = new NotificationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
