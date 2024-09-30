import React from 'react'

const Big = ({ pic }) => {
    return (
        <div className='h-[400px] w-full'>
            <img className='rounded-xl h-full w-full ' src={pic} alt="" />
        </div>
    )
}

export default Big
