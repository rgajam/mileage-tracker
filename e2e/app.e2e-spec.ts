import { MileageTrackerPage } from './app.po';

describe('mileage-tracker App', function() {
  let page: MileageTrackerPage;

  beforeEach(() => {
    page = new MileageTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
