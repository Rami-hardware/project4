import { handleSubmit } from "../js/formHandler"
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(typeof handleSubmit).toBe("function");
    })});