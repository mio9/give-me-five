import { expect, test} from "bun:test"
import { five } from "./index"
import fiveMod from "./index"

test("5 is 5", () => {
    expect(5).toBe(5)
})

test("5 is not 6", () => {
    expect(5).not.toBe(6)
})

test("imported 5 is 5", () => {
    expect(five).toBe(5)
})

test("imported default 5 is 5", () => {
    expect(fiveMod).toBe(5)
})