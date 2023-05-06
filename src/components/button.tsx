export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button type='submit' className='w-full block px-5 py-3 text-sm text-white text-center font-medium border border-white rounded-full'>{children}</button>
  )
}
