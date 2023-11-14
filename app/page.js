import Image from 'next/image'
import More from '@/public/more.svg';
import Draw from '@/public/draw.svg';
import Cube from '@/public/3d.svg';

import Filement from '@/components/sections/Filement.jsx';
import Printer from '@/components/sections/Printer.jsx';
import Model from '@/components/sections/Model.jsx';


// TODO: Make form for 3d Model and use the THREE.js component path: @/components/THREE.js

export default function Home() {
  return (
    <section className='w-[100%]  flex justify-stretch'>
      <section className='sticky top-[calc(30px+2.5rem)] bg-[#FFF2] dark:bg-[#0002] flex-1 flex items-center justify-center h-[calc(100vh-30px-2.5rem)]'>
        <div className='absolute left-0 top-0 more'>
          <Image width={30} height={10} src={More} alt='draw' className='m-1 cursor-pointer dropbtn flex'/>
          <div className={`flex flex-col m-1 p-1 bg-[#fff] rounded-lg shadow-2xl w-[30px] items-center `}>{/* ${drop ? 'hidden' : 'visible'} */}
            <Image width={30} height={30} src={Draw} alt='model'/>
            <Image width={30} height={30} src={Cube} alt='text'/>
            <p className='font-serif text-[20px]'>T</p>
          </div>
        </div>
        <Model />
      </section>
      <div className='flex-1'>
        <Filement />
        <Printer />
        <footer className='flex text-[#fff9] text-2xl uppercase font-extrabold '>
          <p className='text-8xl m-1'>#</p>
          <div className='flex flex-col justify-between'>
            <p className='m-1'>Made By 000</p>
            <div>
              <a className='m-1' href='https://twitter.com/Nori002sa'>Twitter</a>
              <a className='m-1' href='https://www.youtube.com/channel/UCSWoicWel0PjDG56-9Gj_oQ'>Youtube</a>
              <a className='m-1' href='https://github.com/AU0758'>Github</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
