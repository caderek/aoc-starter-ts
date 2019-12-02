import { isDeepStrictEqual } from "util"
import * as kleur from "kleur"

let index = 0

export const test = <T>(result: T, expected: T) => {
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
}
