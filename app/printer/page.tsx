'use client';

import React, { useState } from 'react'

const Printer = () => {
  const [price, setPrice] = useState<string>()
  const [file, setFile] = useState<File>()
  const [name, setName] = useState<string>()
  const [bg, setBg] = useState<string>()
  const [availability, setAvailability] = useState<string>()

  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)
      data.set('name', name)
      data.set('bg', bg)
      data.set('availability', availability)
      data.set('price', price)

      const res = await fetch('/api/printer', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      // Handle errors here
      console.error(e)
    }
  }

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input type='number' name='price'
          onChange={(e) => setPrice(e.target.value)}/>
        <input type='text' name='name'
          onChange={(e) => setName(e.target.value)}/>
        <input
          type='file'
          name='file'
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <input type='color' name='bg'
          onChange={(e) => setBg(e.target.value)}/>
        <input type='text' name='availability'
          onChange={(e) => setAvailability(e.target.value)}/>
        <input type='submit' value='Upload' />
      </form>
    </main>
  )
}

export default Printer