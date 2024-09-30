import { div } from 'framer-motion/client'
import React, { useState } from 'react'

const Todo = () => {

    const [list, setList] = useState([]);

    const [task, setTask] = useState("");

    const [currTask, setCurrTask] = useState(null);

    const submitHandler = (e) => {

        e.preventDefault();

        task != "" ?

            currTask ? setList((prev) => {
                const updateIdx = list.indexOf(currTask);
                list[updateIdx] = task;
                setCurrTask("");
                return [...prev];
            }) :
                setList((prev) => {
                    return [...prev, task]
                }) : null

        setTask("")
    }

    console.log(task, list);

    const deleteHandler = (index) => {
        setList(list.filter((e, idx) => idx != index))
    }

    const editHandler = (index) => {
        setCurrTask(list[index]);
        setTask(list[index]);
    }

    console.log(currTask);


    return (

        <>
            <div className='h-screen w-full flex flex-col items-center p-5'>
                <h1 className='font-bold text-gray-50 text-3xl'>To Do List</h1>
                <div className='w-full items-center flex flex-col'>

                    <form onSubmit={(e) => { submitHandler(e) }} className='p-4 w-1/2 flex gap-5' action="">
                        <input onChange={(e) => { setTask(e.target.value) }} value={task} className='px-4 border-orange-600 py-2 bg-violet-900 text-slate-50 rounded-lg w-full' placeholder='Enter a task....' type="text" name="" id="" />
                        <button className="bg-[#662d91] text-white hover:scale-110 duration-200 ease-in px-7 py-2 rounded-lg font-bold">{
                            currTask ? "UPDATE" : "ADD"
                        }</button>
                    </form>

                    <div className='flex list gap-4 flex-col w-[600px] p-3 max-h-[80vh] overflow-y-scroll  text-white'>
                        {
                            list.length != 0 ?
                                list.map((e, idx) => {
                                    return (
                                        <>
                                            <div className='flex justify-between px-4'>
                                                <div className='flex gap-3'>
                                                    <span className='h-[30px] w-[30px] border rounded-2xl text-center'>{idx + 1}</span>
                                                    <p>{e}</p>
                                                </div>
                                                <div className='flex gap-3'>
                                                    <button onClick={() => { editHandler(idx) }} className='bg-green-500 hover:scale-110 duration-200 ease-in px-4 rounded-lg'>Edit</button>
                                                    <button onClick={() => { deleteHandler(idx) }} className='bg-red-500 hover:scale-110 duration-200 ease-in px-4 rounded-lg'>Delete</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }) : <><p>No Work!</p></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
