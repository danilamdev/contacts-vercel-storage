'use client'

import { Button } from './button'
import { Input } from './input'
import { toast } from 'sonner'
import confetti from 'canvas-confetti'

export const PostgreForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget as HTMLFormElement
    const formData = new FormData(form)

    const { email, name, message } = Object.fromEntries(formData.entries())

    fetch('/api/postgre-send-message', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(() => {
      toast.success('Mensaje enviado con éxito!')
      form.reset()

      confetti()
    }).catch((error) => {
      console.log(error)
      toast.error('hubo un error al enviar el mensaje')
    })
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-8 w-80 border border-white/10 p-8 rounded-lg'>
      <Input
        name='email'
        id='email'
        placeholder='hola@gmail.com'
        type='email'
        label='Email:'
      />
      <Input
        name='name'
        id='text'
        placeholder='daniel'
        type='text'
        label='tu nombre:'
      />
      <Input
        name='message'
        id='message'
        placeholder='escribe tu mensaje'
        type='text'
        label='tu mensaje:'
      />

      <Button>Enviar mensaje</Button>
    </form>
  )
}
