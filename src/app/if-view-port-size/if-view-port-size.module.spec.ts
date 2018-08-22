import { IfViewPortSizeModule } from './if-view-port-size.module';

describe('IfViewPortSizeModule', () => {
  let ifViewPortSizeModule: IfViewPortSizeModule;

  beforeEach(() => {
    ifViewPortSizeModule = new IfViewPortSizeModule();
  });

  it('should create an instance', () => {
    expect(ifViewPortSizeModule).toBeTruthy();
  });
});
