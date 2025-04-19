import { z } from "zod"
import { defineAPI } from "../../packages/core/defineAPI"

const schema = z.object({
  name: z.string(),
})

type Input = z.infer<typeof schema>

export const api = defineAPI({
  input: schema,
  async handler({ input }: { input: Input }) {
    return { message: `hello ${input.name}` }
  },
})
