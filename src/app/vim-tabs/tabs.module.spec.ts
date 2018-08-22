import { TabsModule } from './tabs.module';

describe('TabsModule', () => {
  let vimTabsModule: TabsModule;

  beforeEach(() => {
    vimTabsModule = new TabsModule();
  });

  it('should create an instance', () => {
    expect(vimTabsModule).toBeTruthy();
  });
});
