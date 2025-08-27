import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"],
    },
    // TODO: more tests here
])("cleanInput($input)", ({input, expected}) => {
    test(`Expected: ${expected}`,  () => {
        //TODO: call cleanInput with the input
        let actual =  cleanInput(input);

        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});