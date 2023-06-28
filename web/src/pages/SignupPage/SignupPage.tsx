import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })

  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.articles())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const emailRef = useRef<HTMLInputElement>()
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
      formMethods.reset()
      emailRef.current?.focus()
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />
      <main
        className="mx-auto flex max-w-md flex-col
       rounded-md p-6 dark:bg-gray-900 dark:text-gray-100 sm:p-10"
      >
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Signup</h1>
          <p className="text-sm dark:text-gray-400">
            Sign up to create your account
          </p>
        </div>
        <Form
          onSubmit={onSubmit}
          className="space-y-12"
          formMethods={formMethods}
        >
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
                errorClassName="w-full rounded p-3 dark:bg-gray-800 border-2 border-red-500"
                ref={emailRef}
                validation={{
                  required: true,
                  pattern: {
                    value: /[^@]+@[^.]+\..+/,
                    message: 'Please enter a valid email',
                  },
                }}
                placeholder="leroy@jenkins.com"
                className="w-full rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
              <FieldError name="email" className="rw-field-error" />
            </div>
            <div>
              <div className="mb-2 flex justify-between">
                <Label
                  name="password"
                  className="text-sm"
                  errorClassName="rw-label rw-label-error"
                >
                  Password
                </Label>
                <Link
                  to={routes.forgotPassword()}
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot Password?
                </Link>
              </div>
              <PasswordField
                name="password"
                className="w-full rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                errorClassName="rw-input rw-input-error"
                autoComplete="current-password"
                validation={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                }}
              />
              <FieldError name="password" className="rw-field-error" />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <Submit className="w-full rounded-md px-8 py-3 font-semibold dark:bg-violet-400 dark:text-gray-900">
                Sign Up
              </Submit>
            </div>
            <p className="px-6 text-center text-sm dark:text-gray-400">
              Already have an account? &nbsp;
              <Link
                to={routes.login()}
                className="hover:underline dark:text-violet-400"
              >
                Log in!
              </Link>
            </p>
          </div>
        </Form>
      </main>
    </>
  )
}

export default SignupPage
