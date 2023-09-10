'use server'

import { getErrorMessage, validateString } from '@/lib/utils'
import { Resend } from 'resend'

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

  try {
    await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'sji.2.sami@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      text: message as string,
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }
}

export { sendEmail }
