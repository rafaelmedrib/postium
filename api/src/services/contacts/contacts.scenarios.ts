import type { Prisma, Contact } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: {
        name: 'String',
        email: 'String',
        message: 'String',
        updatedAt: '2023-06-27T22:43:19.391Z',
      },
    },
    two: {
      data: {
        name: 'String',
        email: 'String',
        message: 'String',
        updatedAt: '2023-06-27T22:43:19.391Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Contact, 'contact'>
