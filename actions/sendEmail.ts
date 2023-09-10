'use server'

import { Resend } from 'resend'
import { getErrorMessage, validateString } from '@/lib/utils'
import ContactFormEmail from '@/email/ContactFormEmail'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

const sendEmail = async (formData: FormData) => {
  console.log('Running on server')
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    }
  }
  let data
  try {
    data = await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'sji.2.sami@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data,
  }
}

export { sendEmail }
