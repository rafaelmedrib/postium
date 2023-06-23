import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

type ArticlePageProps = {
  id: number
}

const ArticlePage = ({ id }: ArticlePageProps) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
