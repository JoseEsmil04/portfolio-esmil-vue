import { Handler } from '@netlify/functions'
import emailjs from '@emailjs/browser'

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { name, email, message } = JSON.parse(event.body || '{}')

  if (!name || !email || !message) {
    return { statusCode: 400, body: 'Missing required fields' }
  }

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID as string,
      process.env.EMAILJS_TEMPLATE_ID as string,
      { name, email, message },
      process.env.EMAILJS_USER_ID as string
    )

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' })
    }
  }
}

export { handler }
