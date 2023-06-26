import { Link, navigate, routes } from '@redwoodjs/router'

import { useAuth } from '../../auth'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { currentUser, isAuthenticated, logOut } = useAuth()

  return (
    <>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex h-16 justify-between">
          <div className="flex">
            <a
              rel="noopener noreferrer"
              href={routes.home()}
              aria-label="Back to homepage"
              className="flex items-center"
            >
              <svg
                className="h-20 w-20 dark:text-violet-400"
                viewBox="0 0 800 800"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M791.55 546.6S734 451.32 647.18 369.87c-43.42-40.73-94.39-78.54-151.34-99-28.48-10.22-58.79-15.8-89.67-14.76a212.58 212.58 0 0 0-93 24.9c-6.36 3.36-14.76 16-14.23 25.22s3.82 12.59 5.53 14.82c3.41 4.47 4.83 5 6.16 6a58.43 58.43 0 0 0 6.69 4.25c4.51 2.58 10.16 5.52 17 9 13.76 6.92 32.07 15.71 50.53 24.42 20.84 9.84 27.63 12.88 42 19.48l-118.28 135a26.59 26.59 0 1 0 40 35l141.67-161.63a26.61 26.61 0 0 0-8.95-41.71s-37.18-17-73.69-34.22c-4.53-2.14-7.8-3.8-12.23-5.91 27.55-3.22 54.86.32 82.49 10.24 46.59 16.73 92.79 50.08 132.92 87.71C683.5 476.88 729.89 549.43 739 564l-17.93 47.28a485.84 485.84 0 0 1-81.44-10.11c-25.46-5.36-51.17-13.44-70.36-24.11s-30.66-22.79-34.75-36.47a26.6 26.6 0 1 0-51 15.26c7.05 23.58 22.45 41.7 40.94 55.51-4.1 9.44-9.08 21.29-14.07 34.15-11.87 30.63-24.76 64.86-24.72 96a26.6 26.6 0 1 0 53.2-.06c0-12.26 10-48.09 21.13-76.68 4-10.32 8-20 11.48-28.07 18.71 7.33 38.26 12.59 57.18 16.57C686.09 665.26 739 665.3 739 665.3a26.61 26.61 0 0 0 25-17.17l29.69-78.3a26.61 26.61 0 0 0-2.14-23.23z"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="10"
                />
              </svg>
            </a>
            <ul className="hidden items-stretch space-x-3 lg:flex">
              <li className="flex">
                <Link
                  to={routes.home()}
                  className="-mb-1 flex items-center border-b-2 px-4 dark:border-transparent"
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  to={routes.articles()}
                  className="-mb-1 flex items-center border-b-2 px-4 dark:border-transparent"
                >
                  Articles
                </Link>
              </li>
              <li className="flex">
                <Link
                  to={routes.contact()}
                  className="-mb-1 flex items-center border-b-2 px-4 dark:border-transparent"
                >
                  Contact
                </Link>
              </li>
              <li className="flex">
                <Link
                  to={routes.about()}
                  className="-mb-1 flex items-center border-b-2 px-4 dark:border-transparent"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden flex-shrink-0 items-center space-x-3 lg:flex">
            {isAuthenticated ? (
              <>
                <span className="flex items-center space-x-1">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 dark:text-violet-400"
                  >
                    <path
                      d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="dark:text-gray-400">
                    {currentUser?.email.split('@')[0]}
                  </span>
                </span>
                <button
                  onClick={() => logOut()}
                  className="rounded px-8 py-3 font-semibold dark:bg-violet-800 dark:text-gray-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate(routes.login())}
                className="rounded px-8 py-3 font-semibold dark:bg-violet-400 dark:text-gray-900"
              >
                Log in
              </button>
            )}
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <main className="dark:bg-gray-800 dark:text-gray-100">{children}</main>
    </>
  )
}

export default MainLayout
