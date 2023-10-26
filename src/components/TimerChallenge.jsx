import { useState, useRef } from "react"
import ResultModal from "./ResultModal.jsx"

export default function TimerChallenge({title, targetTime }) {
    const [timeExpired, setTimeExpired] = useState(false)
    const [timeStarted, setTimeStarted] = useState(false)
    const timer = useRef()
    const dialog = useRef()

    const handleStart = () => {
        timer.current = setTimeout(()=>{
            setTimeExpired(true)
            dialog.current.open()
        }, targetTime * 1000)
        setTimeStarted(true)
        
        
    }

    const handleStop = () => {
        clearTimeout(timer.current)
    }

    return <>
    <ResultModal ref={dialog} result="lost" targetTime={targetTime}/>
     <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{   targetTime > 1 ? 's' : '' }
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
    </>
}