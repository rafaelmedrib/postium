import type { ArticlesQuery } from 'types/graphql'

import { routes } from '@redwoodjs/router'
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

export const Loading = () => (
  <section className="flex h-full items-center p-10 dark:bg-gray-900 dark:text-gray-100">
    <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
      <div className="w-60 animate-pulse rounded py-4 shadow-md dark:bg-gray-900 sm:w-80">
        <div className="flex space-x-4 p-4 sm:px-8">
          <div className="h-5 w-full rounded dark:bg-gray-700"></div>
        </div>
        <div className="space-y-4 p-4 sm:px-8">
          <div className="h-4 w-full rounded dark:bg-gray-700"></div>
          <div className="h-4 w-full rounded dark:bg-gray-700"></div>
          <div className="h-4 w-3/4 rounded dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="w-60 animate-pulse rounded py-4 shadow-md dark:bg-gray-900 sm:w-80">
        <div className="flex space-x-4 p-4 sm:px-8">
          <div className="h-5 w-full rounded dark:bg-gray-700"></div>
        </div>
        <div className="space-y-4 p-4 sm:px-8">
          <div className="h-4 w-full rounded dark:bg-gray-700"></div>
          <div className="h-4 w-full rounded dark:bg-gray-700"></div>
          <div className="h-4 w-3/4 rounded dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  </section>
)

export const Empty = () => (
  <section className="flex h-full items-center p-10 dark:bg-gray-900 dark:text-gray-100">
    <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
      <div className="max-w-md text-center">
        <span className="sr-only">Error</span>
        <img
          src="embarrassed_empty.svg"
          alt=""
          className="mx-auto h-52 md:h-64"
        />
        <p className="text-2xl font-semibold md:text-3xl">
          Sorry, there are no articles yet.
        </p>
        <p className="mb-8 mt-4 dark:text-gray-400">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <a
          rel="noopener noreferrer"
          href={routes.home()}
          className="rounded px-8 py-3 font-semibold dark:bg-violet-400 dark:text-gray-900"
        >
          Back to homepage
        </a>
      </div>
    </div>
  </section>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul>
      {articles.map((item) => {
        return (
          <>
            <div className="my-4 dark:bg-gray-800 dark:text-gray-100">
              <div className="container mx-auto max-w-4xl rounded-lg px-10 py-6 shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-sm dark:text-gray-400">
                    {new Date(item.createdAt).toLocaleString('pt-BR', {
                      dateStyle: 'medium',
                    })}
                  </span>
                </div>
                <div className="mt-3">
                  <a
                    rel="noopener noreferrer"
                    href={routes.article({ id: item.id.toString() })}
                    className="text-2xl font-bold hover:underline"
                  >
                    {item.title}
                  </a>
                  <p className="mt-2">{truncate(item.body)}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    rel="noopener noreferrer"
                    href={routes.article({ id: item.id.toString() })}
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
