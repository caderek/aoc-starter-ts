import { isDeepStrictEqual } from "util"
import * as kleur from "kleur"
import { curry } from "@arrows/composition"

let index = 0

type Test = {
  <T>(result: T, expected: T): boolean
  <T>(result: T): (expected: T) => boolean
}

export const test: Test = curry((result, expected) => {
  const passed = isDeepStrictEqual(result, expected)

  if (passed) {
    console.log(kleur.green(`${index}: passed`))
  } else {
    console.log(kleur.gray("-----------------------------------------"))
    console.log(kleur.red(`${index}: failed`))
    console.log(kleur.gray("\nResult:"))
    console.dir(result, { colors: true, depth: 0 })
    console.log(kleur.gray("\nExpected:"))
    console.dir(expected, { colors: true, depth: 0 })
    console.log(kleur.gray("-----------------------------------------"))
  }

  index++
})
