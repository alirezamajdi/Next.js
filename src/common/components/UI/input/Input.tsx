import React, { useImperativeHandle, useRef, memo } from 'react'

interface Props {
  id?: string
  type: string
  name: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  minLength?: number
  title?: string
  maxLength?: number
  placeholder?: string
  className?: string
  value?: string | number
  required?: boolean
  ref?: HTMLInputElement
  readonly?: boolean
  autocomplete?: string
  dir?: string
  error?: string
}

interface IImperativeHandler {
  focus: () => void
  value?: string | number
}
const Input = React.forwardRef<IImperativeHandler, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  function inputFocused() {
    inputRef.current?.focus()
    inputRef.current?.setAttribute('style', 'border:2px solid red')
    console.log(inputRef.current?.value)
  }

  useImperativeHandle(ref, () => {
    return {
      focus: inputFocused,
      value: props.value,
    }
  })
  return (
    <>
      <input
        ref={inputRef}
        id={props.id ?? props.name}
        name={props.name}
        minLength={props.minLength}
        maxLength={props.maxLength}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        readOnly={props.readonly || false}
        onChange={props.onChange}
        required={props.required}
        autoComplete={props.autocomplete || 'off'}
        dir={props.dir}
        className={
          props.error
            ? `border-red-400 border ${props.className} my-2`
            : props.className + ' my-2'
        }
      />
      {props.error && <p>{props.error}</p>}
    </>
  )
})

export default memo(Input)
