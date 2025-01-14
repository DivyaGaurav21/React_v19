import { useEffect, useState } from "react";

function Counter() {
    const [timeLeft, setTimeLeft] = useState(10);
    useEffect(() => {
        if (timeLeft === 0) return;
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000)

        //cleanup
        return () => clearTimeout(timer)
    }, [timeLeft])
    return (
        <div>
            <p>{timeLeft}</p>
        </div>
    )
}

export default Counter;