import {Requirement} from "../src/index"

test("Checks whether the Requirement class works as expected, or not", () => {
    const v = new Requirement({
        test: "sd",
        test2: "sdff"
    })
        .check("test")
        .bind((r: any) => r.test)
        .getValue()

    expect(v).toBe("sd")
})