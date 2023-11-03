import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section id='model' className='flex'>
        <input type='file'/>

        <div className='flex bg-white carrousel_y'>
          {materials?.map((material) => {
            <div className={`flex justify-center items-center bg-[${material.bg}] material`}>
              <Image width={800} height={800} src={material.image} className="exebit"/>
            </div>
          })}
        </div>
      </section>
      <section id='printer' className='flex'>
        <input type='file'/>

        <div className='flex bg-white carrousel_y'>
          {printers?.map((printer) => {
            <div className={`flex justify-center items-center bg-[${printer.bg}] material`}>
              <Image width={800} height={800} src={printer.image} className="exebit"/>
            </div>
          })}
        </div>
      </section>
    </main>
  )
}
