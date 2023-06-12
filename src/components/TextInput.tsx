import { InputHTMLAttributes } from 'react'

export function TextInput({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={'border border-gray-100' + (className ?? '')} {...rest} />
  )
}
