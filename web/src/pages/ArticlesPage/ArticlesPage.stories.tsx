import type { ComponentMeta } from '@storybook/react'

import ArticlesPage from './ArticlesPage'

export const generated = () => {
  return <ArticlesPage />
}

export default {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>
