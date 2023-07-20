import React from 'react'

export const Card= ({children}) => {
  return (
    <div className='border p-4 shadow-md w-64'>
      {children}
    </div>
  )
}
