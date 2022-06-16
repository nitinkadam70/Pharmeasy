import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(59);
    const [hour, setHour] = useState(23)

    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds - 1);
            if (seconds == 1) {
                setMinutes(minutes - 1)
                setSeconds(59);
            }
            if (minutes == 1 && seconds == 1) {
                setSeconds(59)
                setMinutes(59);
                setHour(hour - 1)
            }

        }, 1000)
        return () => clearInterval(timer);

    });

    const reset = () => {
        setSeconds(0);
        setMinutes(0);
        setHour(0);
    };

    const stop = () => {
        clearInterval(timer);
    };
    return (
        <div>
            <div>
                <div>
                    <h1 style={{color:"#f76b6d",fontWeight:'bold', fontSize:'18px'}}>{hour < 10 ? "0" + hour : hour}: {minutes < 10 ? "0" + minutes : minutes}: {seconds < 10 ? "0" + seconds : seconds} left</h1>
                </div>

            </div>
        </div>
    )
}

export default Timer