import { db } from '@vercel/postgres'

export async function POST (request: Request) {
  const client = await db.connect()

  const { name, email, message } = await request.json()

  if (name == null || email == null || message == null) {
    return new Response('debes proveer de todos los campos', { status: 400 })
  }

  try {
    const { rows } = await client.sql`
    INSERT INTO messages (name, email, message) VALUES (${name}, ${email}, ${message})
    `

    console.log(rows)
    return new Response('contacto creado!', { status: 202 })
  } catch (error) {
    console.log(error)
    return new Response('error al crear', { status: 500 })
  }
}
