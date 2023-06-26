import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg px-8 py-16 dark:bg-gray-800 dark:text-gray-100 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="leadi text-4xl font-bold lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-400">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img src="doodle.svg" alt="" className="h-52 p-6 md:h-64" />
        </div>
        <Form className="space-y-6" config={{ mode: 'onBlur' }}>
          <div>
            <Label name="fullName" className="text-sm">
              Full name
            </Label>
            <TextField
              name="fullName"
              placeholder="Leroy Jenkins"
              className="w-full rounded p-3 dark:bg-gray-800"
              validation={{
                required: 'Please enter your name',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Please enter a valid name',
                },
                minLength: 3,
              }}
              errorClassName="w-full rounded p-3 dark:bg-gray-800 border-2 border-red-500"
            />
            <FieldError name="fullName" className="text-red-600" />
          </div>
          <div>
            <Label name="email" className="text-sm">
              Email
            </Label>
            <TextField
              name="email"
              className="w-full rounded p-3 dark:bg-gray-800"
              placeholder="leroy@jenkins.com"
              validation={{
                required: true,
                pattern: {
                  value: /[^@]+@[^.]+\..+/,
                  message: 'Please enter a valid email',
                },
              }}
              errorClassName="w-full rounded p-3 dark:bg-gray-800 border-2 border-red-500"
            />
            <FieldError name="email" className="text-red-600" />
          </div>
          <div>
            <Label name="message" className="text-sm">
              Message
            </Label>
            <TextAreaField
              rows={3}
              name="message"
              className="w-full rounded p-3 dark:bg-gray-800"
              placeholder='Hi, I would like to talk about "X"'
              validation={{
                required: true,
                minLength: 5,
              }}
              errorClassName="w-full rounded p-3 dark:bg-gray-800 border-2 border-red-500"
            ></TextAreaField>
            <FieldError name="message" className="text-red-600" />
          </div>
          <Submit className="tracki w-full rounded p-3 text-sm font-bold uppercase dark:bg-violet-400 dark:text-gray-900">
            Send Message
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default ContactPage
