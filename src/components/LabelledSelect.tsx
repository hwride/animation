import { clsx } from 'clsx'
import { ReactNode, SelectHTMLAttributes } from 'react'

export function LabelledSelect({
  id,
  label,
  value,
  children,
  onOptionChange,
  selectClassName,
}: SelectHTMLAttributes<HTMLSelectElement> & {
  label: ReactNode
  value: string
  onOptionChange: (value: string) => void
  selectClassName?: string
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className={clsx(selectClassName, 'border border-gray-100')}
        value={value}
        onChange={(e) => onOptionChange(e.target.value)}
      >
        {children}
      </select>
    </>
  )
}
