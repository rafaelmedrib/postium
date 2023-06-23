import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ArticlePage from './ArticlePage'

export const generated: ComponentStory<typeof ArticlePage> = (args) => {
  return <ArticlePage id={'42'} {...args} />
}

export default {
  title: 'Pages/ArticlePage',
  component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>
