import { useEffect, useState } from "react";

function StopWatch() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalRef = setInterval(() => { 
            setCount((prevCount) => {
                return prevCount + 1;
            });
        }, 1000);

        return () => {
            // Willunmount 
            clearInterval(intervalRef);
        }
    }, []);
    
    return (
        <div>
            <h1>Stop Watch</h1>
            <p>{count}</p>
        </div>
    );
}

export default StopWatch;