import React, { useState } from 'react'

const Modeal = () => {

    const [modal, setModal] = useState(false);
    // console.log(modal);

    return (
        <>
            <div className='h-screen  flex justify-center relative items-center'>
                <div onClick={() => setModal(!modal)} className=' bg-stone-600 flex items-center justify-center p-8 font-bold cursor-pointer rounded-md'>Open Modal</div>
                <div onClick={() => setModal(false)} className={`h-screen bg-opacity-50 bg-black ${modal ? 'flex' : 'hidden'} z-10 absolute w-full flex justify-center items-center`}>
                    <div className='text-white gap-6 flex justify-center rounded-xl items-center border flex-col bg-orange-300 w-96 p-10'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam earum porro voluptates quae ratione, nemo quisquam, similique dignissimos facilis neque modi, impedit dicta. Vero deserunt inventore, neque maiores ipsa alias quam eaque natus dolor unde! Blanditiis commodi odio eum dolorum vero soluta rerum, similique voluptatum saepe tempore eligendi, eius ab sunt sapiente esse quas? Dolorum recusandae, rem aut iusto, tempore assumenda quidem quibusdam </p>
                        <button className='p-4 bg-red-600 rounded-md' onClick={() => setModal(false)}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modeal
