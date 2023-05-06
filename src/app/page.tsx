import { Form } from '@/components/form'
import { KVViewContacts } from '@/components/KVViewContacts'
// import { PostgreForm } from '@/components/postgreForm'

export default function Home () {
  return (
    <main className=' flex min-h-screen flex-col justify-center items-center p-24'>
      <h2 className='font-bold text-4xl tracking-tight mb-4'>Contact Form</h2>
      <Form />
      {/* <PostgreForm /> */}
      <KVViewContacts />
    </main>
  )
}
