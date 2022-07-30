import React, { ReactNode } from 'react'

function Label({ children, id }: { children: ReactNode; id: string }) {
  return <label htmlFor={id} className="mt-3 inline-block">{children}</label>
}

export default Label
