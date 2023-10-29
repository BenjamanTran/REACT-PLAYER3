import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ targetTime, timeRemaining, onReset }, ref) {
  const dialog = useRef()
  const userLost = timeRemaining <= 0
  const formatRemainingTime = (timeRemaining / 1000).toFixed(2)
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100)
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost ? <h2>You Lost</h2> : <h2>You Win Score: {score} !!!</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formatRemainingTime}seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
})

export default ResultModal;
