// Description: Run the selected script
import { scriptValue } from "../core/db.js"

let command = await arg(
  `Which script do you want to run?`,
  scriptValue("command")
)

await kit(command)

export {}
