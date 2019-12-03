import { test, readInput } from "../utils/index"

const rawInput = readInput()
const prepareInput = (rawInput) => rawInput
const input = prepareInput(rawInput)

const goA = (input) => {
  return
}

const goB = (input) => {
  return
}

/* Tests */

// test()

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
