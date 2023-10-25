import { useState, useRef } from "react"

export default function TimerChallenge({title, tagetTime }) {
    const [timeExpired, setTimeExpired] = useState(false)
    const [timeStarted, setTimeStarted] = useState(false)
    const timer = useRef()

    const handleStart = () => {
        timer.current = setTimeout(()=>{
            setTimeExpired(true)
            setTimeStarted(false)
        }, tagetTime * 1000)
        setTimeStarted(true)
        setTimeExpired(false)
    }

    const handleStop = () => {
        setTimeStarted(false)
        clearTimeout(timer.current)
    }

    return <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && 'You lost !!!'}
        <p className="challenge-time">
            {tagetTime} second{   tagetTime > 1 ? 's' : '' }
        </p>
        <p>
            <button onClick={ timeStarted ? handleStop : handleStart  }>
                {timeStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timeStarted ? 'active' : undefined}>
            {timeStarted ? 'Time is running ...' : 'Timer inactive'}
        </p>
    </section>
}