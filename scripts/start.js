const { spawn, execSync } = require("child_process")
const { readdirSync } = require("fs")
const { cp } = require("shelljs")

const day = process.argv[2]
const days = readdirSync("./src")

if (!days.includes(day)) {
  console.log(`Creating file structure for ${day}...`)
  cp("-r", "src/template", `src/${day}`)
}

spawn("nodemon", ["-x", "ts-node", `src/${day}/index.ts`], {
  stdio: "inherit",
})
