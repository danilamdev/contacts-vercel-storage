interface Inputprops {
  id: string
  name: string
  type: string
  placeholder: string
  label: string
}

export const Input = ({ id, name, label, type, placeholder, ...props }: Inputprops) => {
  return (
    <fieldset className='mb-6'>
      <label className='block mb-2 tracking-tight text-sm font-medium text-gray-300' htmlFor={id}>{label}</label>
      <input className='p-2 rounded-lg block text-sm border border-gray-600 w-full bg-white/5 placeholder-gray-400 text-white' type={type} placeholder={placeholder} name={name} id={id} />

    </fieldset>
  )
}
