import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
describe('workspace-project App', () => {
    let page;
    beforeEach(() => {
        page = new AppPage();
    });
    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('nep-app app is running!');
    });
    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        }));
    });
});
//# sourceMappingURL=app.e2e-spec.js.map