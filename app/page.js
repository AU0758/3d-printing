import Image from 'next/image'
import More from '@/public/more.svg';
import Draw from '@/public/draw.svg';
import Cube from '@/public/3d.svg';

import Filement from '@/components/sections/Filement';
import Printer from '@/components/sections/Printer.jsx';


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
        dadwd
      </section>
      <div className='flex-1'>
        <Filement />
        <Printer />
        <section id='send' className='flex items-center justify-center h-[calc(100vh-30px-2.5rem)] w-[100%]'>
              
        </section>
        <footer>

        </footer>
      </div>
    </section>
  )
}
