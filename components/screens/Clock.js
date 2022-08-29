import {useState, useEffect} from 'react'

export default function clock(){
    const [time, setTime] = useState(new Date());

    function refreshClock(){setTime(new Date());}
    useEffect(()=>{
        let timerID = setInterval(refreshClock, 1000);
        return function cleanup(){
            clearInterval(timerID);
        };
    }, [])

    return time.toLocaleTimeString()
}