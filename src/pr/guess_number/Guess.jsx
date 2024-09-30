import React, { useEffect, useState } from 'react'

const Guess = () => {

    const [number, setnum] = useState(0);
    const [val, setval] = useState(0);
    const [msg, setmsg] = useState("Take a Guess!");

    const createNum = () => {
        const x = Math.floor(Math.random() * 100);
        setnum(x);
        setval(0)
    }

    console.log(number);

    const check = () => {
        number > val ? setmsg("Think BIG") : number < val ? setmsg("Think SMALL") : setmsg("BINGO!");
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        check();
    }

    useEffect(() => {
        createNum();
    }, [])


    return (
        <div className='text-white w-full h-screen flex flex-col justify-center items-center gap-4'>
        <h1 className='text-4xl font-bold underline text-amber-300'>Guessing Game</h1>
            <h1>Select a number between 1 and 100</h1>
            <div className='flex flex-col justify-center w-full items-center gap-4'>
                <form onSubmit={(e) => { submitHandler(e) }} className='w-1/2 text-center p-5'>
                    <input value={val} onChange={(e) => { setval(e.target.value) }} type="number" name="" id="" className='bg-fuchsia-950 w-full px-4 py-2 rounded-2xl text-center' max={100} min={0} />
                </form>
                <div className='flex gap-4'>
                    <button onClick={createNum} className='bg-red-700 font-semibold rounded-xl px-5 py-2'>RESET</button>
                    <button className='bg-green-700 font-semibold rounded-xl px-5 py-2' onClick={(e) => { submitHandler(e) }}>CHECK</button>
                </div>
                <p>{msg}</p>
            </div>
        </div>
    )
}

export default Guess
