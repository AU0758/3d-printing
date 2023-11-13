import React from 'react'
import filementIcon from '@/public/3d-printing-filament.png'
import printerIcon from '@/public/3d-printing-printer.svg'
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className='flex sticky justify-between top-0 p-5 bg-[#0002] dark:bg-[#FFF2] text-gray-700 font-extrabold backdrop-blur-xl shadow-md z-50'>
        <div>
          <a href='#model' className='m-1'>Model</a>
          <a href='#printer' className='m-1'>3d Printer</a>
          <a href='#send' className='m-1'>Send</a>
        </div>
        <div className='flex justify-center items-center'>
          <Link href="./filement" className='flex justify-center items-center transition-all active:contrast-125'>
            <Image width={30} height={30} src={filementIcon} alt='filement' className='opacity-60 contrast-75 p-1'/>
          </Link>
          <Link href="./printer" className='flex justify-center items-center transition-all active:contrast-125'>
            <Image width={30} height={30} src={printerIcon} alt='printer' className='opacity-80'/>
          </Link>
        </div>
    </nav>
);
}