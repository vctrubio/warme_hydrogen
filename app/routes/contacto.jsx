import { Outlet } from '@remix-run/react'
import {ContactForm} from '~/components/ContactForm'

export default function ContactPage () {
  return (
    <div>
      <ContactForm />
    </div>
  )
}