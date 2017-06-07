import { AngularAuth0Page } from './app.po';

describe('angular-auth0 App', () => {
  let page: AngularAuth0Page;

  beforeEach(() => {
    page = new AngularAuth0Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
