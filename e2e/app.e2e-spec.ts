import { Ng2JqueryOwlcV1Page } from './app.po';

describe('ng2-jquery-owlc-v1 App', () => {
  let page: Ng2JqueryOwlcV1Page;

  beforeEach(() => {
    page = new Ng2JqueryOwlcV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
