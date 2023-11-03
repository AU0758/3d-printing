'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [materials, setMaterials] = useState({});
  const [printers, setPrinters] = useState({});

  console.log(printers)

  return (
    <main className='flex flex-col'>
      {materials !== {} ? 
        <form>
          <section id='model' className='flex w-[100%]'>
            <input type='file' className='w-[100%] cursor-pointer'/>
            <div className='flex bg-white carrousel_y w-[100%]'>
              {materials?.map((material) => {
                <div className={`flex justify-center items-center trasition-all bg-[${material.bg}] material cursor-pointer`}>
                  <p className={`absolute right-0 top-0 m-1 text-white opacity-80`}>{material.price}</p>
                  <Image width={800} height={800} src={material.image} className="exebit"/>
                </div>
              })}
            </div>
          </section>
          <section id='printer' className='flex w-[100%]'>
            <div className='flex bg-white carrousel_y w-[100%]'>
              {printers?.map((printer) => {
                <div className={`flex justify-center items-center bg-[${printer.bg}] material cursor-pointer`}>
                  <Image width={800} height={800} src={printer.image} className="exebit"/>
                </div>
              })}
            </div>
          </section>
          <section id='send' className='flex justify-center items-center w-[100%] h-[800px]'>
            <div>
              <button className='text-white active:scale-90 cursor-pointer'>Send</button>
              <div className='flex justify-between'>
                {materials.price}
              </div>
            </div>
          </section>
        </form> 
      :
        <div className='flex flex-col opacity-80 justify-center max-w-[800px] p-5'>
          <h1>ERRO!</h1>
          <p>Não há material para efetuar a operação</p>
        </div>
      }

    </main>
  )
}
