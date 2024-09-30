import React, { useState } from 'react'

const Chips = () => {

    const [chips, setchips] = useState([]);
    const [val, setval] = useState("");

    console.log(val);
    console.log(chips);

    const submitHandler = (event) => {
        event.preventDefault();
        val == "" ? null :
            setchips((prev) => {
                return [...prev, val]
            })
        setval("");
    }

    const deleteHandler = (index) => {

        setchips((prev) => {
            return (
                prev.filter((e, idx) => {
                    return index != idx
                })
            )
        })
    }



    return (
        <div className='w-full h-screen p-10 flex flex-col gap-8 items-center'>
            <form className='w-full flex justify-center' action="" onSubmit={(e) => { submitHandler(e) }}>
                <input className='px-4 w-1/2 py-2 bg-violet-900 text-white rounded-xl' placeholder='Add chips & hit enter...' value={val} onChange={(e) => setval(e.target.value)} type="text" />
            </form>
            <div className='flex w-[70vw] flex-shrink-0 gap-3  flex-wrap'>
                {
                    chips.length != 0 ? chips.map((e, idx) => {
                        return (
                            <>
                                <div className='rounded-xl flex gap-6 px-4 bg-lime-300 '>
                                    <p>{e}</p>
                                    <span onClick={() => { deleteHandler(idx) }} className='text-red-900 font-semibold cursor-pointer'>X</span>
                                </div>
                            </>
                        )
                    }) : <>
                        <p className='text-white font-bold'>No Chips....</p>
                    </>
                }
            </div>
        </div>
    )
}

export default Chips
