import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section id='print'>
        <p className='font-extrabold text-gray-700 text-4xl'>Print Anywhere for the price of cents</p>

        <div className='flex bg-white'>
          In three simple stepps
        </div>
      </section>
    </main>
  )
}
