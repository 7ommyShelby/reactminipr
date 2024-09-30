import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Big from './Big';


const ImageGal = () => {

    const [arr, setArr] = useState(null);

    const getimg = async () => {
        const key = '46204454-0bd56ce478f27678dbc81ef2b'
        axios.get(`https://pixabay.com/api/?key=${key}`)
            .then((data) => {
                // console.log(data.data.hits);
                // img = data.data.hits
                setArr(data.data.hits);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // console.log(arr);

    const [pic, setPic] = useState(null);

    // console.log(pic);

    useEffect(() => {
        getimg();
    }, [])


    return (
        <div className='flex p-3 h-full flex-col w-full items-center gap-4 mt-3'>
            <h1 className='text-center text-slate-50'>Wait for the API call to happen and Click on any Image to view it full size</h1>
            <div className='box flex gap-4 overflow-x-scroll py-4 w-[90vw] min-w-[400px]'>
                {
                    arr &&
                    arr.map((e) => {
                        return (
                            <>
                                <div className='rounded-lg flex-shrink-0 w-[300px] overflow-hidden ease-in-out flex h-[300px]'>
                                    <img onClick={() => { setPic(e.largeImageURL) }} className=' transition-transform duration-300 hover:scale-125 h-full w-full' src={e.largeImageURL} alt="" />
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <p className='text-white'>Scroll horizontly to get images press Shift+Scroll</p>
            <div>
                <Big pic={pic} />
            </div>
        </div>
    )
}

export default ImageGal
