import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ArticleImage from '../ArticleImage/ArticleImage'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

interface ArticleCellProps extends CellSuccessProps<FindArticleQuery> {
  id: number
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ article }: CellSuccessProps<ArticleCellProps>) => {
  const imageURL = 'https://picsum.photos/700/400'

  return (
    <>
      <div className="mx-auto p-5 dark:bg-gray-800 dark:text-gray-100 sm:p-10 md:p-16">
        <div className="mx-auto flex max-w-3xl flex-col overflow-hidden rounded">
          <ArticleImage imageURL={imageURL} />
          <div className="m-4 mx-auto -mt-16 space-y-6 p-6 pb-12 dark:bg-gray-900 sm:mx-12 sm:px-10 lg:max-w-2xl lg:rounded-md">
            <div className="space-y-2">
              <p
                rel="noopener noreferrer"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {article.title}
              </p>
              <p className="text-xs">
                {new Date(article.createdAt).toLocaleString('pt-BR', {
                  dateStyle: 'medium',
                })}
              </p>
            </div>
            <div className="dark:text-gray-100">
              <p>{article.body}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
