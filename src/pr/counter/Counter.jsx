import React, { useState } from 'react'

const Counter = () => {

    const [val, setVal] = useState(0);
    const [gap, setGap] = useState(1);

    const inc = () => {
        setVal(val + gap)
    }
    const dec = () => {
        setVal(val - gap)
    }
    const res = () => {
        setVal(0);
        setGap(1);
    }

    console.log(val);
    console.log(gap);


    return (
        <div className='h-screen flex flex-col p-5 text-white items-center justify-center gap-5'>
            <h1 className='text-3xl'>{val}</h1>
            <div className='flex gap-4'>
                <button onClick={inc} className='bg-green-700 px-4 py-2 rounded-lg'>Increase</button>
                <button onClick={dec} className='bg-red-700 px-4 py-2 rounded-lg'>Decrease</button>
            </div>
            <input value={gap} onChange={(e) => { setGap(Number(e.target.value)) }} className='bg-stone-800 text-white px-4 py-2 rounded-md w-1/2' placeholder='Increment/Decrement by...' type="number" />
            <button onClick={res} className='bg-violet-950 px-4 py-2 rounded-lg'>Reset</button>
        </div>
    )
}

export default Counter
