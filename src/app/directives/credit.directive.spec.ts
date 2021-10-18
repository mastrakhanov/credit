import { CreditDirective } from './credit.directive';


describe('CreditDirective', () => {
  const creditDirective = new CreditDirective();

  it('should call event preventDefault for number regexPattern', () => {
    const keyBoardEvent = new KeyboardEvent('KeyF', { code: 'KeyF', key: 'f' });
    creditDirective.regexPattern = '^[0-9]*$';
    spyOn(keyBoardEvent, 'preventDefault');

    creditDirective.onKeyDown(keyBoardEvent);
    expect(keyBoardEvent.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should call event preventDefault for string regexPattern', () => {
    const keyBoardEvent = new KeyboardEvent('Digit4', { code: 'Digit4', key: '4' });
    creditDirective.regexPattern = '^[A-Z, a-z]*$';
    spyOn(keyBoardEvent, 'preventDefault');

    creditDirective.onKeyDown(keyBoardEvent);
    expect(keyBoardEvent.preventDefault).toHaveBeenCalledTimes(1);
  });
});
