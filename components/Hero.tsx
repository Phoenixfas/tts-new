import React from 'react'

export default function Hero({title}: {title: string}) {
  return (
    <div className='w-full flex items-center justify-center py-40 bg-[linear-gradient(to_top,_#050752,_#4EAEE5)]'>
        <h1 className='text-5xl font-bold text-white text-center'>{title}</h1>
    </div>
  )
}
