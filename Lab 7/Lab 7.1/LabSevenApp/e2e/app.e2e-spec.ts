import { LabSevenAppPage } from './app.po';

describe('lab-seven-app App', () => {
  let page: LabSevenAppPage;

  beforeEach(() => {
    page = new LabSevenAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
