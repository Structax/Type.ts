import { defineError } from "../../packages/core/defineError"

export const UserNotFound = defineError({
  name: "UserNotFound",
  message: "指定されたユーザーが存在しません",
  status: 404,
  tags: ["domain"],
})
