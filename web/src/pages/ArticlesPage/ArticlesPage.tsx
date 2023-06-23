import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const ArticlesPage = () => {
  return (
    <>
      <MetaTags title="Articles" description="Articles page" />

      <ArticlesCell />
    </>
  )
}

export default ArticlesPage
