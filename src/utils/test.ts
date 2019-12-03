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
    console.log(
      kleur.red(
        `${index}: failed:\n\nResult: ${result}\nExpected: ${expected}`,
      ),
    )
    console.log(kleur.gray("-----------------------------------------"))
  }

  index++
})
