import React, { useEffect, useState, useRef } from 'react'

const Watch = () => {

    const [counter, setCounter] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
            setIsRunning(true);
        }
    };

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            setIsRunning(false);
        }
    };

    const resetTimer = () => {
        stopTimer();
        setCounter(0);
        setLaps([]);
    };

    const addLap = () => {
        if (isRunning) {
            setLaps((prevLaps) => [...prevLaps, counter]);
        }
    };

    // console.log(counter);
    

    const formatTime = (count) => {
        const getSeconds = `0${count % 60}`.slice(-2);
        const minutes = Math.floor(count / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(count / 3600)}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSeconds}`;
    };


    return (
        <div className='watchbg h-screen flex items-center justify-center'>
            <div className='w-[500px] h-[500px] bg-black rounded-full bg-opacity-75 text-white flex items-center justify-center'>
                <div className="w-full text-center">
                    <h1 className='text-3xl'>STOPWATCH</h1>
                    <p className="text-5xl font-bold">{formatTime(counter)}</p>

                    <div className="flex gap-4 items-center justify-center mt-4">
                        {!isRunning ? (
                            <button className="bg-green-700 p-3 rounded-xl" onClick={startTimer}>
                                Start
                            </button>
                        ) : (
                            <button className="bg-yellow-700 p-3 rounded-xl" onClick={stopTimer}>
                                Stop
                            </button>
                        )}
                        <button className="bg-blue-700 p-3 rounded-xl" onClick={addLap}>
                            Lap
                        </button>
                        <button className="bg-red-700 p-3 rounded-xl" onClick={resetTimer}>
                            Reset
                        </button>
                    </div>

                    <div className="mt-6 max-h-[40px] overflow-y-scroll lap">
                        {laps.length > 0 && (
                            <>
                                {/* <h2 className="text-2xl">Laps</h2> */}
                                <ul className="mt-2">
                                    {laps.map((lap, index) => (
                                        <li key={index} className="text-xl">
                                            Lap {index + 1}: {formatTime(lap)}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch
