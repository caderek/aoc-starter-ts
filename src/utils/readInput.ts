import { readFileSync } from "fs"
import { sep } from "path"
import * as getCallerFile from "get-caller-file"

export const readInput = () => {
  const file = getCallerFile()
    .split(sep)
    .slice(0, -1)
    .concat("input.txt")
    .join(sep)

  return readFileSync(file).toString()
}
