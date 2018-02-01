import { BoredBoardPage } from './app.po';

describe('bored-board App', function() {
  let page: BoredBoardPage;

  beforeEach(() => {
    page = new BoredBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
