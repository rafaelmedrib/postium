import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ArticlesPage = () => {
  return (
    <>
      <MetaTags title="Articles" description="Articles page" />

      <h1>ArticlesPage</h1>
      <p>
        Find me in <code>./web/src/pages/ArticlesPage/ArticlesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>articles</code>, link to me with `
        <Link to={routes.articles()}>Articles</Link>`
      </p>
    </>
  )
}

export default ArticlesPage
