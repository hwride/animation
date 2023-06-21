import { clsx } from 'clsx'
import { ReactNode, SelectHTMLAttributes } from 'react'

type LabelledSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: ReactNode
  value: string
  onOptionChange: (value: string) => void
  selectClassName?: string
}

export function LabelledSelect({
  id,
  label,
  value,
  children,
  onOptionChange,
  selectClassName,
}: LabelledSelectProps) {
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

export function BoolLabelledSelect({
  value,
  onOptionChange,
  ...rest
}: Omit<LabelledSelectProps, 'value' | 'onOptionChange' | 'children'> & {
  value: boolean
  onOptionChange: (value: boolean) => void
}) {
  return (
    <LabelledSelect
      {...rest}
      value={String(value)}
      onOptionChange={(val) => onOptionChange(val === 'true')}
    >
      <option value="true">true</option>
      <option value="false">false</option>
    </LabelledSelect>
  )
}
