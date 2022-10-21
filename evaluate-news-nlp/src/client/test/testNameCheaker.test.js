import { checkForName } from "../js/nameChecker"
describe('Test "validateRequest()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof checkForName).toBe("function");
    });
});