import { safe } from "../packages/core/safe"
import { UserNotFound } from "./errors/UserNotFound"
import type { AppError } from "../packages/core/defineError"

const main = async () => {
  const result = await safe<never>(() => {
    throw UserNotFound.withContext({ userId: "abc-123" })
  })

  if ("isErr" in result && result.isErr) {
    const err = result.error as AppError
    console.log("❌ Error:", {
      name: err.name,
      message: err.message,
      status: err.status,
      tags: err.tags,
      context: err.context,
    })
  } else if ("isOk" in result && result.isOk) {
    console.log("✅ OK:", result.value)
  }
}

main()