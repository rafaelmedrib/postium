import { render } from '@redwoodjs/testing/web'

import ArticleImage from './ArticleImage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArticleImage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleImage />)
    }).not.toThrow()
  })
})
