import kv from '@vercel/kv'

export async function POST (request: Request) {
  const { name, email, message } = await request.json()

  console.log(name, email, message)

  if (name == null || email == null || message == null) {
    return new Response('debes proveer de todos los campos', { status: 400 })
  }

  const timestamp = Date.now()
  const uuid = crypto.randomUUID()

  try {
    await kv.set(`contact-${uuid}`, { name, email, message, timestamp })
    return new Response('contacto creado!', { status: 202 })
  } catch (error) {
    console.log(error)
    return new Response('error al crear', { status: 500 })
  }
}
