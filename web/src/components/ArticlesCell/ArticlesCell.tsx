import type { ArticlesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { truncate } from '../../lib/formatters'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul>
      {articles.map((item) => {
        return (
          <>
            <div className="dark:bg-gray-800 dark:text-gray-100">
              <div className="container mx-auto max-w-4xl rounded-lg px-10 py-6 shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-sm dark:text-gray-400">
                    Jun 1, 2020
                  </span>
                </div>
                <div className="mt-3">
                  <a
                    rel="noopener noreferrer"
                    href="/"
                    className="text-2xl font-bold hover:underline"
                  >
                    {item.title}
                  </a>
                  <p className="mt-2">{truncate(item.body)}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    rel="noopener noreferrer"
                    href="/"
                    className="hover:underline dark:text-violet-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </ul>
  )
}
