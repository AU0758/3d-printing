import React from 'react'

const getFilement = async() => {
  try {
    const res = await fetch('http://localhost:3000/api/filement', {cache: "no-store"});
    console.log("Data fetching: %cOK", "color: green");
    return res.json();
  } catch (error) {
    console.error("Series Collection: c%FAILED","color:red",error);
  }
} 

export default async function Filement() {
  const {filements} = await getFilement();

  return (
    <section id='materials' className='flex h-[calc(100vh-30px-2.5rem)] w-[50vw] overflow-hidden bg-white'>
        <button className='abosolute left-0'>
        l
        </button>
        <div className='flex bg-black'>
        {filements?.map((material) => {
            const hg = {backgroundColor:material.bg}
            return(
            <div className='w-[50vw] h-[calc(100vh-30px-2.5rem)] flex items-center justify-center' style={hg}>
                <p>{material.name}</p>
            </div>
            );
        })}
        </div>
        <button className='abosolute left-[50px]'>
        r
        </button>
    </section>
  )
}