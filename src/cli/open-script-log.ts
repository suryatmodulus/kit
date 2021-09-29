import { selectScript } from "../core/utils.js"

let { filePath, command } = await selectScript(
  `Open log for which script?`
)

edit(
  path.resolve(
    filePath,
    "..",
    "..",
    "logs",
    `${command}.log`
  )
)

export {}
