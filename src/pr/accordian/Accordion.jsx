import React, { useReducer, useState } from 'react'
import info from './data.json'

const Accordion = () => {

    const [multiple, setmultiple] = useState(false);

    const [data, setData] = useState(info);

    const clickHandler = (index) => {
        if (multiple) {
            setData((prev) => {

                const updated = prev.map((e, id) => {

                    if (id === index) {
                        return { ...e, flag: !e.flag };
                    }
                    return e;

                });

                console.log(updated);
                return updated;
            })
        } else {
            setData((prev) => {
                const updated = prev.map((e, id) => {
                    if (id === index) {
                        return { ...e, flag: !e.flag }
                    }
                    return { ...e, flag: false };
                })
                console.log(updated);
                return updated;
            })
        }


    }

    console.log(multiple);

    return (
        <>
            <div className='h-screen text-yellow-50'>

                <form className='flex items-center gap-4 mb-6 mt-6 justify-center' action="">
                    <label className='text-4xl capitalize underline ' htmlFor="">Multiple accordian</label>
                    <input onChange={() => { setmultiple(!multiple) }} type="checkbox" name="" id="" />
                </form>
                <div>
                    {
                        data.map((e, idx) => {
                            return (
                                <>
                                    <div className='border p-2 flex flex-col justify-between'>
                                        <div className='flex justify-between'>
                                            <h1>{e.title}</h1>
                                            <span onClick={() => { clickHandler(idx) }} className='bg-red-700 rounded-full h-[30px] w-[30px] text-xl p-1 cursor-pointer flex items-center justify-center'>{e.flag ? "-" : "+"}</span>
                                        </div>
                                        <div className={e.flag ? "block" : "hidden"}><p>{e.description}</p></div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Accordion;
