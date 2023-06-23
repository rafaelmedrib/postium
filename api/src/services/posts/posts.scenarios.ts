import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        updatedAt: '2023-06-23T00:07:23.793Z',
      },
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        updatedAt: '2023-06-23T00:07:23.793Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
