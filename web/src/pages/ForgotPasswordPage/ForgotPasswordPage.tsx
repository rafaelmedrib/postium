import { useEffect, useRef } from 'react'

import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.articles())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { email: string }) => {
    const response = await forgotPassword(data.email)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />
      <main
        className="mx-auto flex max-w-md flex-col
       rounded-md p-6 dark:bg-gray-900 dark:text-gray-100 sm:p-10"
      >
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Forgot Password ?</h1>
          <p className="text-sm dark:text-gray-400">
            Inform us of your email address and we'll send you a link to reset
            your password
          </p>
        </div>
        <Form onSubmit={onSubmit} className="space-y-12">
          <div className="space-y-4">
            <div>
              <Label
                name="email"
                errorClassName="rw-label rw-label-error"
                className="mb-2 block text-sm"
              >
                Email address
              </Label>
              <TextField
                name="email"
                errorClassName="rw-input rw-input-error"
                ref={emailRef}
                validation={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
                placeholder="leroy@jenkins.com"
                className="w-full rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
              <FieldError name="email" className="rw-field-error" />
            </div>
            <div></div>
          </div>
          <div className="space-y-2">
            <div>
              <Submit className="w-full rounded-md px-8 py-3 font-semibold dark:bg-violet-400 dark:text-gray-900">
                Submit
              </Submit>
            </div>
          </div>
        </Form>
      </main>
    </>
  )
}

export default ForgotPasswordPage
