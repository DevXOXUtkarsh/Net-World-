import { Trpc } from '~/core/trpc/base'

export const trpcRouter = Trpc.createRouter({
  getPublic: Trpc.procedurePublic.query(async () => {
    const variables = process.env ?? {}

    const variablesPublic: Record<string, any> = {}

    for (const [key, value] of Object.entries(variables)) {
      const isPublic = key.startsWith('PUBLIC_')

      if (isPublic) {
        variablesPublic[key] = value
      }
    }

    return variablesPublic
  }),
})

export const ConfigurationServer = {
  trpcRouter,
}
