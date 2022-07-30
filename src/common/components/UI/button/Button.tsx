import React from 'react'
import { ReactSVG } from 'react-svg'

export interface ButtonProps {
  size?: 'medium' | 'large' | 'largest'
  icon?: 'right' | 'listing'
  icon_align?: 'left' | 'right'
  label: string
  onClick?: () => void
  style?: string
  mode?: 'primary' | 'outline'
}

const Button = ({
  size = 'medium',
  icon,
  icon_align = 'left',
  style,
  label,
  mode = 'primary',
  ...props
}: ButtonProps) => {
  const left_icon = icon_align === 'left' && icon
  const right_icon = icon_align === 'right' && icon

  return (
    <button
      type='submit'
      className={`btn  ${mode} ${size} ${style} `}
      {...props}
    >
      {left_icon && (
        <span className='pr-[8px]'>
          <ReactSVG src={`/img/${icon}.svg`} />
        </span>
      )}
      <span className='pb-[1.5px]'>{label}</span>
      {right_icon && (
        <span className='pl-[8px]'>
          <ReactSVG src={`/img/${icon}.svg`} />
        </span>
      )}
    </button>
  )
}
export default Button
