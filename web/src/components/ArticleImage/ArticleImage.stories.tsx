// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ArticleImage> = (args) => {
//   return <ArticleImage {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ArticleImage from './ArticleImage'

export const generated = () => {
  return <ArticleImage />
}

export default {
  title: 'Components/ArticleImage',
  component: ArticleImage,
} as ComponentMeta<typeof ArticleImage>
